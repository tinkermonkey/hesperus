import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} BlockquoteProps
 * @property {React.ReactNode} children
 * @property {string} [cite]
 * @property {string} [className]
 */

/**
 * Blockquote component with optional citation
 */
export const Blockquote = forwardRef(
  ({ children, cite, className, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        className={mergeClasses('blockquote', {}, className)}
        {...props}
      >
        <p className="blockquote__text">{children}</p>
        {cite && <footer className="blockquote__cite">— {cite}</footer>}
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';
