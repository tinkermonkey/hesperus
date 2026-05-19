import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} FooterProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Footer component
 */
export const Footer = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={mergeClasses('footer', {}, className)}
      {...props}
    >
      {children}
    </footer>
  );
});

Footer.displayName = 'Footer';

/**
 * @typedef {Object} FooterLinkProps
 * @property {React.ReactNode} children
 * @property {string} [href]
 * @property {string} [className]
 */

/**
 * Footer link
 */
export const FooterLink = forwardRef(
  ({ children, href, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={mergeClasses('footer__link', {}, className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

FooterLink.displayName = 'FooterLink';

/**
 * @typedef {Object} FooterLinkGroupProps
 * @property {React.ReactNode} children
 * @property {string} [title]
 * @property {string} [className]
 */

/**
 * Footer link group
 */
export const FooterLinkGroup = forwardRef(
  ({ children, title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses('footer__link-group', {}, className)}
        {...props}
      >
        {title && <h4 className="footer__link-group-title">{title}</h4>}
        {children}
      </div>
    );
  }
);

FooterLinkGroup.displayName = 'FooterLinkGroup';
