import { forwardRef } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} PaginationProps
 * @property {number} currentPage
 * @property {number} totalPages
 * @property {(page: number) => void} onPageChange
 * @property {string} [className]
 */

/**
 * Pagination component with previous/next buttons and page numbers
 */
export const Pagination = forwardRef(
  ({ currentPage, totalPages, onPageChange, className, ...props }, ref) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <nav
        ref={ref}
        className={mergeClasses('pagination', {}, className)}
        {...props}
      >
        <button
          className="pagination__button pagination__button--prev"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <div className="pagination__pages">
          {pages.map((page) => (
            <button
              key={page}
              className={mergeClasses(
                'pagination__page',
                { active: page === currentPage },
              )}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className="pagination__button pagination__button--next"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
