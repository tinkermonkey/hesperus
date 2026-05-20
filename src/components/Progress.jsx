import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} ProgressProps
 * @property {number} [value]
 * @property {number} [max]
 * @property {boolean} [indeterminate]
 * @property {'default' | 'success' | 'warning' | 'error' | 'info'} [variant]
 * @property {string} [className]
 */

/**
 * Progress bar component with determinate/indeterminate states
 */
export const Progress = forwardRef(
  (
    {
      value = 0,
      max = 100,
      indeterminate = false,
      variant = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const percentage = (value / max) * 100;

    return (
      <div
        ref={ref}
        className={mergeClasses(
          'progress',
          { indeterminate, [variant]: true },
          className
        )}
        {...props}
      >
        <div
          className="progress__bar"
          style={!indeterminate ? { width: `${percentage}%` } : {}}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';
