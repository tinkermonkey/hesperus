import { forwardRef, useState } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} TooltipProps
 * @property {React.ReactNode} content
 * @property {React.ReactNode} children
 * @property {'top' | 'bottom' | 'left' | 'right'} [position]
 * @property {string} [className]
 */

/**
 * Tooltip component with dark fill and positioning
 */
export const Tooltip = forwardRef(
  ({ content, children, position = 'top', className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div
        ref={ref}
        className={mergeClasses(
          'tooltip',
          { [position]: true },
          className
        )}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        {...props}
      >
        {children}

        <div className="tooltip__content" data-visible={isVisible ? 'true' : 'false'}>
          {content}
        </div>
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
