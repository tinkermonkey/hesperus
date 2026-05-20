import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} BannerProps
 * @property {React.ReactNode} children
 * @property {'default' | 'info' | 'success' | 'warning' | 'error'} [variant]
 * @property {() => void} [onDismiss]
 * @property {string} [className]
 */

/**
 * Banner component for messages and alerts
 */
export const Banner = forwardRef(
  ({ children, variant = 'default', onDismiss, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses('banner', { [variant]: true }, className)}
        {...props}
      >
        <div className="banner__content">{children}</div>

        {onDismiss && (
          <button
            className="banner__close"
            onClick={onDismiss}
            aria-label="Dismiss banner"
          >
            ×
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = 'Banner';
