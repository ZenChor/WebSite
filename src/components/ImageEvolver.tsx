"use client";

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ImageProcessor } from './ImageProcessor';
import { evolveGeneration } from './evolutionUtils';
import { ImageDisplay, PopulationGallery, DebugPanel } from './ui/ImgaeDisplay';
import { ProcessedImage, PopulationMember, DebugInfo, IMAGE_PATHS } from './types';

const ImageEvolver: React.FC = () => {
    const [targetImage, setTargetImage] = useState<ProcessedImage | null>(null);
    const [sourceImages, setSourceImages] = useState<ProcessedImage[]>([]);
    const [currentBest, setCurrentBest] = useState<ProcessedImage | null>(null);
    const [population, setPopulation] = useState<PopulationMember[]>([]);
    const [generation, setGeneration] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [isAutoRunning, setIsAutoRunning] = useState(false);
    const [evolutionsPerSecond, setEvolutionsPerSecond] = useState(0);
    const [debug, setDebug] = useState<DebugInfo>({
        message: 'Initializing...',
        score: 0,
        selectedIndices: [],
        weights: [],
        populationSize: 20, // Set default population size
        evolutionsPerSecond: 0,
        generation: 0,
        imageLoadingStatus: {
            target: 'pending',
            sources: {}
        }
    });

    const processorRef = React.useRef<ImageProcessor | null>(null);

    useEffect(() => {
        processorRef.current = new ImageProcessor(true);
        return () => {
            setIsAutoRunning(false);
        };
    }, []);

    useEffect(() => {
        const loadImages = async () => {
            if (!processorRef.current) return;

            const imageLoadingStatus = {
                target: 'pending',
                sources: {} as Record<string, string>
            };

            try {
                setDebug(prev => ({
                    ...prev,
                    message: 'Loading target image...',
                    imageLoadingStatus
                }));

                const target = await processorRef.current.imageToData(IMAGE_PATHS.TARGET_PATH);
                imageLoadingStatus.target = 'loaded';
                setTargetImage(target);

                const sources = [];
                for (const path of IMAGE_PATHS.SOURCE_PATHS) {
                    try {
                        imageLoadingStatus.sources[path] = 'loading';
                        const img = await processorRef.current.imageToData(path);
                        sources.push(img);
                        imageLoadingStatus.sources[path] = 'loaded';
                    } catch (err) {
                        console.error(`Error loading source image ${path}:`, err);
                        imageLoadingStatus.sources[path] = 'error';
                    }
                }

                setSourceImages(sources);
                setDebug(prev => ({
                    ...prev,
                    message: `Loaded ${sources.length} source images successfully`,
                    imageLoadingStatus
                }));
            } catch (err) {
                console.error('Error in image loading process:', err);
                imageLoadingStatus.target = 'error';
                setError(err instanceof Error ? err.message : 'Failed to load images');
            }
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!isAutoRunning) return;

        let startTime = performance.now();
        let generations = 0;
        let frameId: number;

        const runFrame = () => {
            if (!targetImage || sourceImages.length === 0) return;

            const result = evolveGeneration(targetImage, sourceImages, 20);
            if (result) {
                const newComposite = {
                    pixels: result.pixels,
                    width: targetImage.width,
                    height: targetImage.height
                };
                setCurrentBest(newComposite);
                setGeneration(g => g + 1);

                // Create new population member
                const newPopulationMember = {
                    composite: result.pixels,
                    score: result.score,
                    selectedIndices: result.selectedIndices,
                    weights: result.weights
                };

                // Update population with new member
                setPopulation(prev => {
                    const newPop = [...prev, newPopulationMember];
                    // Keep only the best 8 members
                    return newPop.sort((a, b) => a.score - b.score).slice(0, 8);
                });

                // Update debug info with latest score
                setDebug(prev => ({
                    ...prev,
                    message: `Generation ${generation + 1}: Score ${result.score.toFixed(4)}`,
                    score: result.score,
                    selectedIndices: result.selectedIndices,
                    weights: result.weights,
                    generation: generation + 1,
                    populationSize: 20,
                    evolutionsPerSecond
                }));
            }

            generations++;

            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            if (elapsed >= 1000) {
                setEvolutionsPerSecond(generations * (1000 / elapsed));
                startTime = currentTime;
                generations = 0;
            }

            frameId = requestAnimationFrame(runFrame);
        };

        frameId = requestAnimationFrame(runFrame);

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [isAutoRunning, targetImage, sourceImages, generation]);

    const handleStepGeneration = () => {
        if (!targetImage || sourceImages.length === 0) return;

        const result = evolveGeneration(targetImage, sourceImages, 20);
        if (result) {
            const newComposite = {
                pixels: result.pixels,
                width: targetImage.width,
                height: targetImage.height
            };
            setCurrentBest(newComposite);
            setGeneration(g => g + 1);

            // Update debug info with latest score
            setDebug(prev => ({
                ...prev,
                score: result.score,
                selectedIndices: result.selectedIndices,
                weights: result.weights,
                generation: generation + 1,
                populationSize: 20,
                evolutionsPerSecond
            }));
        }
    };

    return (
        <div className="p-4">
            <Card className="mb-4 p-4">
                <h2 className="text-xl font-bold mb-2">Image Evolution Debug Panel</h2>
                {error && (
                    <div className="text-red-500 mb-2">{error}</div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <ImageDisplay
                            imageData={targetImage}
                            processor={processorRef.current}
                            title="Target Image"
                        />
                        <ImageDisplay
                            imageData={currentBest}
                            processor={processorRef.current}
                            title="Current Best"
                            score={debug.score}
                        />
                    </div>
                    <div className="space-y-4">
                        <PopulationGallery
                            population={population}
                            processor={processorRef.current}
                            targetImage={targetImage}
                        />
                        <DebugPanel
                            debug={debug}
                            generation={generation}
                            evolutionsPerSecond={evolutionsPerSecond}
                        />
                    </div>
                </div>

                <div className="mt-4 space-x-4">
                    <button
                        onClick={handleStepGeneration}
                        disabled={!targetImage || sourceImages.length === 0 || isAutoRunning}
                        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                    >
                        Step Generation
                    </button>
                    <button
                        onClick={() => setIsAutoRunning(!isAutoRunning)}
                        disabled={!targetImage || sourceImages.length === 0}
                        className={`${isAutoRunning ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded disabled:bg-gray-300`}
                    >
                        {isAutoRunning ? 'Stop Auto-Run' : 'Start Auto-Run'}
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default ImageEvolver;
