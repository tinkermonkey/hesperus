import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} TimelineProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Timeline component
 */
export const Timeline = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('timeline', {}, className)}
      {...props}
    >
      {children}
    </div>
  );
});

Timeline.displayName = 'Timeline';

/**
 * @typedef {Object} TimelineItemProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Timeline item
 */
export const TimelineItem = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('timeline__item', {}, className)}
      {...props}
    >
      {children}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

/**
 * @typedef {Object} TimelinePointProps
 * @property {string} [className]
 */

/**
 * Timeline point/marker
 */
export const TimelinePoint = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('timeline__point', {}, className)}
      {...props}
    />
  );
});

TimelinePoint.displayName = 'TimelinePoint';

/**
 * @typedef {Object} TimelineContentProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Timeline content container
 */
export const TimelineContent = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses('timeline__content', {}, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TimelineContent.displayName = 'TimelineContent';

/**
 * @typedef {Object} TimelineTimeProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Timeline time label
 */
export const TimelineTime = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <time
      ref={ref}
      className={mergeClasses('timeline__time', {}, className)}
      {...props}
    >
      {children}
    </time>
  );
});

TimelineTime.displayName = 'TimelineTime';

/**
 * @typedef {Object} TimelineTitleProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Timeline title
 */
export const TimelineTitle = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={mergeClasses('timeline__title', {}, className)}
      {...props}
    >
      {children}
    </h4>
  );
});

TimelineTitle.displayName = 'TimelineTitle';

/**
 * @typedef {Object} TimelineBodyProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Timeline body/description
 */
export const TimelineBody = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={mergeClasses('timeline__body', {}, className)}
      {...props}
    >
      {children}
    </p>
  );
});

TimelineBody.displayName = 'TimelineBody';
