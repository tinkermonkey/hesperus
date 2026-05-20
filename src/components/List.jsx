import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} ListProps
 * @property {React.ReactNode} children
 * @property {'ordered' | 'unordered'} [variant]
 * @property {string} [className]
 */

/**
 * List component
 */
export const List = forwardRef(
  ({ children, variant = 'unordered', className, ...props }, ref) => {
    const Element = variant === 'ordered' ? 'ol' : 'ul';
    return (
      <Element
        ref={ref}
        className={mergeClasses('list', { [variant]: true }, className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

List.displayName = 'List';

/**
 * @typedef {Object} ListItemProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * ListItem component
 */
export const ListItem = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={mergeClasses('list__item', {}, className)}
        {...props}
      >
        {children}
      </li>
    );
  }
);

ListItem.displayName = 'ListItem';
