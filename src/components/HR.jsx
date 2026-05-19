import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} HRProps
 * @property {'default' | 'dashed' | 'dotted'} [variant]
 * @property {string} [className]
 */

/**
 * HR (horizontal rule) component
 */
export const HR = forwardRef(
  ({ variant = 'default', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={mergeClasses('hr', { [variant]: true }, className)}
        {...props}
      />
    );
  }
);

HR.displayName = 'HR';
