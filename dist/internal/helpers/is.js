// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset",
]);
export const isBrowser = typeof document !== "undefined";
export function isInput(target) {
    return ((target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type)) ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable));
}
export function isVertical(direction) {
    return direction === "top" || direction === "bottom";
}
export function isBottomOrRight(direction) {
    return direction === "bottom" || direction === "right";
}
export function isHTMLElement(el) {
    return el instanceof HTMLElement;
}
function testPlatform(re) {
    return typeof window !== "undefined" && window.navigator != null
        ? re.test(window.navigator.platform)
        : undefined;
}
function isMac() {
    return testPlatform(/^Mac/);
}
function isIPhone() {
    return testPlatform(/^iPhone/);
}
function isIPad() {
    return (testPlatform(/^iPad/) ||
        // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
        (isMac() && navigator.maxTouchPoints > 1));
}
export function isIOS() {
    return isIPhone() || isIPad();
}
export function isSafari() {
    if (typeof navigator === "undefined")
        return undefined;
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
