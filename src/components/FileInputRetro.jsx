import { useRef, useState } from "react";

export default function FileInputRetro({ accept, multiple, disabled, className }) {
  const inputRef = useRef(null);
  const [filename, setFilename] = useState(null);

  function handleChange(e) {
    const files = e.target.files;
    if (files?.length) {
      setFilename(multiple && files.length > 1 ? `${files.length} files selected` : files[0].name);
    } else {
      setFilename(null);
    }
  }

  return (
    <div className={`flex items-center gap-2 font-mono text-[11px] ${className ?? ""}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        className="h-[26px] px-3.5 border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg active:translate-x-px active:translate-y-px uppercase tracking-wider text-[9px] font-bold rounded-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
      >
        Choose File
      </button>
      <span className="text-retro-muted-fg truncate max-w-[200px]">
        {filename ?? "No file chosen"}
      </span>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
      />
    </div>
  );
}
