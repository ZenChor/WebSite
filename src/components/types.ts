// types.ts
export interface ProcessedImage {
    pixels: Float32Array;
    width: number;
    height: number;
}

export interface PopulationMember {
    composite: Float32Array;
    score: number;
    selectedIndices: number[];
    weights: number[];
}

export interface DebugInfo {
    message: string;
    score: number;
    selectedIndices: number[];
    weights: number[];
    populationSize: number;
    evolutionsPerSecond: number;
    generation: number;
    imageLoadingStatus: {
        target: string;
        sources: Record<string, string>;
    };
    error?: string | null;
    [key: string]: any;
}

export interface CompositeResult {
    pixels: Float32Array;
    score: number;
    selectedIndices: number[];
    weights: number[];
}

export const IMAGE_PATHS = {
    TARGET_PATH: '/images/target.png',
    SOURCE_PATHS: [
        "/images/blue.png",
        "/images/cyan.png",
        "/images/green.png",
        "/images/magenta.png",
        "/images/red.png",
        "/images/yellow.png"
    ]
} as const;
