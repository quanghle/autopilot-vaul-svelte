type Callback = ((...args: unknown[]) => void) | undefined | null;
export declare function chain(...callbacks: Callback[]): (...args: unknown[]) => void;
export {};
