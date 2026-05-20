import { forwardRef, useState, Children, cloneElement } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} AccordionProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Accordion component with 2px borders and hover-flip behavior
 */
export const Accordion = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('accordion', {}, className)}
      {...props}
    >
      {children}
    </div>
  );
});

Accordion.displayName = 'Accordion';

/**
 * @typedef {Object} AccordionPanelProps
 * @property {React.ReactNode} children
 * @property {boolean} [defaultOpen]
 * @property {string} [className]
 */

/**
 * AccordionPanel with header and content
 */
export const AccordionPanel = forwardRef(({ children, defaultOpen = false, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Find AccordionTitle and AccordionContent children
  const childArray = Children.toArray(children);
  const titleChild = childArray.find(child => child?.type?.displayName === 'AccordionTitle');
  const contentChild = childArray.find(child => child?.type?.displayName === 'AccordionContent');

  if (process.env.NODE_ENV === 'development') {
    const unmatchedChildren = childArray.filter(
      child => child?.type?.displayName !== 'AccordionTitle' && child?.type?.displayName !== 'AccordionContent'
    );
    if (unmatchedChildren.length > 0) {
      console.warn(
        'AccordionPanel: Children that are not AccordionTitle or AccordionContent will be ignored. ' +
        'Make sure components have displayName set correctly.',
        unmatchedChildren
      );
    }
  }

  return (
    <div
      ref={ref}
      className={mergeClasses('accordion__panel', { open: isOpen }, className)}
      {...props}
    >
      {titleChild && cloneElement(titleChild, {
        onClick: (e) => {
          titleChild.props?.onClick?.(e);
          setIsOpen(!isOpen);
        }
      })}
      {isOpen && contentChild}
    </div>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

/**
 * @typedef {Object} AccordionTitleProps
 * @property {React.ReactNode} children
 * @property {(e: React.MouseEvent<HTMLButtonElement>) => void} [onClick]
 * @property {string} [className]
 */

/**
 * Accordion title/header
 */
export const AccordionTitle = forwardRef(({ children, onClick, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={mergeClasses('accordion__title', {}, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

AccordionTitle.displayName = 'AccordionTitle';

/**
 * @typedef {Object} AccordionContentProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Accordion content/body
 */
export const AccordionContent = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('accordion__content', {}, className)}
      {...props}
    >
      {children}
    </div>
  );
});

AccordionContent.displayName = 'AccordionContent';
