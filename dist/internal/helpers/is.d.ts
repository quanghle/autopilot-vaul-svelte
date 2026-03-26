import type { DrawerDirection } from "../types.js";
export declare const isBrowser: boolean;
export declare function isInput(target: Element): boolean;
export declare function isVertical(direction: DrawerDirection): direction is "top" | "bottom";
export declare function isBottomOrRight(direction: DrawerDirection): direction is "right" | "bottom";
export declare function isHTMLElement(el: unknown): el is HTMLElement;
export declare function isIOS(): boolean | undefined;
export declare function isSafari(): boolean | undefined;
