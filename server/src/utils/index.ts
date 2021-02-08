export const makeTwoDimensionArray = (height: number, width: number, value: any) => {
    return Array.from(Array(height), () => Array(width).fill(value));
};
