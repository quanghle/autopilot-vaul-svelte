export function chain(...callbacks) {
    return (...args) => {
        for (const callback of callbacks) {
            if (typeof callback === "function") {
                callback(...args);
            }
        }
    };
}
