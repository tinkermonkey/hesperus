import { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} DropdownProps
 * @property {React.ReactNode} trigger
 * @property {React.ReactNode} children
 * @property {string} [className]
 * @property {boolean} [closeOnClick]
 */

/**
 * Dropdown menu component with trigger and menu items
 */
export const Dropdown = forwardRef(
  ({ trigger, children, className, closeOnClick = true, ...props }, ref) => {
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
        className={mergeClasses('dropdown', { open: isOpen }, className)}
        {...props}
      >
        <button
          className="dropdown__trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </button>

        {isOpen && (
          <div
            className="dropdown__menu"
            onClick={() => closeOnClick && setIsOpen(false)}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

/**
 * @typedef {Object} DropdownItemProps
 * @property {React.ReactNode} children
 * @property {Function} [onClick]
 * @property {boolean} [disabled]
 * @property {string} [className]
 */

/**
 * Dropdown menu item
 */
export const DropdownItem = forwardRef(
  ({ children, onClick, disabled = false, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={mergeClasses('dropdown__item', { disabled }, className)}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

/**
 * @typedef {Object} DropdownDividerProps
 * @property {string} [className]
 */

/**
 * Visual divider in dropdown menu
 */
export const DropdownDivider = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('dropdown__divider', {}, className)}
      {...props}
    />
  );
});

DropdownDivider.displayName = 'DropdownDivider';
