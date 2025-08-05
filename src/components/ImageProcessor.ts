// ImageProcessor.ts
import { ProcessedImage } from './types';

export class ImageProcessor {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private debug: boolean;

    constructor(debug = true) {
        this.canvas = document.createElement('canvas');
        const context = this.canvas.getContext('2d', { willReadFrequently: true });
        if (!context) {
            throw new Error('Failed to get 2D context');
        }
        this.ctx = context;
        this.debug = debug;
    }

    async imageToData(imgSrc: string): Promise<ProcessedImage> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            const handleLoad = () => {
                try {
                    if (this.debug) {
                        console.log(`Processing image: ${imgSrc}`, {
                            naturalWidth: img.naturalWidth,
                            naturalHeight: img.naturalHeight,
                            complete: img.complete,
                            currentSrc: img.currentSrc
                        });
                    }

                    if (!img.complete || !img.naturalWidth || !img.naturalHeight) {
                        throw new Error(`Image not fully loaded: ${imgSrc}`);
                    }

                    this.canvas.width = img.naturalWidth;
                    this.canvas.height = img.naturalHeight;

                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.drawImage(img, 0, 0);

                    const imageData = this.ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);

                    if (this.debug) {
                        console.log('ImageData retrieved:', {
                            width: imageData.width,
                            height: imageData.height,
                            dataLength: imageData.data.length,
                            samplePixels: Array.from(imageData.data.slice(0, 20))
                        });
                    }

                    const pixels = new Float32Array(imageData.width * imageData.height * 3);

                    for(let i = 0; i < imageData.height * imageData.width; i++) {
                        const srcIdx = i * 4;  // RGBA source index
                        const destIdx = i * 3; // RGB destination index
                        pixels[destIdx] = imageData.data[srcIdx] / 255;     // R
                        pixels[destIdx + 1] = imageData.data[srcIdx + 1] / 255; // G
                        pixels[destIdx + 2] = imageData.data[srcIdx + 2] / 255; // B
                    }

                    resolve({
                        pixels,
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    });
                } catch (err) {
                    console.error(`Error processing image ${imgSrc}:`, err);
                    reject(err);
                }
            };

            const handleError = () => {
                console.error(`Failed to load image ${imgSrc}`);
                reject(new Error(`Failed to load image: ${imgSrc}`));
            };

            const timeout = setTimeout(() => {
                img.src = '';
                reject(new Error(`Timeout loading image: ${imgSrc}`));
            }, 10000);

            img.onload = () => {
                clearTimeout(timeout);
                handleLoad();
            };
            img.onerror = () => {
                clearTimeout(timeout);
                handleError();
            };

            img.src = imgSrc;
        });
    }

    dataToImageURL(pixels: Float32Array, width: number, height: number): string {
        const imageData = new ImageData(width, height);

        for(let i = 0; i < height * width; i++) {
            const srcIdx = i * 3;  // RGB source index
            const destIdx = i * 4; // RGBA destination index

            imageData.data[destIdx] = Math.min(255, Math.max(0, Math.floor(pixels[srcIdx] * 255)));     // R
            imageData.data[destIdx + 1] = Math.min(255, Math.max(0, Math.floor(pixels[srcIdx + 1] * 255))); // G
            imageData.data[destIdx + 2] = Math.min(255, Math.max(0, Math.floor(pixels[srcIdx + 2] * 255))); // B
            imageData.data[destIdx + 3] = 255;   // A
        }

        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.putImageData(imageData, 0, 0);

        if (this.debug) {
            const dataUrl = this.canvas.toDataURL();
            console.log('Generated dataURL:', {
                length: dataUrl.length,
                preview: dataUrl.substring(0, 100) + '...'
            });
        }

        return this.canvas.toDataURL();
    }
}
