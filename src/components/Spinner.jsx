import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} SpinnerProps
 * @property {'ring' | 'block' | 'dots'} [variant]
 * @property {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size]
 * @property {string} [className]
 */

const SIZE_MAP = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40 };

/**
 * Spinner component with ring, block, or dots animation
 */
export const Spinner = forwardRef(
  ({ variant = 'ring', size = 'md', className, ...props }, ref) => {
    const sizePixels = SIZE_MAP[size] || SIZE_MAP.md;

    if (variant === 'block') {
      return (
        <div
          ref={ref}
          className={mergeClasses('spinner', { block: true }, className)}
          style={{ width: sizePixels, height: sizePixels }}
          {...props}
        >
          <div className="spinner__segment" />
        </div>
      );
    }

    if (variant === 'dots') {
      return (
        <div
          ref={ref}
          className={mergeClasses('spinner', { dots: true }, className)}
          style={{ width: sizePixels, height: sizePixels }}
          {...props}
        >
          <div className="spinner__dot" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={mergeClasses('spinner', { ring: true }, className)}
        style={{ width: sizePixels, height: sizePixels }}
        {...props}
      />
    );
  }
);

Spinner.displayName = 'Spinner';
