import { createTheme } from "flowbite-react";

export const hesperusTheme = createTheme({
  // ───────────────────────────── Button ─────────────────────────────
  button: {
    base: "font-mono uppercase tracking-wider focus:z-10 focus:outline-none focus:ring-0 transition-colors duration-150 rounded-lg",
    fullSized: "w-full",
    color: {
      primary:
        "border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg",
      outline:
        "border-2 border-retro-fg bg-retro-bg text-retro-fg hover:bg-retro-fg hover:text-retro-bg",
      ghost:
        "border-2 border-retro-muted-fg bg-retro-bg text-retro-muted-fg hover:border-retro-fg hover:text-retro-fg",
      destructive:
        "border-2 border-retro-error bg-retro-bg text-retro-error hover:bg-retro-error hover:text-retro-bg",
    },
    size: {
      sm: "text-[9px] h-[26px] rounded-sm px-3.5",
      md: "text-[11px] h-9 rounded-md px-3.5",
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
        warning: "border-retro-warning bg-retro-bg text-retro-warning dark:border-retro-warning dark:bg-retro-bg dark:text-retro-warning",
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
    base: "flex items-start gap-2.5 rounded-md border-2 px-3.5 py-2.5 font-mono text-[11px]",
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
        warning: "bg-transparent text-retro-warning hover:bg-retro-secondary dark:bg-transparent dark:text-retro-warning dark:hover:bg-retro-secondary",
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
        "font-mono text-[13px] font-bold uppercase tracking-wider text-retro-bg",
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
  // Toolbar-style nav: fixed height, clipped rounded corners, no collapse.
  navbar: {
    root: {
      base: "bg-retro-bg dark:bg-retro-bg rounded-md overflow-hidden border-2 border-retro-fg dark:border-retro-fg py-0",
      inner: {
        base: "flex items-stretch h-11 [&_li]:list-none",
        fluid: { on: "", off: "" },
      },
    },
    brand: {
      base: "flex items-center gap-2 h-full pr-5 border-r-2 border-retro-fg dark:border-retro-fg font-mono text-[11px] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
    },
    collapse: {
      base: "flex items-stretch",
      list: "flex flex-row mt-0 md:mt-0 md:space-x-0 h-full items-stretch divide-x-2 divide-retro-fg dark:divide-retro-fg [&_li]:list-none",
      hidden: { on: "", off: "" },
    },
    link: {
      base: "flex items-center gap-2 h-full px-5 md:px-5 font-mono text-[11px] font-bold uppercase tracking-wider text-retro-fg hover:text-retro-muted-fg md:hover:text-retro-muted-fg hover:bg-retro-bg/10 transition-colors focus:outline-none focus:ring-0 whitespace-nowrap",
      active: {
        on: "bg-retro-bg/10 dark:bg-retro-bg/10 text-retro-fg md:text-retro-fg dark:text-retro-fg",
        off: "text-retro-fg hover:text-retro-muted-fg md:hover:text-retro-muted-fg dark:text-retro-fg dark:hover:text-retro-muted-fg dark:md:hover:text-retro-muted-fg",
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
        base: "block w-full font-mono text-[11px] focus:outline-none focus:ring-0",
        sizes: {
          md: "px-3 py-2",
        },
        colors: {
          gray: "border-2 border-retro-fg bg-retro-bg text-retro-fg placeholder-retro-muted-fg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:placeholder-retro-muted-fg rounded-md",
        },
      },
    },
  },

  // ──────────────────────────── Select ──────────────────────────────
  select: {
    base: "flex",
    field: {
      base: "relative w-full",
      select: {
        base: "block w-full font-mono text-[11px] focus:outline-none focus:ring-0 appearance-none",
        sizes: {
          md: "px-3 py-2",
        },
        colors: {
          gray: "border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-md dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
        },
      },
    },
  },

  // ──────────────────────────── Checkbox ────────────────────────────
  checkbox: {
    base: "appearance-none h-4 w-4 rounded-sm border-2 border-retro-fg bg-retro-bg checked:bg-retro-bg checked:border-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:checked:bg-retro-bg dark:checked:border-retro-fg focus:ring-0 focus:ring-offset-0 cursor-pointer",
  },

  // ──────────────────────────── Radio ───────────────────────────────
  radio: {
    base: "appearance-none h-4 w-4 border-2 border-retro-fg bg-retro-bg checked:border-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:checked:border-retro-fg dark:checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%231E2110%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%2F%3E%3C%2Fsvg%3E')] focus:ring-0 focus:ring-offset-0 cursor-pointer",
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
        off: "cursor-not-allowed opacity-50",
      },
      label: "ms-3 mt-0.5 text-start font-mono text-[10px] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
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
      base: "font-mono text-[10px] font-bold uppercase tracking-wider",
      colors: {
        default: "text-retro-fg dark:text-retro-fg",
      },
    },
  },

  // ──────────────────────────── Table ───────────────────────────────
  table: {
    root: {
      base: "w-full text-left font-mono text-[11px] text-retro-fg dark:text-retro-fg",
      shadow: "",
      wrapper: "overflow-x-auto rounded-md border-2 border-retro-fg dark:border-retro-fg",
    },
    head: {
      base: "uppercase tracking-wider",
      cell: {
        base: "bg-retro-fg px-3 py-2 text-retro-bg dark:bg-retro-fg dark:text-retro-bg font-bold text-[10px] tracking-wider border-r border-retro-bg last:border-r-0 group-first/head:first:rounded-none group-first/head:last:rounded-none",
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
  tabs: {
    base: "flex flex-col",
    tablist: {
      base: "flex w-fit overflow-hidden rounded-md border-2 border-retro-fg",
      variant: {
        // flex-nowrap: cancels default flex-wrap
        // border-b-2: overrides default border-b (1px→2px); without this, border-b-0 was removing the bottom border entirely
        // border-retro-fg / dark:border-retro-fg: overrides default border-gray-200/dark:border-gray-700
        //   (variant is applied AFTER base in twMerge, so color must be set here too to win)
        default: "flex-nowrap border-b-2 border-retro-fg dark:border-retro-fg",
      },
      tabitem: {
        // rounded-t-none: cancels default rounded-t-lg — must use rounded-t-* group, not rounded-none
        //   (rounded-none is in the "rounded" group; rounded-t-lg is in "rounded-t" — different twMerge
        //    groups, so rounded-none doesn't cancel it. rounded-t-none is in the same group.)
        // border-r border-retro-fg: consistent foreground-color separator on every tab
        base: "flex items-center justify-center rounded-t-none py-0 font-mono text-[11px] font-bold uppercase tracking-[1px] px-5 h-9 border-r border-retro-fg last:border-r-0 focus:outline-none focus:ring-0 transition-colors",
        variant: {
          default: {
            // rounded-t-none: cancels this variant's own rounded-t-lg default
            base: "rounded-t-none",
            active: {
              // dark:bg-retro-fg / dark:text-retro-bg: cancel default dark:bg-gray-800 / dark:text-primary-500
              on: "bg-retro-fg text-retro-bg dark:bg-retro-fg dark:text-retro-bg",
              // hover:text-retro-fg: cancels default hover:text-gray-600
              // dark:*: cancel default dark:text-gray-400 / dark:hover:bg-gray-800 / dark:hover:text-gray-300
              off: "bg-retro-bg text-retro-fg hover:bg-retro-secondary hover:text-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-secondary dark:hover:text-retro-fg",
            },
          },
        },
      },
    },
    tabpanel: "p-4",
  },

  // ──────────────────────────── Breadcrumb ──────────────────────────
  breadcrumb: {
    root: {
      base: "",
      list: "flex items-center gap-1",
    },
    item: {
      base: "flex items-center gap-1 font-mono text-[11px]",
      chevron: "h-3 w-3 text-retro-muted-fg",
      href: {
        off: "font-bold uppercase tracking-wider text-retro-fg",
        on: "uppercase tracking-wider text-retro-fg underline decoration-retro-fg hover:text-retro-muted-fg",
      },
    },
  },

  // ──────────────────────────── Tooltip ─────────────────────────────
  tooltip: {
    target: "",
    base: "absolute z-10 inline-block rounded-md border-2 border-retro-fg bg-retro-bg px-3 py-2 font-mono text-[11px] text-retro-fg shadow-none dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45 border border-retro-fg bg-retro-bg dark:border-retro-fg dark:bg-retro-bg",
    },
  },

  // ──────────────────────────── Spinner ─────────────────────────────
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
  progress: {
    base: "w-full overflow-hidden rounded-sm bg-retro-secondary dark:bg-retro-secondary",
    label: "mb-1 flex justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
    bar: "rounded-sm bg-retro-fg dark:bg-retro-fg",
    size: {
      sm: "h-1.5",
      md: "h-2.5",
      lg: "h-4",
      xl: "h-6",
    },
  },

  // ──────────────────────────── Toast ───────────────────────────────
  toast: {
    root: {
      base: "flex w-full max-w-xs items-center rounded-md border-2 border-retro-fg bg-retro-bg p-4 text-retro-fg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
    },
    toggle: {
      base: "-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 text-retro-fg hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      icon: "h-5 w-5",
    },
  },

  // ──────────────────────────── Rating ──────────────────────────────
  rating: {
    root: {
      base: "flex items-center gap-1",
    },
    star: {
      empty: "text-retro-muted-fg dark:text-retro-muted-fg",
      filled: "text-retro-fg dark:text-retro-fg",
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
      base: "p-4 font-mono text-[11px]",
    },
    title: {
      base: "flex w-full items-center justify-between p-4 font-mono text-[11px] font-bold uppercase tracking-wider text-retro-fg hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      open: {
        on: "bg-retro-secondary dark:bg-retro-secondary",
        off: "",
      },
      arrow: {
        base: "h-4 w-4 shrink-0 text-retro-fg dark:text-retro-fg",
        open: {
          on: "rotate-180",
          off: "",
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
        time: "mb-1 font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg dark:text-retro-muted-fg",
        title: "font-mono text-[11px] font-bold uppercase tracking-wider text-retro-fg dark:text-retro-fg",
        body: "font-mono text-[11px] text-retro-muted-fg dark:text-retro-muted-fg",
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
      base: "space-y-1 font-mono text-[11px] text-retro-fg dark:text-retro-fg list-inside",
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
      bordered: "p-1 ring-2 ring-retro-fg dark:ring-retro-fg",
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
    },
    img: {
      base: "rounded-sm",
      off: "relative overflow-hidden bg-retro-secondary dark:bg-retro-secondary",
      on: "",
      placeholder: "absolute w-auto h-auto text-retro-muted-fg dark:text-retro-muted-fg -bottom-1",
    },
    initials: {
      base: "inline-flex items-center justify-center overflow-hidden rounded-sm bg-retro-secondary dark:bg-retro-secondary",
      text: "font-mono text-[11px] font-bold uppercase text-retro-fg dark:text-retro-fg",
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
      base: "px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-sm dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
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

  // ──────────────────────────── pagination ──────────────────────────
  pagination: {
    base: "flex items-center gap-2",
    layout: {
      table: {
        base: "text-[11px] font-mono text-retro-muted-fg dark:text-retro-muted-fg",
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
        base: "w-10 border-2 border-retro-fg bg-retro-bg py-2 text-center font-mono text-[11px] leading-tight text-retro-fg hover:bg-retro-fg hover:text-retro-bg dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg dark:hover:bg-retro-fg dark:hover:text-retro-bg",
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
      base: "z-10 w-fit rounded-md divide-y divide-retro-fg dark:divide-retro-fg",
      item: {
        base: "flex items-center justify-start px-4 py-2 font-mono text-[11px] text-retro-fg cursor-pointer hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      },
    },
  },

  // ──────────────────────────── Sidebar ─────────────────────────────
  sidebar: {
    root: {
      base: "h-full bg-retro-bg border-2 border-retro-fg rounded-md dark:bg-retro-bg dark:border-retro-fg",
      inner: "h-full overflow-y-auto overflow-x-hidden bg-retro-bg px-3 py-4 dark:bg-retro-bg",
    },
    item: {
      base: "flex items-center justify-center rounded-sm p-2 font-mono text-[11px] text-retro-fg hover:bg-retro-secondary dark:text-retro-fg dark:hover:bg-retro-secondary",
      active: "bg-retro-secondary dark:bg-retro-secondary",
      content: {
        base: "px-3 flex-1 whitespace-nowrap",
      },
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-retro-fg pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-retro-fg",
    },
  },

  // ──────────────────────────── Footer ──────────────────────────────
  footer: {
    root: {
      base: "w-full bg-retro-bg border-t-2 border-retro-fg dark:bg-retro-bg dark:border-retro-fg",
      container: "w-full p-6",
    },
    groupLink: {
      base: "flex flex-wrap font-mono text-[11px] text-retro-fg dark:text-retro-fg",
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
    base: "absolute z-20 inline-block w-max max-w-[100vw] rounded-md border-2 border-retro-fg bg-retro-bg shadow-none dark:border-retro-fg dark:bg-retro-bg",
    content: "z-10 overflow-hidden rounded-md",
    arrow: {
      base: "absolute h-2 w-2 z-0 rotate-45 border border-retro-fg bg-retro-bg dark:border-retro-fg dark:bg-retro-bg",
    },
  },

  // ──────────────────────────── FileInput ───────────────────────────
  fileInput: {
    root: {
      base: "flex",
    },
    field: {
      base: "relative w-full",
      input: {
        base: "block w-full overflow-hidden rounded-md border-2 border-retro-fg bg-retro-bg font-mono text-[11px] text-retro-fg cursor-pointer focus:outline-none dark:border-retro-fg dark:bg-retro-bg dark:text-retro-fg",
        sizes: {
          sm: "sm:text-xs",
          md: "text-[11px]",
          lg: "sm:text-base",
        },
      },
    },
  },
});
