import { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} DatepickerProps
 * @property {Date} [value]
 * @property {(date: Date) => void} [onChange]
 * @property {string} [placeholder]
 * @property {boolean} [disabled]
 * @property {string} [className]
 */

/**
 * Datepicker component with calendar popover
 */
export const Datepicker = forwardRef(
  ({
    value,
    onChange,
    placeholder = 'Select date',
    disabled = false,
    className,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(
      value ? new Date(value) : new Date()
    );
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

    const daysInMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const firstDayOfMonth = (date) => {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const handleDateClick = (day) => {
      const selected = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      onChange?.(selected);
      setIsOpen(false);
    };

    const formatDate = (date) => {
      if (!date) return placeholder;
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    };

    const days = Array.from({ length: daysInMonth(currentMonth) }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth(currentMonth) });

    return (
      <div
        ref={internalRef}
        className={mergeClasses('datepicker', {}, className)}
        {...props}
      >
        <button
          className="datepicker__input"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          {formatDate(value)}
        </button>

        {isOpen && (
          <div className="datepicker__popover">
            <div className="datepicker__header">
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1
                    )
                  )
                }
              >
                ← Prev
              </button>
              <span className="datepicker__title">
                {currentMonth.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1
                    )
                  )
                }
              >
                Next →
              </button>
            </div>

            <div className="datepicker__calendar">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="datepicker__weekday">
                  {day}
                </div>
              ))}

              {emptyDays.map((_, i) => (
                <div key={`empty-${i}`} className="datepicker__day--empty" />
              ))}

              {days.map((day) => {
                const date = new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth(),
                  day
                );
                const isSelected =
                  value &&
                  value.toDateString() === date.toDateString();

                return (
                  <button
                    key={day}
                    className={mergeClasses(
                      'datepicker__day',
                      { selected: isSelected }
                    )}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Datepicker.displayName = 'Datepicker';
