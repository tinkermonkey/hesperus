import { createTheme } from "flowbite-react";

export const hesperusTheme = createTheme({
  // ───────────────────────────── Button ─────────────────────────────
  button: {
    base: "font-mono uppercase tracking-wider focus:z-10 focus:outline-none focus:ring-0 transition-colors duration-150 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed active:translate-x-px active:translate-y-px",
    fullSized: "w-full",
    color: {
      default:
        "border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg aria-[expanded=true]:bg-retro-fg aria-[expanded=true]:text-retro-bg",
      primary:
        "border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg aria-[expanded=true]:bg-retro-fg aria-[expanded=true]:text-retro-bg",
      outline:
        "border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg aria-[expanded=true]:bg-retro-fg aria-[expanded=true]:text-retro-bg",
      ghost:
        "border-2 border-retro-muted-fg bg-retro-bg text-retro-muted-fg hover:border-retro-fg hover:text-retro-fg",
      gray:
        "border-2 border-retro-muted-fg bg-retro-bg text-retro-muted-fg hover:border-retro-fg hover:text-retro-fg",
      destructive:
        "border-2 border-retro-error bg-retro-bg text-retro-error hover:bg-retro-error hover:text-retro-bg",
      success:
        "border-2 border-retro-success bg-retro-bg text-retro-success-text hover:bg-retro-success hover:text-retro-bg",
      failure:
        "border-2 border-retro-error bg-retro-bg text-retro-error hover:bg-retro-error hover:text-retro-bg",
    },
    size: {
      sm: "text-[length:var(--text-9)] h-[var(--control-h-sm)] rounded-sm px-3.5",
      md: "text-[length:var(--text-11)] h-[var(--control-h-md)] rounded-md px-3.5",
    },
    pill: "",
  },

  // ───────────────────────────── Badge ──────────────────────────────
  badge: {
    root: {
      base: "flex items-center justify-center font-mono uppercase tracking-wider border-2 rounded-sm",
      color: {
        default: "border-retro-fg bg-retro-bg text-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
        success: "border-retro-success bg-retro-bg text-retro-success dark:border-retro-success dark:bg-retro-bg dark:text-retro-success",
        failure: "border-retro-error bg-retro-bg text-retro-error dark:border-retro-error dark:bg-retro-bg dark:text-retro-error",
        warning: "border-retro-warning bg-retro-bg text-retro-warning-text dark:border-retro-warning dark:bg-retro-bg dark:text-retro-warning-text",
        info: "border-retro-info bg-retro-bg text-retro-info dark:border-retro-info dark:bg-retro-bg dark:text-retro-info",
      },
    },
    icon: {
      off: "px-2 py-0.5",
      on: "px-2 py-0.5",
      size: {
        xs: "h-3 w-3",
        sm: "h-3.5 w-3.5",
      },
    },
  },

  // ───────────────────────────── Alert ──────────────────────────────
  alert: {
    base: "flex items-start gap-2.5 rounded-md border-2 px-3.5 py-2.5 font-mono text-[length:var(--text-11)]",
    color: {
      default: "border-retro-fg bg-retro-bg text-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
      success: "border-retro-success bg-retro-bg text-retro-fg dark:border-retro-success dark:bg-retro-bg dark:text-retro-fg",
      warning: "border-retro-warning bg-retro-bg text-retro-fg dark:border-retro-warning dark:bg-retro-bg dark:text-retro-fg",
      failure: "border-retro-error bg-retro-bg text-retro-fg dark:border-retro-error dark:bg-retro-bg dark:text-retro-fg",
      info: "border-retro-info bg-retro-bg text-retro-fg dark:border-retro-info dark:bg-retro-bg dark:text-retro-fg",
    },
    closeButton: {
      base: "ml-auto inline-flex items-center rounded p-1 focus:ring-0",
      color: {
        default: "bg-transparent text-retro-fg hover:bg-retro-secondary dark:bg-transparent dark:text-retro-fg dark:hover:bg-retro-secondary",
        success: "bg-transparent text-retro-success hover:bg-retro-secondary dark:bg-transparent dark:text-retro-success dark:hover:bg-retro-secondary",
        warning: "bg-transparent text-retro-warning-text hover:bg-retro-secondary dark:bg-transparent dark:text-retro-warning dark:hover:bg-retro-secondary",
        failure: "bg-transparent text-retro-error hover:bg-retro-secondary dark:bg-transparent dark:text-retro-error dark:hover:bg-retro-secondary",
        info: "bg-transparent text-retro-info hover:bg-retro-secondary dark:bg-transparent dark:text-retro-info dark:hover:bg-retro-secondary",
      },
    },
    icon: "mr-1 h-3.5 w-3.5 shrink-0",
    rounded: "rounded-md",
    wrapper: "flex items-center gap-2",
  },

  // ───────────────────────────── Card ───────────────────────────────
  card: {
    root: {
      base: "flex rounded-md border-2 border-retro-fg bg-retro-bg shadow-none dark:border-retro-fg dark:bg-retro-bg",
      children: "flex h-full flex-col p-0 gap-0",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:flex-row",
      },
      href: "hover:bg-retro-secondary",
    },
  },

  // ───────────────────────────── Modal ──────────────────────────────
  modal: {
    root: {
      base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-retro-bg/70",
        off: "hidden",
      },
    },
    content: {
      base: "relative w-full",
      inner:
        "relative flex max-h-[90dvh] flex-col rounded-md border-2 border-retro-fg shadow-none overflow-hidden",
    },
    header: {
      base: "flex items-center justify-between bg-retro-fg px-4 py-3.5 rounded-t-md",
      title:
        "font-mono text-[length:var(--text-13)] font-bold uppercase tracking-wider text-retro-bg",
      close: {
        base: "ml-auto inline-flex items-center rounded p-1 text-retro-bg hover:bg-retro-bg/20",
        icon: "h-4 w-4",
      },
    },
    body: {
      base: "flex-1 overflow-auto p-4 bg-retro-bg/70",
    },
    footer: {
      base: "flex items-center gap-2 border-t border-retro-border p-4 bg-retro-bg/70",
    },
  },

  // ──────────────────────────── Navbar ──────────────────────────────
  navbar: {
    root: {
      base: "bg-retro-bg dark:bg-retro-bg rounded-md overflow-hidden border-2 border-retro-fg dark:border-retro-fg py-0",
      inner: {
        base: "flex items-stretch h-11 [&_li]:list-none",
        fluid: { on: "", off: "" },
      },
    },
    brand: {
      base: "flex items-center gap-2 h-full pr-5 border-r-2 border-retro-fg dark:border-retro-fg font-mono text-[length:var(--text-11)] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
    },
    collapse: {
      base: "flex items-stretch",
      list: "flex flex-row mt-0 md:mt-0 md:space-x-0 h-full items-stretch divide-x-2 divide-retro-fg dark:divide-retro-fg [&_li]:list-none",
      hidden: { on: "", off: "" },
    },
    link: {
      base: "flex items-center gap-2 h-full px-5 md:px-5 font-mono text-[length:var(--text-11)] font-bold uppercase tracking-wider transition-colors duration-150 focus:outline-none focus:ring-0 whitespace-nowrap",
      active: {
        on: "bg-retro-fg text-retro-bg dark:bg-retro-fg dark:text-retro-bg",
        off: "text-retro-fg hover:bg-retro-fg hover:text-retro-bg dark:text-retro-fg dark:hover:bg-retro-fg dark:hover:text-retro-bg",
      },
    },
    toggle: {
      base: "hidden",
      icon: "h-4 w-4",
    },
  },

  // ──────────────────────────── TextInput ───────────────────────────
  textInput: {
    base: "flex",
    field: {
      base: "relative w-full",
      input: {
        base: "block w-full font-mono text-[length:var(--text-11)] focus:outline-none focus:ring-0",
        sizes: {
          md: "px-3 py-2",
        },
        colors: {
          gray:    "border-2 border-retro-fg     bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-fg     dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
          failure: "border-2 border-retro-error  bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-error  dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
          success: "border-2 border-retro-success bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-success dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
          warning: "border-2 border-retro-warning bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-warning dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
          info:    "border-2 border-retro-info    bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-info    dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
        },
      },
    },
  },

  // ──────────────────────────── Textarea ───────────────────────────
  textarea: {
    base: "block w-full font-mono text-[length:var(--text-11)] focus:outline-none focus:ring-0 resize-none",
    colors: {
      gray:    "border-2 border-retro-fg     bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-fg     dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
      failure: "border-2 border-retro-error  bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-error  dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
      success: "border-2 border-retro-success bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-success dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
      warning: "border-2 border-retro-warning bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-warning dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
      info:    "border-2 border-retro-info    bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-info    dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
    },
    withShadow: { on: "", off: "" },
  },

  // ──────────────────────────── Select ──────────────────────────────
  select: {
    base: "flex",
    field: {
      base: "relative w-full",
      select: {
        base: "block w-full font-mono text-[length:var(--text-11)] focus:outline-none focus:ring-0 appearance-none",
        sizes: {
          md: "px-3 py-2",
        },
        colors: {
          gray:    "border-2 border-retro-fg     bg-retro-bg text-retro-fg rounded-md dark:border-retro-fg     dark:bg-retro-bg dark:text-retro-fg",
          failure: "border-2 border-retro-error  bg-retro-bg text-retro-fg rounded-md dark:border-retro-error  dark:bg-retro-bg dark:text-retro-fg",
          success: "border-2 border-retro-success bg-retro-bg text-retro-fg rounded-md dark:border-retro-success dark:bg-retro-bg dark:text-retro-fg",
          warning: "border-2 border-retro-warning bg-retro-bg text-retro-fg rounded-md dark:border-retro-warning dark:bg-retro-bg dark:text-retro-fg",
          info:    "border-2 border-retro-info    bg-retro-bg text-retro-fg rounded-md dark:border-retro-info    dark:bg-retro-bg dark:text-retro-fg",
        },
      },
    },
  },

  // ──────────────────────────── Checkbox ────────────────────────────
  checkbox: {
    base: "appearance-none h-4 w-4 rounded-sm border-2 border-retro-fg bg-retro-bg checked:bg-retro-bg checked:border-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:checked:bg-retro-bg dark:checked:border-retro-fg focus:ring-0 focus:ring-offset-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
  },

  // ──────────────────────────── Radio ───────────────────────────────
  // Checked dot SVG is defined in index.css (light + dark) using actual token hex values.
  radio: {
    base: "appearance-none h-4 w-4 border-2 border-retro-fg bg-retro-bg checked:border-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:checked:border-retro-fg focus:ring-0 focus:ring-offset-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
    color: {
      default: "text-retro-fg dark:text-retro-fg",
    },
  },

  // ──────────────────────────── Toggle Switch ───────────────────────
  toggleSwitch: {
    root: {
      base: "group flex rounded-lg focus:outline-none",
      active: {
        on: "cursor-pointer",
        off: "cursor-not-allowed opacity-40",
      },
      label: "ms-3 mt-0.5 text-start font-mono text-[length:var(--text-10)] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
      input: "sr-only",
    },
    toggle: {
      base: "relative rounded-sm border-2 border-retro-fg bg-retro-bg after:absolute after:rounded-sm after:border-2 after:border-retro-fg after:bg-retro-fg after:transition-all dark:border-retro-fg dark:bg-retro-bg dark:after:border-retro-fg dark:after:bg-retro-fg",
      checked: {
        on: "after:translate-x-full rtl:after:-translate-x-full bg-retro-bg after:!bg-retro-success after:!border-retro-success dark:bg-retro-bg dark:after:!bg-retro-success dark:after:!border-retro-success",
        off: "bg-retro-bg dark:bg-retro-bg",
        color: {
          default: "bg-retro-fg dark:bg-retro-fg",
        },
      },
      sizes: {
        sm: "h-5 w-9 min-w-9 after:left-0.5 after:top-0.5 after:h-3 after:w-3 rtl:after:right-0.5",
        md: "h-6 w-11 min-w-11 after:left-0.5 after:top-0.5 after:h-4 after:w-4 rtl:after:right-0.5",
        lg: "h-7 w-[52px] min-w-[52px] after:left-0.5 after:top-0.5 after:h-5 after:w-5 rtl:after:right-0.5",
      },
    },
  },

  // ──────────────────────────── Label ───────────────────────────────
  label: {
    root: {
      base: "font-mono text-[length:var(--text-10)] font-bold uppercase tracking-wider",
      colors: {
        default: "text-retro-fg dark:text-retro-fg",
      },
    },
  },

  // ──────────────────────────── HelperText ──────────────────────────
  helperText: {
    root: {
      base: "font-mono text-[length:var(--text-9)] mt-1",
      colors: {
        gray: "text-retro-muted-fg dark:text-retro-muted-fg",
        failure: "text-retro-error-text dark:text-retro-error-text",
        success: "text-retro-success-text dark:text-retro-success-text",
        warning: "text-retro-warning-text dark:text-retro-warning-text",
        info: "text-retro-info-text dark:text-retro-info-text",
      },
    },
  },

  // ──────────────────────────── Table ───────────────────────────────
  table: {
    root: {
      base: "w-full text-left font-mono text-[length:var(--text-11)] text-retro-fg dark:text-retro-fg",
      shadow: "",
      wrapper: "overflow-x-auto rounded-md border-2 border-retro-fg dark:border-retro-fg",
    },
    head: {
      base: "uppercase tracking-wider",
      cell: {
        base: "bg-retro-fg px-3 py-2 text-retro-bg dark:bg-retro-fg dark:text-retro-bg font-bold text-[length:var(--text-10)] tracking-wider border-r border-retro-bg last:border-r-0 group-first/head:first:rounded-none group-first/head:last:rounded-none",
      },
    },
    body: {
      base: "",
      cell: {
        base: "px-3 py-2.5 text-retro-fg border-r border-retro-fg last:border-r-0 dark:text-retro-fg group-first/body:group-first/row:first:rounded-none group-first/body:group-first/row:last:rounded-none group-last/body:group-last/row:first:rounded-none group-last/body:group-last/row:last:rounded-none",
      },
    },
    row: {
      base: "border-b border-retro-fg last:border-b-0 bg-retro-bg dark:bg-retro-bg",
      hovered: "hover:bg-retro-secondary dark:hover:bg-retro-secondary",
      striped: "odd:bg-retro-bg even:bg-retro-muted dark:odd:bg-retro-bg dark:even:bg-retro-muted",
    },
  },

  // ──────────────────────────── Tabs ────────────────────────────────
  // Three variants:
  //   default   — segmented/boxed (2px outer border, dividers, flip on active)
  //   underline — orange 3px indicator on active tab, bottom-border container
  //   pills     — pill-shaped tabs with flip on active
  tabs: {
    base: "flex flex-col",
    tablist: {
      base: "flex",
      variant: {
        default:   "w-fit overflow-hidden rounded-md border-2 border-retro-fg dark:border-retro-fg",
        underline: "w-full border-b-2 border-retro-fg dark:border-retro-fg",
        pills:     "gap-1.5 flex-wrap",
        fullWidth: "w-full overflow-hidden rounded-md border-2 border-retro-fg dark:border-retro-fg divide-x-2 divide-retro-fg dark:divide-retro-fg",
      },
      tabitem: {
        base: "flex items-center justify-center font-mono text-[length:var(--text-11)] font-bold uppercase tracking-[1px] focus:outline-none focus:ring-0 transition-colors duration-150",
        variant: {
          default: {
            base: "px-5 h-[var(--control-h-md)] border-r-2 border-retro-fg last:border-r-0 dark:border-retro-fg",
            active: {
              on:  "bg-retro-fg text-retro-bg dark:bg-retro-fg dark:text-retro-bg",
              off: "bg-retro-bg text-retro-fg hover:bg-retro-secondary dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-secondary",
            },
          },
          underline: {
            base: "px-4 h-[var(--control-h-md)] border-b-[3px] mb-[-2px] border-transparent",
            active: {
              on:  "border-retro-orange text-retro-fg dark:border-retro-orange dark:text-retro-fg",
              off: "border-transparent text-retro-muted-fg hover:text-retro-fg dark:border-transparent dark:text-retro-muted-fg dark:hover:text-retro-fg",
            },
          },
          pills: {
            base: "px-3.5 py-1.5 rounded-full border-2 border-retro-fg dark:border-retro-fg",
            active: {
              on:  "bg-retro-fg text-retro-bg dark:bg-retro-fg dark:text-retro-bg",
              off: "bg-retro-bg text-retro-fg hover:bg-retro-secondary dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-secondary",
            },
          },
          fullWidth: {
            base: "px-5 h-[var(--control-h-md)] w-full",
            active: {
              on:  "bg-retro-fg text-retro-bg dark:bg-retro-fg dark:text-retro-bg",
              off: "bg-retro-bg text-retro-fg hover:bg-retro-secondary dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-secondary",
            },
          },
        },
        icon: "mr-2 h-4 w-4",
      },
    },
    tabitemcontainer: {
      base: "",
      variant: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "py-3",
  },

  // ──────────────────────────── Breadcrumb ──────────────────────────
  breadcrumb: {
    root: {
      base: "",
      list: "flex items-center gap-1",
    },
    item: {
      base: "flex items-center gap-1 font-mono text-[length:var(--text-11)]",
      chevron: "h-3 w-3 text-retro-muted-fg",
      href: {
        off: "font-bold uppercase tracking-wider text-retro-fg",
        on: "uppercase tracking-wider text-retro-fg underline decoration-retro-fg hover:text-retro-muted-fg",
      },
    },
  },

  // ──────────────────────────── Tooltip ─────────────────────────────
  // Dark fill (retro-fg bg, retro-bg text) with hard-offset double shadow.
  tooltip: {
    target: "",
    base: "absolute z-10 inline-block rounded-sm border-2 border-retro-fg bg-retro-fg px-3 py-1.5 font-mono text-[length:var(--text-9)] uppercase tracking-wider text-retro-bg shadow-tooltip dark:border-retro-fg dark:bg-retro-fg dark:text-retro-bg",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45 border border-retro-fg bg-retro-fg dark:border-retro-fg dark:bg-retro-fg",
    },
  },

  // ──────────────────────────── Spinner ─────────────────────────────
  // Ring spinner — use SpinnerBlock and SpinnerDots for the other variants.
  spinner: {
    base: "inline animate-spin text-retro-fg dark:text-retro-fg",
    color: {
      default: "fill-retro-fg dark:fill-retro-fg",
    },
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-10 h-10",
    },
  },

  // ──────────────────────────── Progress ────────────────────────────
  // Orange fill bar. For indeterminate, use .progress-indeterminate wrapper + .progress-indeterminate-bar.
  progress: {
    base: "w-full overflow-hidden rounded-sm border-2 border-retro-fg bg-retro-secondary dark:border-retro-fg dark:bg-retro-secondary",
    label: "mb-1 flex justify-between font-mono text-[length:var(--text-10)] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
    bar: "rounded-none",
    color: {
      default: "bg-retro-orange dark:bg-retro-orange",
      success: "bg-retro-success dark:bg-retro-success",
      failure: "bg-retro-error dark:bg-retro-error",
      warning: "bg-retro-warning dark:bg-retro-warning",
      info:    "bg-retro-info dark:bg-retro-info",
    },
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6",
    },
  },

  // ──────────────────────────── Toast ───────────────────────────────
  // Semantic color variants are applied via className on the Toast component.
  // Interior layout (icon block, label, progress bar) is custom JSX in consumer code.
  toast: {
    root: {
      base: "flex w-full max-w-sm rounded-md border-2 border-retro-fg bg-retro-bg text-retro-fg shadow-hard-2 dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg overflow-hidden",
      closed: "opacity-0 ease-out",
    },
    toggle: {
      base: "ms-auto inline-flex items-center p-1 text-retro-muted-fg hover:text-retro-fg focus:outline-none dark:text-retro-muted-fg dark:hover:text-retro-fg",
      icon: "h-4 w-4",
    },
  },

  // ──────────────────────────── Rating ──────────────────────────────
  rating: {
    root: {
      base: "flex items-center gap-1",
    },
    star: {
      empty: "text-retro-muted-fg dark:text-retro-muted-fg",
      filled: "text-retro-warning dark:text-retro-warning",
      sizes: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-7 h-7",
      },
    },
  },

  // ──────────────────────────── Accordion ───────────────────────────
  accordion: {
    root: {
      base: "divide-y divide-retro-fg border-2 border-retro-fg rounded-md dark:divide-retro-fg dark:border-retro-fg",
    },
    content: {
      base: "p-4 font-mono text-[length:var(--text-11)]",
    },
    title: {
      base: "flex w-full items-center justify-between p-4 font-mono text-[length:var(--text-11)] font-bold uppercase tracking-wider transition-colors duration-150",
      open: {
        on: "bg-retro-fg text-retro-bg hover:bg-retro-fg/90 dark:bg-retro-fg dark:text-retro-bg dark:hover:bg-retro-fg/90",
        off: "text-retro-fg hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      },
      arrow: {
        base: "h-4 w-4 shrink-0 transition-transform",
        open: {
          on: "rotate-90 text-retro-bg dark:text-retro-bg",
          off: "text-retro-fg dark:text-retro-fg",
        },
      },
    },
  },

  // ──────────────────────────── Timeline ────────────────────────────
  timeline: {
    root: {
      direction: {
        horizontal: "items-base sm:flex",
        vertical: "relative border-l border-retro-fg dark:border-retro-fg",
      },
    },
    item: {
      root: {
        horizontal: "relative mb-6 sm:mb-0",
        vertical: "mb-10 ml-6",
      },
      content: {
        root: {
          base: "",
          horizontal: "mt-3 sm:pr-8",
          vertical: "",
        },
        time: "mb-1 font-mono text-[length:var(--text-9)] uppercase tracking-wider text-retro-muted-fg dark:text-retro-muted-fg",
        title: "font-mono text-[length:var(--text-11)] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
        body: "font-mono text-[length:var(--text-11)] text-retro-muted-fg dark:text-retro-muted-fg",
      },
      point: {
        horizontal: "flex items-center",
        line: "hidden h-0.5 w-full bg-retro-fg dark:bg-retro-fg sm:flex",
        marker: {
          base: {
            horizontal:
              "absolute -left-1.5 h-3 w-3 rounded-full border-2 border-retro-bg bg-retro-fg dark:border-retro-bg dark:bg-retro-fg",
            vertical:
              "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-retro-bg bg-retro-fg dark:border-retro-bg dark:bg-retro-fg",
          },
        },
        vertical: "",
      },
    },
  },

  // ──────────────────────────── List ────────────────────────────────
  list: {
    root: {
      base: "space-y-1 font-mono text-[length:var(--text-11)] text-retro-fg dark:text-retro-fg list-inside",
      ordered: {
        off: "list-disc",
        on: "list-decimal",
      },
      horizontal: "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
      unstyled: "list-none",
      nested: "mt-2 ps-5",
    },
    item: {
      withIcon: {
        off: "",
        on: "flex items-center",
      },
      icon: "me-2 h-3.5 w-3.5 shrink-0",
    },
  },

  // ──────────────────────────── Avatar ──────────────────────────────
  avatar: {
    root: {
      base: "flex items-center justify-center space-x-2",
      inner: "relative",
      bordered: "ring-2 ring-retro-fg dark:ring-retro-fg",
      rounded: "rounded-sm",
      color: {
        default: "ring-retro-fg dark:ring-retro-fg",
      },
      size: {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-16 h-16",
        xl: "w-24 h-24",
      },
      stacked: "ring-2 ring-retro-bg dark:ring-retro-bg",
      img: {
        base: "rounded-sm",
        off: "relative overflow-hidden bg-retro-secondary dark:bg-retro-secondary",
        on: "",
        placeholder: "absolute w-auto h-auto text-retro-muted-fg dark:text-retro-muted-fg -bottom-1",
      },
      initials: {
        base: "inline-flex items-center justify-center overflow-hidden rounded-sm bg-retro-secondary dark:bg-retro-secondary",
        text: "font-mono text-[length:var(--text-11)] font-bold uppercase text-retro-fg dark:text-retro-fg",
      },
      status: {
        away: "bg-retro-warning",
        base: "absolute h-[var(--status-indicator-size)] w-[var(--status-indicator-size)] rounded-full border-2 border-retro-bg dark:border-retro-bg",
        busy: "bg-retro-error",
        offline: "bg-retro-muted-fg",
        online: "bg-retro-success",
      },
      statusPosition: {
        "bottom-left":  "bottom-0 left-0",
        "bottom-right": "bottom-0 right-0",
        "top-left":     "top-0 left-0",
        "top-right":    "top-0 right-0",
      },
    },
    group: {
      base: "flex -space-x-3",
    },
    groupCounter: {
      base: "relative flex h-10 w-10 items-center justify-center rounded-sm border-2 border-retro-fg bg-retro-muted font-mono text-[length:var(--text-11)] font-bold text-retro-muted-fg ring-2 ring-retro-bg dark:border-retro-fg dark:bg-retro-muted dark:text-retro-muted-fg dark:ring-retro-bg",
    },
  },

  // ──────────────────────────── HR ──────────────────────────────────
  hr: {
    root: {
      base: "my-4 border-retro-fg dark:border-retro-fg",
    },
  },

  // ──────────────────────────── Blockquote ──────────────────────────
  blockquote: {
    root: {
      base: "border-l-2 border-retro-fg pl-4 italic text-retro-fg dark:border-retro-fg dark:text-retro-fg",
    },
  },

  // ──────────────────────────── Kbd ─────────────────────────────────
  kbd: {
    root: {
      base: "px-2 py-1 font-mono text-[length:var(--text-10)] font-bold uppercase tracking-wider border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-sm dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
    },
  },

  // ──────────────────────────── ButtonGroup ─────────────────────────
  buttonGroup: {
    base: "inline-flex",
    position: {
      none: "focus:ring-0",
      start: "rounded-r-none focus:ring-0",
      middle: "rounded-none border-l-0 focus:ring-0",
      end: "rounded-l-none border-l-0 focus:ring-0",
    },
  },

  // ──────────────────────────── Pagination ──────────────────────────
  pagination: {
    base: "flex items-center gap-2",
    layout: {
      table: {
        base: "text-[length:var(--text-11)] font-mono text-retro-muted-fg dark:text-retro-muted-fg",
        span: "font-bold text-retro-fg dark:text-retro-fg",
      },
    },
    pages: {
      base: "inline-flex items-center -space-x-px",
      previous: {
        base: "ml-0 rounded-l-md border-2 border-retro-fg bg-retro-bg px-3 py-2 leading-tight text-retro-fg hover:bg-retro-fg hover:text-retro-bg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-fg dark:hover:text-retro-bg",
        icon: "h-4 w-4",
      },
      next: {
        base: "rounded-r-md border-2 border-retro-fg bg-retro-bg px-3 py-2 leading-tight text-retro-fg hover:bg-retro-fg hover:text-retro-bg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-fg dark:hover:text-retro-bg",
        icon: "h-4 w-4",
      },
      selector: {
        base: "w-10 border-2 border-retro-fg bg-retro-bg py-2 text-center font-mono text-[length:var(--text-11)] leading-tight text-retro-fg hover:bg-retro-fg hover:text-retro-bg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-fg dark:hover:text-retro-bg",
        active: "bg-retro-fg text-retro-bg hover:bg-retro-fg hover:text-retro-bg dark:bg-retro-fg dark:text-retro-bg",
      },
    },
  },

  // ──────────────────────────── Dropdown ────────────────────────────
  dropdown: {
    arrowIcon: "ml-2 h-4 w-4",
    content: "py-1 focus:outline-none rounded-md border-2 border-retro-fg bg-retro-bg dark:border-retro-fg dark:bg-retro-bg",
    floating: {
      target: "w-fit",
      base: "z-10 w-fit rounded-md divide-y divide-retro-border shadow-hard-2 dark:divide-retro-border",
      item: {
        container: "",
        base: "flex items-center justify-start px-4 py-2 font-mono text-[length:var(--text-11)] text-retro-fg cursor-pointer hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent",
        icon: "mr-2 h-4 w-4",
      },
    },
  },

  // ──────────────────────────── Sidebar ─────────────────────────────
  sidebar: {
    root: {
      base: "h-full bg-retro-bg border-2 border-retro-fg rounded-md dark:bg-retro-bg dark:border-retro-fg transition-[width] duration-[250ms]",
      collapsed: { on: "w-16", off: "w-full" },
      inner: "h-full overflow-y-auto overflow-x-hidden bg-retro-bg px-3 py-4 dark:bg-retro-bg",
    },
    collapse: {
      button: "group flex w-full items-center rounded-sm p-2 font-mono text-[length:var(--text-11)] text-retro-fg hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      icon: {
        base: "h-4 w-4 shrink-0 text-retro-fg dark:text-retro-fg",
        open: { on: "", off: "" },
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left",
        title: "",
        icon: {
          base: "h-4 w-4",
          open: { on: "rotate-180", off: "" },
        },
      },
      list: "space-y-1 py-1",
    },
    cta: {
      base: "mt-6 rounded-md p-3",
      color: {
        blue: "bg-retro-info/10", dark: "bg-retro-secondary", failure: "bg-retro-error/10",
        gray: "bg-retro-muted", green: "bg-retro-success/10", light: "bg-retro-secondary",
        purple: "bg-retro-purple/10", red: "bg-retro-error/10", success: "bg-retro-success/10",
        warning: "bg-retro-warning/10", yellow: "bg-retro-warning/10",
      },
    },
    item: {
      active: "bg-retro-secondary dark:bg-retro-secondary font-bold",
      base: "flex items-center justify-start rounded-sm p-2 font-mono text-[length:var(--text-11)] text-retro-fg hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      collapsed: {
        insideCollapse: "group w-full pl-8",
        noIcon: "font-bold",
      },
      content: {
        base: "px-3 flex-1 whitespace-nowrap",
      },
      icon: {
        base: "h-4 w-4 shrink-0 text-retro-fg dark:text-retro-fg",
        active: "text-retro-fg dark:text-retro-fg",
      },
      label: "ml-auto inline-flex items-center rounded-sm px-1.5 py-0.5 font-mono text-[length:var(--text-9)] font-bold",
      listItem: "",
    },
    items: { base: "" },
    itemGroup: {
      base: "mt-4 space-y-1 border-t border-retro-fg pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-retro-fg",
    },
    logo: {
      base: "mb-5 flex items-center pl-2",
      collapsed: { on: "hidden", off: "" },
      img: "mr-3 h-6",
    },
  },

  // ──────────────────────────── Drawer ──────────────────────────────
  // Side-sheet. Header dark band is applied via className on DrawerHeader in consumer code.
  drawer: {
    root: {
      base: "fixed z-40 overflow-y-auto bg-retro-bg border-2 border-retro-fg transition-transform duration-[250ms] dark:bg-retro-bg dark:border-retro-fg",
      backdrop: "fixed inset-0 z-30 bg-retro-fg/30 dark:bg-retro-fg/30",
      edge: "bottom-16",
      position: {
        top: {
          on:  "left-0 right-0 top-0 w-full transform-none",
          off: "left-0 right-0 top-0 w-full -translate-y-full",
        },
        right: {
          on:  "right-0 top-0 h-screen w-80 transform-none",
          off: "right-0 top-0 h-screen w-80 translate-x-full",
        },
        bottom: {
          on:  "bottom-0 left-0 right-0 w-full transform-none",
          off: "bottom-0 left-0 right-0 w-full translate-y-full",
        },
        left: {
          on:  "left-0 top-0 h-screen w-80 transform-none",
          off: "left-0 top-0 h-screen w-80 -translate-x-full",
        },
      },
    },
    header: {
      inner: {
        titleIcon: "mr-2 h-4 w-4",
        titleText: "font-mono text-[length:var(--text-13)] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
        closeButton: "absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-md border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-secondary focus:outline-none dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-secondary",
        closeIcon: "h-4 w-4",
        titleCloseIcon: "sr-only",
      },
      collapsed: {
        on: "hidden",
        off: "block",
      },
    },
    items: {
      base: "p-4",
    },
  },

  // ──────────────────────────── Datepicker ──────────────────────────
  datepicker: {
    root: {
      base: "relative",
    },
    popup: {
      root: {
        base: "absolute top-10 z-50 block pt-2",
        inline: "relative top-0 z-auto",
        inner: "inline-block rounded-md border-2 border-retro-fg bg-retro-bg shadow-hard-2 dark:border-retro-fg dark:bg-retro-bg",
      },
      header: {
        base: "flex items-center justify-between bg-retro-fg dark:bg-retro-fg px-3 py-2",
        title: "font-mono text-[length:var(--text-11)] font-bold uppercase tracking-wider text-retro-bg dark:text-retro-bg",
        selectors: {
          base: "flex",
          button: {
            base: "flex items-center justify-center p-1 text-retro-bg dark:text-retro-bg hover:text-retro-bg/70 dark:hover:text-retro-bg/70 focus:outline-none",
            prev: "",
            next: "",
            view: "px-2 font-mono text-[length:var(--text-11)] font-bold uppercase tracking-wider",
          },
        },
      },
      view: {
        base: "p-3",
      },
      footer: {
        base: "flex border-t border-retro-fg px-3 py-2 gap-2",
        button: {
          base: "flex-1 font-mono text-[length:var(--text-9)] uppercase tracking-wider font-bold border-2 border-retro-fg px-2 py-1 transition-colors focus:outline-none",
          today: "bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg",
          clear: "bg-retro-bg text-retro-muted-fg hover:bg-retro-fg hover:text-retro-bg",
        },
      },
    },
    views: {
      days: {
        header: {
          base: "mb-1 grid grid-cols-7",
          title: "font-mono text-[length:var(--text-9)] uppercase tracking-wider text-retro-muted-fg text-center font-bold",
        },
        items: {
          base: "grid w-64 grid-cols-7",
          item: {
            base: "block flex-1 cursor-pointer rounded-sm border-0 text-center font-mono text-[length:var(--text-10)] leading-9 font-bold focus:outline-none hover:bg-retro-secondary",
            selected: "bg-retro-fg text-retro-bg hover:bg-retro-fg",
            disabled: "opacity-40 cursor-not-allowed hover:bg-transparent",
            today: "text-retro-orange dark:text-retro-orange",
          },
        },
      },
      months: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-sm border-0 text-center font-mono text-[length:var(--text-10)] leading-9 font-bold focus:outline-none hover:bg-retro-secondary",
            selected: "bg-retro-fg text-retro-bg hover:bg-retro-fg",
            disabled: "opacity-40 cursor-not-allowed hover:bg-transparent",
          },
        },
      },
      years: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-sm border-0 text-center font-mono text-[length:var(--text-10)] leading-9 font-bold focus:outline-none hover:bg-retro-secondary",
            selected: "bg-retro-fg text-retro-bg hover:bg-retro-fg",
            disabled: "opacity-40 cursor-not-allowed hover:bg-transparent",
          },
        },
      },
      decades: {
        items: {
          base: "grid w-64 grid-cols-4",
          item: {
            base: "block flex-1 cursor-pointer rounded-sm border-0 text-center font-mono text-[length:var(--text-10)] leading-9 font-bold focus:outline-none hover:bg-retro-secondary",
            selected: "bg-retro-fg text-retro-bg hover:bg-retro-fg",
            disabled: "opacity-40 cursor-not-allowed hover:bg-transparent",
          },
        },
      },
    },
  },

  // ──────────────────────────── Footer ──────────────────────────────
  footer: {
    root: {
      base: "w-full bg-retro-bg border-t-2 border-retro-fg dark:bg-retro-bg dark:border-retro-fg",
      container: "w-full p-6",
    },
    groupLink: {
      base: "flex flex-wrap font-mono text-[length:var(--text-11)] text-retro-fg dark:text-retro-fg",
      link: {
        base: "mr-4 last:mr-0 hover:underline hover:text-retro-muted-fg dark:hover:text-retro-muted-fg",
      },
    },
  },

  // ──────────────────────────── Banner ──────────────────────────────
  banner: {
    root: {
      base: "flex w-full flex-col border-2 border-retro-fg bg-retro-bg p-4 dark:border-retro-fg dark:bg-retro-bg",
      inner: "flex items-center",
    },
  },

  // ──────────────────────────── Popover ─────────────────────────────
  popover: {
    base: "absolute z-20 inline-block w-max max-w-[100vw] rounded-md border-2 border-retro-fg bg-retro-bg shadow-hard-2 dark:border-retro-fg dark:bg-retro-bg",
    content: "z-10 overflow-hidden rounded-md",
    arrow: {
      base: "absolute h-2 w-2 z-0 rotate-45 border border-retro-fg bg-retro-bg dark:border-retro-fg dark:bg-retro-bg",
    },
  },

  // ──────────────────────────── FileInput ───────────────────────────
  // Consumers: use FileInputRetro (src/components/FileInputRetro.jsx) for the full
  // "CHOOSE FILE" button + filename affordance. This slot styles Flowbite's native
  // <FileInput> if used directly, but FileInputRetro is the recommended component.
  fileInput: {
    root: {
      base: "flex",
    },
    field: {
      base: "relative w-full",
      input: {
        base: "block w-full overflow-hidden rounded-md border-2 border-retro-fg bg-retro-bg font-mono text-[length:var(--text-11)] text-retro-fg cursor-pointer focus:outline-none dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
        sizes: {
          sm: "sm:text-xs",
          md: "text-[length:var(--text-11)]",
          lg: "sm:text-base",
        },
      },
    },
  },
});
