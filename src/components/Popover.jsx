import { forwardRef, useState, useRef, useEffect } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} PopoverProps
 * @property {React.ReactNode} trigger
 * @property {React.ReactNode} children
 * @property {'top' | 'bottom' | 'left' | 'right'} [position]
 * @property {string} [className]
 */

/**
 * Popover component with trigger and positioned content
 */
export const Popover = forwardRef(
  ({ trigger, children, position = 'right', className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    return (
      <div
        ref={ref}
        className={mergeClasses(
          'popover',
          { open: isOpen, [position]: true },
          className
        )}
        {...props}
      >
        <button
          className="popover__trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </button>

        {isOpen && (
          <div ref={contentRef} className="popover__content">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
