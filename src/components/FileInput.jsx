import { forwardRef, useRef, useState } from 'react';
import { mergeClasses } from './utils';

/**
 * @typedef {Object} FileInputProps
 * @property {(files: FileList) => void} [onChange]
 * @property {string} [accept]
 * @property {boolean} [multiple]
 * @property {boolean} [disabled]
 * @property {string} [className]
 */

/**
 * FileInput component with "CHOOSE FILE" button
 */
export const FileInput = forwardRef(
  (
    {
      onChange,
      accept,
      multiple = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const names = Array.from(files).map(f => f.name).join(', ');
        setFileName(names);
        onChange?.(files);
      }
    };

    return (
      <div
        ref={ref}
        className={mergeClasses('file-input', {}, className)}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled}
          className="file-input__input"
          style={{ display: 'none' }}
        />

        <button
          className="file-input__button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
        >
          CHOOSE FILE
        </button>

        {fileName && (
          <span className="file-input__name">{fileName}</span>
        )}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
