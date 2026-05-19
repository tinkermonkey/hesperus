import { forwardRef, useState } from 'react';
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
 * @property {(state: {isOpen: boolean, setIsOpen: Function}) => React.ReactNode} children
 * @property {boolean} [defaultOpen]
 * @property {string} [className]
 */

/**
 * AccordionPanel with header and content
 */
export const AccordionPanel = forwardRef(({ children, defaultOpen = false, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      ref={ref}
      className={mergeClasses('accordion__panel', { open: isOpen }, className)}
      {...props}
    >
      {children({ isOpen, setIsOpen })}
    </div>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

/**
 * @typedef {Object} AccordionTitleProps
 * @property {React.ReactNode} children
 * @property {Function} onClick
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
