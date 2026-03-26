import type { DrawerDirection } from "../types.js";
interface Style {
    [key: string]: string;
}
export declare function set(el?: Element | HTMLElement | null, styles?: Style, ignoreCache?: boolean): void;
export declare function reset(el: Element | HTMLElement | null, prop?: string): void;
export declare function getTranslate(element: HTMLElement, direction: DrawerDirection): number | null;
/** Build a translate3d string along the correct axis for the given direction. */
export declare function makeTranslate(direction: DrawerDirection, value: string): string;
export declare function styleToString(style: Record<string, number | string | undefined>): string;
export {};
