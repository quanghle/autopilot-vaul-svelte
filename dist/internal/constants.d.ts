export declare const TRANSITIONS: {
    DURATION: number;
    EASE: number[];
};
export declare const TRANSITION_TIMING: string;
export declare const TRANSFORM_TRANSITION: string;
export declare const OPACITY_TRANSITION: string;
export declare const VELOCITY_THRESHOLD = 0.4;
/** Fraction of drawer height that must be dragged to trigger close */
export declare const CLOSE_THRESHOLD = 0.25;
/** Time (ms) after scrolling during which dragging is disabled */
export declare const SCROLL_LOCK_TIMEOUT = 100;
/** Border radius (px) applied to the wrapper when background is scaled */
export declare const BORDER_RADIUS = 8;
/** Displacement (px) applied to parent drawer when a nested drawer opens */
export declare const NESTED_DISPLACEMENT = 16;
/** Offset (px) from window top used when calculating the background scale factor */
export declare const WINDOW_TOP_OFFSET = 26;
/** CSS class added to the drawer element during an active drag */
export declare const DRAG_CLASS = "vaul-dragging";
