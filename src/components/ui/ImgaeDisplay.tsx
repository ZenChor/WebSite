// ui/components.tsx
import React from 'react';
import { ProcessedImage, PopulationMember, DebugInfo } from '../types';
import { ImageProcessor } from '../ImageProcessor';

interface ImageDisplayProps {
    imageData: ProcessedImage | null;
    processor: ImageProcessor | null;
    title: string;
    score?: number;
    className?: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({
    imageData,
    processor,
    title,
    score,
    className = ""
}) => {
    if (!imageData || !processor) return null;

    return (
        <div className={className}>
            <h3 className="font-bold mb-2">
                {title}
                {score !== undefined && ` (Score: ${score.toFixed(4)})`}
            </h3>
            <img
                src={processor.dataToImageURL(
                    imageData.pixels,
                    imageData.width,
                    imageData.height
                )}
                alt={title}
                className="max-w-full border border-gray-200"
            />
        </div>
    );
};

interface PopulationGalleryProps {
    population: PopulationMember[];
    processor: ImageProcessor | null;
    targetImage: ProcessedImage | null;
}

export const PopulationGallery: React.FC<PopulationGalleryProps> = ({
    population,
    processor,
    targetImage
}) => {
    if (!processor || !targetImage) return null;

    return (
        <div>
            <h3 className="font-bold mb-2">Population Gallery</h3>
            <div className="grid grid-cols-4 gap-2">
                {population.slice(0, 8).map((member, idx) => (
                    <div key={idx} className="text-center">
                        <img
                            src={processor.dataToImageURL(
                                member.composite,
                                targetImage.width,
                                targetImage.height
                            )}
                            alt={`Population ${idx}`}
                            className="w-full border border-gray-200"
                        />
                        <div className="text-xs mt-1">Score: {member.score.toFixed(4)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

interface DebugPanelProps {
    debug: DebugInfo;
    generation: number;
    evolutionsPerSecond: number;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({
    debug,
    generation,
    evolutionsPerSecond
}) => {
    return (
        <div className="space-y-4">
            <div>
                <h3 className="font-bold mb-2">Performance Metrics</h3>
                <div className="bg-gray-100 p-2 rounded">
                    <div>Generation: {generation}</div>
                    <div>Evolutions/sec: {evolutionsPerSecond.toFixed(1)}</div>
                    <div>Population Size: {debug.populationSize}</div>
                </div>
            </div>
            <div>
                <h3 className="font-bold mb-2">Debug Info</h3>
                <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-48">
                    {JSON.stringify(debug, null, 2)}
                </pre>
            </div>
        </div>
    );
};
