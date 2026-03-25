import { type CreateVaulProps } from "../internal/vaul.js";
export declare function setCtx(props?: CreateVaulProps): {
    updateOption: <K extends string>(key: K, value: unknown | undefined) => void;
    states: {
        isOpen: {
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: () => void): import("svelte/store").Unsubscriber;
        };
        hasBeenOpened: import("svelte/store").Writable<boolean>;
        snapPoints: import("svelte/store").Writable<(string | number)[] | undefined>;
        activeSnapPoint: {
            update: (updater: import("svelte/store").Updater<string | number | null>, sideEffect?: ((newValue: string | number | null) => void) | undefined) => void;
            set: (this: void, value: string | number | null) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<string | number | null>, invalidate?: () => void): import("svelte/store").Unsubscriber;
        };
        snapPointsOffset: import("svelte/store").Readable<number[]>;
        keyboardIsOpen: import("svelte/store").Writable<boolean>;
        shouldFade: import("svelte/store").Readable<boolean>;
        visible: import("svelte/store").Writable<boolean>;
        drawerId: import("svelte/store").Writable<string | undefined>;
        openDrawerIds: import("svelte/store").Writable<string[]>;
    };
    helpers: {
        getContentStyle: import("svelte/store").Readable<(style?: string | null) => string>;
    };
    methods: {
        closeDrawer: (withKeyboard?: boolean) => void;
        onOpenChange: import("../internal/helpers/store.js").ChangeFn<boolean> | undefined;
        onPress: (event: import("../internal/types.js").SvelteEvent<PointerEvent, HTMLElement>) => void;
        onRelease: (event: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>) => void;
        onDrag: (event: import("../internal/types.js").SvelteEvent<PointerEvent | TouchEvent, HTMLElement>) => void;
        scaleBackground: (open: boolean, backgroundColor?: string | undefined) => void;
        onNestedDrag: (_: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onNestedOpenChange: (o: boolean) => void;
        onNestedRelease: (_: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, o: boolean) => void;
        restorePositionSetting: () => void;
        openDrawer: () => void;
    };
    refs: {
        drawerRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        overlayRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        triggerRef: import("svelte/store").Writable<HTMLButtonElement | undefined>;
    };
    options: import("../internal/helpers/store.js").ToWritableStores<Omit<{
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: number | string | null;
        onActiveSnapPointChange: import("../internal/helpers/store.js").ChangeFn<number | string | null>;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers/store.js").ChangeFn<boolean>;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string;
        scrollLockTimeout: number;
        fixed: boolean;
        dismissible: boolean;
        direction: import("./index.js").DrawerDirection;
        onDrag: (event: import("../internal/types.js").SvelteEvent<PointerEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onRelease: (event: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, open: boolean) => void;
        modal: boolean;
        nested: boolean;
        onClose: () => void;
    } | {
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: number | string | null;
        onActiveSnapPointChange: import("../internal/helpers/store.js").ChangeFn<number | string | null>;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers/store.js").ChangeFn<boolean>;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string;
        scrollLockTimeout: number;
        fixed: boolean;
        dismissible: boolean;
        direction: import("./index.js").DrawerDirection;
        onDrag: (event: import("../internal/types.js").SvelteEvent<PointerEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onRelease: (event: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, open: boolean) => void;
        modal: boolean;
        nested: boolean;
        onClose: () => void;
    }, "defaultOpen" | "onOpenChange" | "defaultActiveSnapPoint" | "onActiveSnapPointChange" | "onDrag" | "onRelease" | "onClose">>;
};
export declare function getCtx(): {
    updateOption: <K extends string>(key: K, value: unknown | undefined) => void;
    states: {
        isOpen: {
            update: (updater: import("svelte/store").Updater<boolean>, sideEffect?: ((newValue: boolean) => void) | undefined) => void;
            set: (this: void, value: boolean) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: () => void): import("svelte/store").Unsubscriber;
        };
        hasBeenOpened: import("svelte/store").Writable<boolean>;
        snapPoints: import("svelte/store").Writable<(string | number)[] | undefined>;
        activeSnapPoint: {
            update: (updater: import("svelte/store").Updater<string | number | null>, sideEffect?: ((newValue: string | number | null) => void) | undefined) => void;
            set: (this: void, value: string | number | null) => void;
            subscribe(this: void, run: import("svelte/store").Subscriber<string | number | null>, invalidate?: () => void): import("svelte/store").Unsubscriber;
        };
        snapPointsOffset: import("svelte/store").Readable<number[]>;
        keyboardIsOpen: import("svelte/store").Writable<boolean>;
        shouldFade: import("svelte/store").Readable<boolean>;
        visible: import("svelte/store").Writable<boolean>;
        drawerId: import("svelte/store").Writable<string | undefined>;
        openDrawerIds: import("svelte/store").Writable<string[]>;
    };
    helpers: {
        getContentStyle: import("svelte/store").Readable<(style?: string | null) => string>;
    };
    methods: {
        closeDrawer: (withKeyboard?: boolean) => void;
        onOpenChange: import("../internal/helpers/store.js").ChangeFn<boolean> | undefined;
        onPress: (event: import("../internal/types.js").SvelteEvent<PointerEvent, HTMLElement>) => void;
        onRelease: (event: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>) => void;
        onDrag: (event: import("../internal/types.js").SvelteEvent<PointerEvent | TouchEvent, HTMLElement>) => void;
        scaleBackground: (open: boolean, backgroundColor?: string | undefined) => void;
        onNestedDrag: (_: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onNestedOpenChange: (o: boolean) => void;
        onNestedRelease: (_: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, o: boolean) => void;
        restorePositionSetting: () => void;
        openDrawer: () => void;
    };
    refs: {
        drawerRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        overlayRef: import("svelte/store").Writable<HTMLDivElement | undefined>;
        triggerRef: import("svelte/store").Writable<HTMLButtonElement | undefined>;
    };
    options: import("../internal/helpers/store.js").ToWritableStores<Omit<{
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: number | string | null;
        onActiveSnapPointChange: import("../internal/helpers/store.js").ChangeFn<number | string | null>;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers/store.js").ChangeFn<boolean>;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string;
        scrollLockTimeout: number;
        fixed: boolean;
        dismissible: boolean;
        direction: import("./index.js").DrawerDirection;
        onDrag: (event: import("../internal/types.js").SvelteEvent<PointerEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onRelease: (event: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, open: boolean) => void;
        modal: boolean;
        nested: boolean;
        onClose: () => void;
    } | {
        snapPoints: (string | number)[] | undefined;
        fadeFromIndex: number | undefined;
        defaultActiveSnapPoint: number | string | null;
        onActiveSnapPointChange: import("../internal/helpers/store.js").ChangeFn<number | string | null>;
        defaultOpen: boolean;
        onOpenChange: import("../internal/helpers/store.js").ChangeFn<boolean>;
        closeThreshold: number;
        shouldScaleBackground: boolean;
        backgroundColor?: string;
        scrollLockTimeout: number;
        fixed: boolean;
        dismissible: boolean;
        direction: import("./index.js").DrawerDirection;
        onDrag: (event: import("../internal/types.js").SvelteEvent<PointerEvent | TouchEvent, HTMLElement>, percentageDragged: number) => void;
        onRelease: (event: import("../internal/types.js").SvelteEvent<PointerEvent | MouseEvent | TouchEvent, HTMLElement>, open: boolean) => void;
        modal: boolean;
        nested: boolean;
        onClose: () => void;
    }, "defaultOpen" | "onOpenChange" | "defaultActiveSnapPoint" | "onActiveSnapPointChange" | "onDrag" | "onRelease" | "onClose">>;
};
