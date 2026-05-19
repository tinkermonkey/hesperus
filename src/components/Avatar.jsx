import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} AvatarProps
 * @property {string} [initials]
 * @property {string} [src]
 * @property {string} [alt]
 * @property {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size]
 * @property {string} [status]
 * @property {string} [className]
 */

const SIZE_MAP = { xs: 24, sm: 32, md: 40, lg: 48, xl: 56 };

/**
 * Avatar component with initials or image
 */
export const Avatar = forwardRef(
  (
    {
      initials,
      src,
      img,
      alt = '',
      size = 'md',
      status,
      className,
      ...props
    },
    ref
  ) => {
    const sizePixels = SIZE_MAP[size] || SIZE_MAP.md;
    const imageSrc = src || img;

    return (
      <div
        ref={ref}
        className={mergeClasses(
          'avatar',
          { [size]: true, [status]: !!status },
          className
        )}
        style={{ width: sizePixels, height: sizePixels }}
        {...props}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={alt} className="avatar__image" />
        ) : (
          <span className="avatar__initials">{initials}</span>
        )}

        {status && <span className={`avatar__status avatar__status--${status}`} />}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

/**
 * @typedef {Object} AvatarGroupProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * Avatar group with overlapping layout
 */
export const AvatarGroup = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={mergeClasses('avatar-group', {}, className)}
      {...props}
    >
      {children}
    </div>
  );
});

AvatarGroup.displayName = 'AvatarGroup';

/**
 * @typedef {Object} AvatarGroupCounterProps
 * @property {number} count
 * @property {string} [className]
 */

/**
 * Avatar group counter showing additional avatars
 */
export const AvatarGroupCounter = forwardRef(
  ({ count, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses('avatar-group__counter', {}, className)}
        {...props}
      >
        +{count}
      </div>
    );
  }
);

AvatarGroupCounter.displayName = 'AvatarGroupCounter';
