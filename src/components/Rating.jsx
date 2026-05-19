import { forwardRef, useState } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} RatingProps
 * @property {number} [value]
 * @property {Function} [onChange]
 * @property {boolean} [readonly]
 * @property {'xs' | 'sm' | 'md' | 'lg'} [size]
 * @property {string} [className]
 */

const SIZE_MAP = { xs: 16, sm: 20, md: 24, lg: 32 };

/**
 * Rating component with 5 stars using warning fill color
 */
export const Rating = forwardRef(
  ({ value = 0, onChange, readonly = false, size = 'md', className, ...props }, ref) => {
    const [hoverValue, setHoverValue] = useState(0);
    const sizePixels = SIZE_MAP[size] || SIZE_MAP.md;

    const handleClick = (rating) => {
      if (!readonly && onChange) {
        onChange(rating);
      }
    };

    const displayValue = hoverValue || value;

    return (
      <div
        ref={ref}
        className={mergeClasses('rating', { readonly }, className)}
        {...props}
      >
        {Array.from({ length: 5 }).map((_, i) => {
          const rating = i + 1;
          return (
            <button
              key={i}
              className={mergeClasses(
                'rating__star',
                { filled: rating <= displayValue },
              )}
              onClick={() => handleClick(rating)}
              onMouseEnter={() => !readonly && setHoverValue(rating)}
              onMouseLeave={() => setHoverValue(0)}
              disabled={readonly}
              style={{ width: sizePixels, height: sizePixels }}
            >
              ★
            </button>
          );
        })}
      </div>
    );
  }
);

Rating.displayName = 'Rating';
