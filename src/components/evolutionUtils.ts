import { ProcessedImage, CompositeResult } from './types';

export const createComposite = (
    sourceImages: ProcessedImage[],
    selectedIndices: number[],
    weights: number[],
    targetLength: number
): Float32Array => {
    const composite = new Float32Array(targetLength);

    for (let j = 0; j < selectedIndices.length; j++) {
        const sourceImg = sourceImages[selectedIndices[j]];
        for (let k = 0; k < composite.length; k++) {
            composite[k] += sourceImg.pixels[k] * weights[j];
        }
    }

    return composite;
};

export const calculateScore = (composite: Float32Array, target: Float32Array): number => {
    if (!composite || !target || composite.length !== target.length) {
        console.error('Invalid inputs to calculateScore');
        return Infinity;  // Return worst possible score for invalid inputs
    }

    let score = 0;
    for (let i = 0; i < composite.length; i += 3) {
        const diffR = composite[i] - target[i];
        const diffG = composite[i + 1] - target[i + 1];
        const diffB = composite[i + 2] - target[i + 2];
        score += diffR * diffR + diffG * diffG + diffB * diffB;
    }

    const normalizedScore = score / (composite.length / 3);
    return isFinite(normalizedScore) ? normalizedScore : Infinity;
};

export const evolveGeneration = (
    targetImage: ProcessedImage,
    sourceImages: ProcessedImage[],
    populationSize: number = 20
): CompositeResult | null => {
    if (!targetImage || !sourceImages || sourceImages.length === 0) {
        console.error('Invalid inputs to evolveGeneration');
        return null;
    }

    let bestResult: CompositeResult | null = null;

    for (let i = 0; i < populationSize; i++) {
        const numImages = Math.floor(Math.random() * 4) + 2;  // 2 to 5 images
        const selectedIndices: number[] = [];
        const weights: number[] = [];

        // Select random images and weights
        for (let j = 0; j < numImages; j++) {
            selectedIndices.push(Math.floor(Math.random() * sourceImages.length));
            weights.push(Math.random());
        }

        // Normalize weights
        const weightSum = weights.reduce((a, b) => a + b, 0);
        for (let j = 0; j < weights.length; j++) {
            weights[j] /= weightSum;
        }

        const composite = createComposite(
            sourceImages,
            selectedIndices,
            weights,
            targetImage.pixels.length
        );

        const score = calculateScore(composite, targetImage.pixels);

        // Only update if this is the first result or if it's better than the previous best
        if (!bestResult || score < bestResult.score) {
            bestResult = {
                pixels: composite,
                score,
                selectedIndices,
                weights
            };
        }
    }

    // Log the best result for debugging
    if (bestResult) {
        console.log('Generation best score:', bestResult.score);
    }

    return bestResult;
};
