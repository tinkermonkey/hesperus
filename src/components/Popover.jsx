import { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
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
    const internalRef = useRef(null);

    useImperativeHandle(ref, () => internalRef.current);

    useEffect(() => {
      function handleClickOutside(event) {
        if (internalRef.current && !internalRef.current.contains(event.target)) {
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
        ref={internalRef}
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
          <div className="popover__content">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
