import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} KbdProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Kbd component for keyboard key representation
 */
export const Kbd = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <kbd
      ref={ref}
      className={mergeClasses('kbd', {}, className)}
      {...props}
    >
      {children}
    </kbd>
  );
});

Kbd.displayName = 'Kbd';
