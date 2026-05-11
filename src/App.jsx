import { useState, useEffect } from "react";
import {
  ThemeProvider,
  Button,
  Badge,
  Alert,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  TextInput,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Label,
  HelperText,
  Datepicker,
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  Tabs,
  TabItem,
  Breadcrumb,
  BreadcrumbItem,
  Tooltip,
  Spinner,
  Progress,
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
  Avatar,
  AvatarGroup,
  AvatarGroupCounter,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
  List,
  ListItem,
  Pagination,
  ButtonGroup,
  Rating,
  RatingStar,
  Toast,
  Popover,
  Blockquote,
  Kbd,
  HR,
  Footer,
  FooterLink,
  FooterLinkGroup,
  Banner,
  ToggleSwitch,
  Drawer,
  DrawerHeader,
  DrawerItems,
} from "flowbite-react";
import { hesperusTheme } from "./theme";
import GraphNode from "./components/GraphNode";
import ConnectionLabel from "./components/ConnectionLabel";
import SpinnerBlock from "./components/SpinnerBlock";
import SpinnerDots from "./components/SpinnerDots";
import FileInputRetro from "./components/FileInputRetro";
import { StateMatrix } from "./components/StateMatrix";

// ── Layout helpers ────────────────────────────────────────────────

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-20 scroll-mt-20">
      <div className="mb-6 pb-2 border-b-2 border-retro-fg flex items-baseline gap-3">
        <h2 className="font-mono text-[10px] font-bold uppercase tracking-widest text-retro-muted-fg">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Group({ label, children }) {
  return (
    <div className="mb-8">
      {label && (
        <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3 border-l-2 border-retro-border pl-2">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-5 items-start">{children}</div>
    </div>
  );
}

function Variant({ label, children }) {
  return (
    <div className="flex flex-col items-start gap-2">
      {children}
      {label && (
        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">
          {label}
        </span>
      )}
    </div>
  );
}

// ── Sidebar nav ───────────────────────────────────────────────────

const NAV_SECTIONS = [
  { id: "colors", label: "Colors" },
  { id: "type-scale", label: "Type Scale" },
  { id: "spacing-radii", label: "Spacing & Radii" },
  { id: "motion", label: "Motion" },
  { id: "contrast", label: "Contrast" },
  { id: "density", label: "Density" },
  { id: "brand", label: "Brand" },
  { id: "icons", label: "Icons" },
  { id: "typography", label: "Typography" },
  { id: "buttons", label: "Buttons" },
  { id: "form", label: "Form Inputs" },
  { id: "badges", label: "Badges" },
  { id: "alerts", label: "Alerts" },
  { id: "cards", label: "Cards" },
  { id: "table", label: "Table" },
  { id: "navigation", label: "Navigation" },
  { id: "overlays", label: "Overlays" },
  { id: "feedback", label: "Feedback" },
  { id: "content", label: "Content" },
  { id: "layout", label: "Layout" },
  { id: "drawer", label: "Drawer" },
  { id: "page-states", label: "Page States" },
  { id: "graph", label: "Graph Nodes" },
];

// ── App ───────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSmallModal, setOpenSmallModal] = useState(false);
  const [openLargeModal, setOpenLargeModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerRight, setOpenDrawerRight] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // State matrix styles for interactive components
  const stateStyles = `
    /* Button state styles */
    .state-default button {
      /* Default state - no changes */
    }
    .state-hover button {
      background-color: var(--retro-fg) !important;
      color: var(--retro-bg) !important;
    }
    .state-active button {
      background-color: var(--retro-fg) !important;
      color: var(--retro-bg) !important;
      transform: translate(1px, 1px) !important;
    }
    .state-focus button {
      box-shadow: 0 0 0 2px var(--retro-bg), 0 0 0 4px var(--retro-orange) !important;
    }
    .state-disabled button {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }
    .state-loading button {
      color: transparent !important;
      position: relative;
    }
    .state-loading button::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 12px;
      height: 12px;
      border: 2px solid var(--retro-fg);
      border-right-color: transparent;
      border-radius: 50%;
      animation: spin 600ms linear infinite;
      transform: translate(-50%, -50%);
    }

    /* Input state styles */
    .state-hover input:not([type="checkbox"]):not([type="radio"]),
    .state-hover select,
    .state-hover textarea {
      border-color: var(--retro-fg) !important;
    }
    .state-focus input:not([type="checkbox"]):not([type="radio"]),
    .state-focus select,
    .state-focus textarea {
      box-shadow: 0 0 0 2px var(--retro-bg), 0 0 0 4px var(--retro-orange) !important;
      outline: none !important;
    }
    .state-disabled input:not([type="checkbox"]):not([type="radio"]),
    .state-disabled select,
    .state-disabled textarea {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }

    /* Checkbox/Radio state styles */
    .state-focus input[type="checkbox"],
    .state-focus input[type="radio"] {
      box-shadow: 0 0 0 2px var(--retro-bg), 0 0 0 4px var(--retro-orange) !important;
    }
    .state-disabled input[type="checkbox"],
    .state-disabled input[type="radio"] {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }
    .state-disabled label {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }

    /* Toggle switch state styles */
    .state-focus [role="switch"] {
      box-shadow: 0 0 0 2px var(--retro-bg), 0 0 0 4px var(--retro-orange) !important;
    }
    .state-disabled [role="switch"] {
      opacity: 0.4 !important;
      cursor: not-allowed !important;
    }

    /* Progress loading state */
    .state-loading .progress-indeterminate {
      position: relative;
    }
    .state-loading .progress-indeterminate-bar {
      animation: slide-progress 1200ms ease-in-out infinite !important;
      width: 35% !important;
    }

    @keyframes spin {
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    @keyframes slide-progress {
      0% { margin-left: 0; }
      50% { margin-left: 65%; }
      100% { margin-left: 0; }
    }
  `;

  return (
    <ThemeProvider theme={hesperusTheme}>
      <style>{stateStyles}</style>
      <div className="min-h-screen bg-retro-bg text-retro-fg bg-grid">
        {/* ── Header ── */}
        <div className="fixed top-0 left-0 right-0 z-50 p-3">
          <Navbar>
            <NavbarBrand href="#">
              <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
                Hesperus
              </span>
              <span className="text-[13px] opacity-40">//</span>
              <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">
                Component Browser
              </span>
            </NavbarBrand>
            <div className="flex-1" />
            <NavbarLink
              href="#"
              onClick={(e) => { e.preventDefault(); setDark(!dark); }}
            >
              {dark ? "☀ Light" : "☾ Dark"}
            </NavbarLink>
          </Navbar>
        </div>

        <div className="flex pt-[68px]">
          {/* ── Sidebar ── */}
          <nav className="fixed left-3 top-[68px] bottom-3 w-44 bg-retro-bg border-2 border-retro-fg rounded-lg overflow-y-auto py-8 px-5">
            <p className="font-mono text-[8px] uppercase tracking-widest text-retro-muted-fg mb-4">
              Components
            </p>
            <ul className="space-y-0.5">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block font-mono text-[10px] uppercase tracking-wider text-retro-muted-fg hover:text-retro-fg py-1.5 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Main content ── */}
          <main className="ml-[200px] flex-1 px-14 py-12 max-w-5xl">

            {/* ── Colors ── */}
            <Section id="colors" title="Colors">
              <Group label="Light palette">
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "bg", hex: "#efeed0", token: "--retro-bg" },
                    { name: "muted", hex: "#f2ecda", token: "--retro-muted" },
                    { name: "border", hex: "#b8a878", token: "--retro-border" },
                    { name: "muted-fg", hex: "#8a7e6a", token: "--retro-muted-fg" },
                    { name: "fg", hex: "#2c2416", token: "--retro-fg" },
                    { name: "secondary", hex: "#f2ecda", token: "--retro-secondary" },
                    { name: "secondary-fg", hex: "#2c2416", token: "--retro-secondary-fg" },
                  ].map(({ name, hex, token }) => (
                    <Variant key={name} label={token}>
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-20 h-20 border-2 border-retro-fg rounded" style={{ background: hex }} />
                        <p className="font-mono text-[9px] font-bold uppercase">{name}</p>
                        <p className="font-mono text-[8px] text-retro-muted-fg">{hex}</p>
                      </div>
                    </Variant>
                  ))}
                </div>
              </Group>
              <Group label="Dark palette">
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "bg", hex: "#222627", token: "--retro-bg" },
                    { name: "muted", hex: "#332c22", token: "--retro-muted" },
                    { name: "border", hex: "#4a4030", token: "--retro-border" },
                    { name: "muted-fg", hex: "#887766", token: "--retro-muted-fg" },
                    { name: "fg", hex: "#d4ccaa", token: "--retro-fg" },
                    { name: "secondary", hex: "#3a3428", token: "--retro-secondary" },
                    { name: "secondary-fg", hex: "#d4ccaa", token: "--retro-secondary-fg" },
                  ].map(({ name, hex, token }) => (
                    <Variant key={name} label={token}>
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-20 h-20 border-2" style={{ background: hex, borderColor: "#d4ccaa" }} />
                        <p className="font-mono text-[9px] font-bold uppercase text-retro-muted-fg" style={{ color: "#887766" }}>{name}</p>
                        <p className="font-mono text-[8px] text-retro-muted-fg" style={{ color: "#887766" }}>{hex}</p>
                      </div>
                    </Variant>
                  ))}
                </div>
              </Group>
              <Group label="Semantic colors">
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "error", hex: "#AA3322", token: "--retro-error" },
                    { name: "success", hex: "#5C7A28", token: "--retro-success" },
                    { name: "warning", hex: "#C4A232", token: "--retro-warning" },
                    { name: "info", hex: "#5566AA", token: "--retro-info" },
                  ].map(({ name, hex, token }) => (
                    <Variant key={name} label={token}>
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-20 h-20 border-2 border-retro-fg rounded" style={{ background: hex }} />
                        <p className="font-mono text-[9px] font-bold uppercase">{name}</p>
                        <p className="font-mono text-[8px] text-retro-muted-fg">{hex}</p>
                      </div>
                    </Variant>
                  ))}
                </div>
              </Group>
              <Group label="Accent colors">
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "orange", hex: "#CC6622", token: "--retro-orange" },
                    { name: "purple", hex: "#7744AA", token: "--retro-purple" },
                    { name: "cyan", hex: "#2E8B8B", token: "--retro-cyan" },
                    { name: "green", hex: "#5C7A28", token: "--retro-green" },
                    { name: "yellow", hex: "#C4A232", token: "--retro-yellow" },
                    { name: "blue", hex: "#5566AA", token: "--retro-blue" },
                  ].map(({ name, hex, token }) => (
                    <Variant key={name} label={token}>
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-20 h-20 border-2 border-retro-fg rounded" style={{ background: hex }} />
                        <p className="font-mono text-[9px] font-bold uppercase">{name}</p>
                        <p className="font-mono text-[8px] text-retro-muted-fg">{hex}</p>
                      </div>
                    </Variant>
                  ))}
                </div>
              </Group>
            </Section>

            {/* ── Type Scale ── */}
            <Section id="type-scale" title="Type Scale">
              <Group label="All sizes">
                <div className="flex flex-col gap-3 w-full max-w-2xl">
                  {[
                    { size: "9px", token: "--text-9" },
                    { size: "10px", token: "--text-10" },
                    { size: "11px", token: "--text-11" },
                    { size: "12px", token: "--text-12" },
                    { size: "13px", token: "--text-13" },
                    { size: "14px", token: "--text-14" },
                    { size: "16px", token: "--text-16" },
                    { size: "20px", token: "--text-20" },
                    { size: "24px", token: "--text-24" },
                    { size: "32px", token: "--text-32" },
                    { size: "44px", token: "--text-44" },
                  ].map(({ size, token }) => (
                    <div key={token} className="flex items-baseline gap-4 border-b border-retro-border pb-2">
                      <p className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg w-20" style={{ fontSize: "8px" }}>
                        {token}
                      </p>
                      <p className="font-mono uppercase tracking-wider text-retro-fg" style={{ fontSize: size }}>
                        HESPERUS
                      </p>
                      <p className="font-mono text-[9px] text-retro-muted-fg ml-auto">
                        {size}
                      </p>
                    </div>
                  ))}
                </div>
              </Group>
            </Section>

            {/* ── Spacing & Radii ── */}
            <Section id="spacing-radii" title="Spacing & Radii">
              <Group label="Spacing scale">
                <div className="flex flex-col gap-4 w-full max-w-2xl">
                  {[
                    { token: "--space-0_5", px: "2" },
                    { token: "--space-1", px: "4" },
                    { token: "--space-1_5", px: "6" },
                    { token: "--space-2", px: "8" },
                    { token: "--space-2_5", px: "10" },
                    { token: "--space-3", px: "12" },
                    { token: "--space-3_5", px: "14" },
                    { token: "--space-4", px: "16" },
                    { token: "--space-5", px: "20" },
                    { token: "--space-6", px: "24" },
                    { token: "--space-8", px: "32" },
                    { token: "--space-10", px: "40" },
                    { token: "--space-12", px: "48" },
                    { token: "--space-16", px: "64" },
                  ].map(({ token, px }) => (
                    <div key={token} className="flex items-center gap-4">
                      <p className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg w-20">
                        {token}
                      </p>
                      <div className="flex-1 bg-retro-fg rounded-sm" style={{ height: "6px", width: `${parseInt(px) * 2}px` }} />
                      <p className="font-mono text-[9px] text-retro-muted-fg w-12 text-right">
                        {px}px
                      </p>
                    </div>
                  ))}
                </div>
              </Group>
              <Group label="Radius values">
                <div className="flex flex-wrap gap-6">
                  {[
                    { token: "--radius-sm", px: "3" },
                    { token: "--radius-md", px: "4" },
                    { token: "--radius-lg", px: "6" },
                  ].map(({ token, px }) => (
                    <Variant key={token} label={token}>
                      <div className="flex flex-col items-start gap-2">
                        <div
                          className="w-20 h-20 border-2 border-retro-fg bg-retro-secondary"
                          style={{ borderRadius: `${px}px` }}
                        />
                        <p className="font-mono text-[9px] font-bold uppercase">{token}</p>
                        <p className="font-mono text-[8px] text-retro-muted-fg">{px}px</p>
                      </div>
                    </Variant>
                  ))}
                </div>
              </Group>
            </Section>

            {/* ── Motion ── */}
            <Section id="motion" title="Motion">
              <style>{`
                .motion-bar-0::after { animation: slide-0 1ms infinite linear; }
                .motion-bar-100::after { animation: slide-100 100ms infinite linear; }
                .motion-bar-150::after { animation: slide-150 150ms infinite linear; }
                .motion-bar-250::after { animation: slide-250 250ms infinite linear; }
                .motion-bar-400::after { animation: slide-400 400ms infinite linear; }
                @keyframes slide-0 { 0% { transform: translateX(0); } 50% { transform: translateX(233%); } 100% { transform: translateX(0); } }
                @keyframes slide-100 { 0% { transform: translateX(0); } 50% { transform: translateX(233%); } 100% { transform: translateX(0); } }
                @keyframes slide-150 { 0% { transform: translateX(0); } 50% { transform: translateX(233%); } 100% { transform: translateX(0); } }
                @keyframes slide-250 { 0% { transform: translateX(0); } 50% { transform: translateX(233%); } 100% { transform: translateX(0); } }
                @keyframes slide-400 { 0% { transform: translateX(0); } 50% { transform: translateX(233%); } 100% { transform: translateX(0); } }
                .motion-bar-0::after, .motion-bar-100::after, .motion-bar-150::after, .motion-bar-250::after, .motion-bar-400::after {
                  content: '';
                  position: absolute;
                  top: 0; left: 0; bottom: 0;
                  width: 30%;
                  background: var(--retro-orange);
                }
                .ease-dot-easestep { animation: easeMove 2s infinite steps(1, end); }
                .ease-dot-easestepped { animation: easeMove 2s infinite steps(8, end); }
                .ease-dot-easelinear { animation: easeMove 2s infinite linear; }
                .ease-dot-easeout { animation: easeMove 2s infinite cubic-bezier(0.2, 0.8, 0.2, 1); }
                .ease-dot-easeinout { animation: easeMove 2s infinite cubic-bezier(0.4, 0, 0.2, 1); }
                .ease-dot-easestep, .ease-dot-easestepped, .ease-dot-easelinear, .ease-dot-easeout, .ease-dot-easeinout {
                  position: absolute;
                  top: 1px; width: 8px; height: 8px;
                  background: var(--retro-fg);
                  border-radius: 1px;
                }
                @keyframes easeMove {
                  0% { left: 1px; }
                  50% { left: calc(100% - 9px); }
                  100% { left: 1px; }
                }
              `}</style>
              <Group label="Duration tokens">
                <div className="flex gap-6 flex-wrap">
                  {[
                    { token: "--dur-instant", ms: "0", label: "steps" },
                    { token: "--dur-fast", ms: "100", label: "hover" },
                    { token: "--dur-base", ms: "150", label: "default" },
                    { token: "--dur-slow", ms: "250", label: "modals" },
                    { token: "--dur-slower", ms: "400", label: "pages" },
                  ].map(({ token, ms, label }) => (
                    <Variant key={token} label={token}>
                      <div className="flex flex-col items-start gap-2">
                        <div className="w-24 h-2 border-2 border-retro-fg bg-retro-secondary rounded-sm overflow-hidden relative">
                          <div className={`motion-bar-${ms} absolute inset-0`} />
                        </div>
                        <p className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">
                          {ms}ms · {label}
                        </p>
                      </div>
                    </Variant>
                  ))}
                </div>
              </Group>
              <Group label="Easing tokens">
                <div className="flex flex-col gap-3 w-full max-w-lg">
                  {[
                    { token: "--ease-step", fn: "easestep", label: "On/off" },
                    { token: "--ease-stepped", fn: "easestepped", label: "8-frame" },
                    { token: "--ease-linear", fn: "easelinear", label: "Linear" },
                    { token: "--ease-out", fn: "easeout", label: "Out" },
                    { token: "--ease-in-out", fn: "easeinout", label: "In-out" },
                  ].map(({ token, fn, label }) => (
                    <div key={token} className="flex items-center gap-4">
                      <p className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg w-32">
                        {token}
                      </p>
                      <div className="flex-1 h-3 border border-retro-fg bg-retro-secondary rounded-sm relative overflow-hidden">
                        <div className={`ease-dot-${fn}`} />
                      </div>
                      <p className="font-mono text-[8px] text-retro-muted-fg w-16 text-right">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </Group>
            </Section>

            {/* ── Contrast ── */}
            <Section id="contrast" title="Contrast">
              <Group label="Light mode — WCAG AA">
                <div className="w-full overflow-x-auto">
                  <table className="font-mono text-[9px] border-collapse w-full max-w-3xl">
                    <thead>
                      <tr className="bg-retro-fg text-retro-bg">
                        <th className="px-2 py-1 text-left font-bold uppercase">Token</th>
                        <th className="px-2 py-1 text-left font-bold uppercase">Ratio</th>
                        <th className="px-2 py-1 text-left font-bold uppercase">Body</th>
                        <th className="px-2 py-1 text-left font-bold uppercase">Large</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { token: "--retro-fg", ratio: "12.99", body: "✓", large: "✓", color: "#2c2416" },
                        { token: "--retro-muted-fg", ratio: "8.13", body: "✓", large: "✓", color: "#8a7e6a" },
                        { token: "--retro-error", ratio: "5.56", body: "✓", large: "✓", color: "#AA3322" },
                        { token: "--retro-success", ratio: "4.17", body: "≈", large: "✓", color: "#5C7A28" },
                        { token: "--retro-info", ratio: "4.61", body: "✓", large: "✓", color: "#5566AA" },
                        { token: "--retro-purple", ratio: "5.58", body: "✓", large: "✓", color: "#7744AA" },
                        { token: "--retro-orange", ratio: "4.94", body: "✓", large: "✓", color: "#CC6622" },
                        { token: "--retro-cyan", ratio: "4.65", body: "✓", large: "✓", color: "#2E8B8B" },
                        { token: "--retro-warning", ratio: "2.08", body: "✗", large: "✗", color: "#C4A232" },
                      ].map(({ token, ratio, body, large, color }) => (
                        <tr key={token} className="border-b border-retro-border">
                          <td className="px-2 py-1.5">
                            <span
                              className="inline-block w-3 h-3 border border-retro-fg align-middle mr-2"
                              style={{ background: color }}
                            />
                            {token}
                          </td>
                          <td className="px-2 py-1.5">{ratio}</td>
                          <td className={`px-2 py-1.5 font-bold ${body === "✓" ? "text-retro-success" : body === "≈" ? "text-retro-warning" : "text-retro-error"}`}>
                            {body}
                          </td>
                          <td className={`px-2 py-1.5 font-bold ${large === "✓" ? "text-retro-success" : "text-retro-error"}`}>
                            {large}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Group>
              <Group label="Dark mode — WCAG AA">
                <div className="w-full overflow-x-auto">
                  <table className="font-mono text-[9px] border-collapse w-full max-w-3xl">
                    <thead>
                      <tr style={{ background: "#d4ccaa", color: "#222627" }}>
                        <th className="px-2 py-1 text-left font-bold uppercase">Token</th>
                        <th className="px-2 py-1 text-left font-bold uppercase">Ratio</th>
                        <th className="px-2 py-1 text-left font-bold uppercase">Body</th>
                        <th className="px-2 py-1 text-left font-bold uppercase">Large</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { token: "--retro-fg", ratio: "9.47", body: "✓", large: "✓", color: "#d4ccaa" },
                        { token: "--retro-muted-fg", ratio: "3.55", body: "✗", large: "✓", color: "#887766" },
                        { token: "--retro-warning", ratio: "6.23", body: "✓", large: "✓", color: "#C4A232" },
                        { token: "--retro-error-text", ratio: "4.6", body: "✓", large: "✓", color: "#E0826F" },
                        { token: "--retro-success-text", ratio: "5.9", body: "✓", large: "✓", color: "#A4C870" },
                        { token: "--retro-info-text", ratio: "5.8", body: "✓", large: "✓", color: "#8FA3D9" },
                      ].map(({ token, ratio, body, large, color }) => (
                        <tr key={token} style={{ borderBottomColor: "#4a4030", borderBottomWidth: "1px", borderBottomStyle: "solid" }}>
                          <td className="px-2 py-1.5" style={{ color: "#887766" }}>
                            <span
                              className="inline-block w-3 h-3 border align-middle mr-2"
                              style={{ background: color, borderColor: color }}
                            />
                            {token}
                          </td>
                          <td className="px-2 py-1.5" style={{ color: "#887766" }}>{ratio}</td>
                          <td className="px-2 py-1.5 font-bold" style={{
                            color: body === "✓" ? "#5C7A28" : body === "≈" ? "#C4A232" : "#AA3322"
                          }}>
                            {body}
                          </td>
                          <td className="px-2 py-1.5 font-bold" style={{
                            color: large === "✓" ? "#5C7A28" : "#AA3322"
                          }}>
                            {large}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Group>
            </Section>

            {/* ── Density ── */}
            <Section id="density" title="Density">
              <Group label="Compact / Default / Relaxed">
                <div className="flex gap-6 flex-wrap">
                  {[
                    { label: "Compact", rowHeight: "32px" },
                    { label: "Default", rowHeight: "40px" },
                    { label: "Relaxed", rowHeight: "48px" },
                  ].map(({ label, rowHeight }) => (
                    <div key={label} className="flex flex-col gap-2">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg">{label}</p>
                      <div className="border-2 border-retro-fg rounded overflow-hidden bg-retro-bg" style={{ minWidth: "240px" }}>
                        {["Item one", "Item two", "Item three"].map((item, i) => (
                          <div
                            key={item}
                            className="flex items-center px-3 border-retro-border font-mono text-[10px] text-retro-fg hover:bg-retro-secondary"
                            style={{
                              height: rowHeight,
                              borderBottom: i < 2 ? "1px solid var(--retro-border)" : "none",
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Group>
            </Section>

            {/* ── Brand ── */}
            <Section id="brand" title="Brand">
              <Group label="Logotype">
                <div className="flex gap-8">
                  {[
                    { isDark: false, bg: "bg-retro-bg", fg: "text-retro-fg" },
                    { isDark: true, bg: "bg-[#222627]", fg: "text-[#d4ccaa]" },
                  ].map(({ isDark, bg, fg }, idx) => (
                    <div key={idx} className={`${bg} p-6 rounded ${fg} flex items-center gap-4`}>
                      <div
                        className="w-9 h-9 border-2 flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isDark ? "#d4ccaa" : "#2c2416",
                          borderColor: isDark ? "#d4ccaa" : "#2c2416",
                          transform: "rotate(45deg)",
                        }}
                      >
                        <div
                          className="border-2 w-5 h-5"
                          style={{
                            borderColor: isDark ? "#222627" : "#efeed0",
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-mono text-[20px] font-bold uppercase tracking-wider">Hesperus</p>
                        <p className="font-mono text-[8px] uppercase tracking-wider" style={{ opacity: 0.7 }}>
                          // The Evening Star
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Group>
              <Group label="CRT Grid Backgrounds">
                <div className="flex gap-4 flex-wrap">
                  <div
                    className="w-64 h-40 border-2 border-retro-fg rounded overflow-hidden flex items-end justify-start p-3"
                    style={{
                      backgroundImage: "url('/grid-background-light.svg')",
                      backgroundColor: "#efeed0",
                    }}
                  >
                    <span className="font-mono text-[8px] text-retro-muted-fg uppercase">light grid</span>
                  </div>
                  <div
                    className="w-64 h-40 border-2 rounded overflow-hidden flex items-end justify-start p-3"
                    style={{
                      backgroundImage: "url('/grid-background-dark.svg')",
                      backgroundColor: "#222627",
                      borderColor: "#d4ccaa",
                      color: "#887766",
                    }}
                  >
                    <span className="font-mono text-[8px] uppercase">dark grid</span>
                  </div>
                </div>
              </Group>
            </Section>

            {/* ── Icons ── */}
            <Section id="icons" title="Icons">
              <Group label="Lucide icons at 16px & 20px (strokeWidth=2, currentColor)">
                <div className="flex flex-wrap gap-6">
                  {[
                    { name: "search", viewBox: "0 0 24 24", path: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>' },
                    { name: "settings", viewBox: "0 0 24 24", path: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>' },
                    { name: "mail", viewBox: "0 0 24 24", path: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>' },
                    { name: "file", viewBox: "0 0 24 24", path: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>' },
                    { name: "check", viewBox: "0 0 24 24", path: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' },
                    { name: "alert", viewBox: "0 0 24 24", path: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' },
                    { name: "terminal", viewBox: "0 0 24 24", path: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>' },
                    { name: "node", viewBox: "0 0 24 24", path: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>' },
                  ].map(({ name, viewBox, path }) => (
                    <div key={name} className="flex flex-col gap-3">
                      <p className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">{name}</p>
                      <div className="flex gap-2">
                        <div className="w-12 h-12 border-2 border-retro-fg rounded flex items-center justify-center bg-retro-secondary">
                          <svg width="16" height="16" viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <g dangerouslySetInnerHTML={{ __html: path }} />
                          </svg>
                        </div>
                        <div className="w-12 h-12 border-2 border-retro-fg rounded flex items-center justify-center bg-retro-secondary">
                          <svg width="20" height="20" viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <g dangerouslySetInnerHTML={{ __html: path }} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Group>
              <Group label="ASCII glyphs (terminal-native icons)">
                <p className="font-mono text-[16px] font-bold tracking-widest text-retro-fg">
                  &gt;  &gt;&gt;  ─  │  └─  ▌  ■  ●  ○  /  •
                </p>
              </Group>
            </Section>

            {/* ── Typography ── */}
            <Section id="typography" title="Typography">
              <Group label="Headings">
                <div className="flex flex-col gap-4 w-full">
                  <h1 className="font-mono text-2xl font-bold uppercase tracking-wider">Heading 1</h1>
                  <h2 className="font-mono text-xl font-bold uppercase tracking-wider">Heading 2</h2>
                  <h3 className="font-mono text-lg font-bold uppercase tracking-wider">Heading 3</h3>
                  <h4 className="font-mono text-base font-bold uppercase tracking-wider">Heading 4</h4>
                  <h5 className="font-mono text-sm font-bold uppercase tracking-wider">Heading 5</h5>
                  <h6 className="font-mono text-xs font-bold uppercase tracking-wider">Heading 6</h6>
                </div>
              </Group>
              <Group label="Body text">
                <div className="flex flex-col gap-3 w-full max-w-2xl">
                  <p className="font-mono text-[11px] text-retro-fg leading-relaxed">
                    Regular paragraph text with standard line height. This demonstrates the default body copy styling used throughout the design system.
                  </p>
                  <p className="font-mono text-[11px] text-retro-muted-fg leading-relaxed">
                    Muted text for secondary information or less prominent content.
                  </p>
                  <p className="font-mono text-[11px] text-retro-fg leading-relaxed">
                    Text with <strong className="font-bold">strong emphasis</strong> and <em className="italic">italic emphasis</em> for highlighting important words.
                  </p>
                </div>
              </Group>
              <Group label="Links">
                <div className="flex flex-col gap-3">
                  <Variant label="Default link">
                    <a href="#" className="font-mono text-[11px] text-retro-fg underline hover:text-retro-muted-fg">
                      Standard text link
                    </a>
                  </Variant>
                  <Variant label="No underline">
                    <a href="#" className="font-mono text-[11px] text-retro-fg hover:underline hover:text-retro-muted-fg">
                      Hover to underline
                    </a>
                  </Variant>
                  <Variant label="Muted link">
                    <a href="#" className="font-mono text-[11px] text-retro-muted-fg underline hover:text-retro-fg">
                      Secondary link style
                    </a>
                  </Variant>
                </div>
              </Group>
              <Group label="Code & mono">
                <div className="flex flex-col gap-3 w-full max-w-2xl">
                  <p className="font-mono text-[11px] text-retro-fg">
                    Inline code: <code className="px-1.5 py-0.5 bg-retro-secondary border border-retro-border rounded text-[10px]">const theme = "hesperus"</code>
                  </p>
                  <pre className="font-mono text-[10px] text-retro-fg bg-retro-secondary border-2 border-retro-fg rounded-md p-3 overflow-x-auto">
{`function greet(name) {
  return \`Hello, \${name}!\`;
}`}</pre>
                </div>
              </Group>
            </Section>

            {/* ── 
            {/* ── Buttons ── */}
            <Section id="buttons" title="Buttons">
              <style>{stateStyles}</style>
              <Group label="Primary">
                <StateMatrix label="Primary button — all states" includeLoading>
                  <Button color="primary">Primary</Button>
                </StateMatrix>
              </Group>
              <Group label="Variants">
                <StateMatrix label="Outline button">
                  <Button color="outline">Outline</Button>
                </StateMatrix>
                <StateMatrix label="Ghost button">
                  <Button color="ghost">Ghost</Button>
                </StateMatrix>
                <StateMatrix label="Success button">
                  <Button color="success">Success</Button>
                </StateMatrix>
                <StateMatrix label="Failure button">
                  <Button color="failure">Failure</Button>
                </StateMatrix>
              </Group>
              <Group label="Sizes">
                <StateMatrix label="Small button" includeLoading>
                  <Button color="primary" size="sm">Small</Button>
                </StateMatrix>
                <StateMatrix label="Medium button" includeLoading>
                  <Button color="primary" size="md">Medium</Button>
                </StateMatrix>
              </Group>
            </Section>

            {/* ── Form Inputs ── */}
            <Section id="form" title="Form Inputs">
              <style>{stateStyles}</style>
              <Group label="Text Input">
                <StateMatrix label="Text input — all states">
                  <TextInput placeholder="Enter value..." className="w-64" />
                </StateMatrix>
              </Group>
              <Group label="Select">
                <StateMatrix label="Select — all states">
                  <Select className="w-48">
                    <option>Option Alpha</option>
                    <option>Option Beta</option>
                    <option>Option Gamma</option>
                  </Select>
                </StateMatrix>
              </Group>
              <Group label="Checkbox">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Unchecked</p>
                    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))", maxWidth: "500px" }}>
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <Checkbox id="cb-default" />
                          <Label htmlFor="cb-default">Feature</Label>
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">default</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-hover">
                        <div className="flex items-center gap-2">
                          <Checkbox id="cb-hover" />
                          <Label htmlFor="cb-hover">Feature</Label>
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:hover</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-focus">
                        <div className="flex items-center gap-2">
                          <Checkbox id="cb-focus" />
                          <Label htmlFor="cb-focus">Feature</Label>
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:focus</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                          <Checkbox id="cb-checked" defaultChecked />
                          <Label htmlFor="cb-checked">Feature</Label>
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">checked</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-disabled">
                        <div className="flex items-center gap-2">
                          <Checkbox id="cb-disabled" disabled />
                          <Label htmlFor="cb-disabled">Feature</Label>
                        </div>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">disabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Group>
              <Group label="Radio">
                <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))", maxWidth: "500px" }}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Radio id="r-default" name="radio-demo" />
                      <Label htmlFor="r-default">Option</Label>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">default</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 state-focus">
                    <div className="flex items-center gap-2">
                      <Radio id="r-focus" name="radio-demo-2" />
                      <Label htmlFor="r-focus">Option</Label>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:focus</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Radio id="r-checked" name="radio-demo-3" defaultChecked />
                      <Label htmlFor="r-checked">Option</Label>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">checked</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 state-disabled">
                    <div className="flex items-center gap-2">
                      <Radio id="r-disabled" name="radio-demo-4" disabled />
                      <Label htmlFor="r-disabled">Option</Label>
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">disabled</span>
                  </div>
                </div>
              </Group>
              <Group label="Textarea">
                <StateMatrix label="Textarea — all states">
                  <Textarea placeholder="Enter notes..." className="w-64" rows={3} />
                </StateMatrix>
              </Group>
              <Group label="Helper Text &amp; Validation">
                <div className="flex flex-col gap-4 w-full max-w-sm">
                  <Variant label="Default (muted)">
                    <div className="w-64">
                      <TextInput placeholder="Username" />
                      <HelperText>Must be 3–20 alphanumeric characters.</HelperText>
                    </div>
                  </Variant>
                  <Variant label="Success">
                    <div className="w-64">
                      <TextInput placeholder="Email" defaultValue="user@example.com" />
                      <HelperText color="success">▌ Email verified.</HelperText>
                    </div>
                  </Variant>
                  <Variant label="Failure">
                    <div className="w-64">
                      <TextInput placeholder="Password" defaultValue="abc" />
                      <HelperText color="failure">▌ Password too short — 8 chars minimum.</HelperText>
                    </div>
                  </Variant>
                  <Variant label="Warning">
                    <div className="w-64">
                      <TextInput placeholder="API key" />
                      <HelperText color="warning">▌ Key expires in 3 days.</HelperText>
                    </div>
                  </Variant>
                  <Variant label="Info">
                    <div className="w-64">
                      <TextInput placeholder="Slug" />
                      <HelperText color="info">Used in public URLs — lowercase only.</HelperText>
                    </div>
                  </Variant>
                </div>
              </Group>
              <Group label="Datepicker">
                <Variant label="Default">
                  <Datepicker className="w-64" />
                </Variant>
                <Variant label="With today &amp; clear">
                  <Datepicker showTodayButton showClearButton className="w-64" />
                </Variant>
              </Group>
              <Group label="Toggle Switch">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Off state</p>
                    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", maxWidth: "500px" }}>
                      <div className="flex flex-col items-center gap-2">
                        <ToggleSwitch label="Notifications" />
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">default</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-focus">
                        <ToggleSwitch label="Notifications" />
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:focus</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-disabled">
                        <ToggleSwitch label="Notifications" disabled />
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">disabled</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">On state</p>
                    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", maxWidth: "500px" }}>
                      <div className="flex flex-col items-center gap-2">
                        <ToggleSwitch label="Auto-save" checked />
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">default</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-focus">
                        <ToggleSwitch label="Auto-save" checked />
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:focus</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-disabled">
                        <ToggleSwitch label="Auto-save" checked disabled />
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">disabled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Group>
            </Section>

            {/* ── Badges ── */}
            <Section id="badges" title="Badges">
              <Group label="Colors">
                <Variant label="Default">
                  <Badge color="default">Default</Badge>
                </Variant>
                <Variant label="Success">
                  <Badge color="success">Success</Badge>
                </Variant>
                <Variant label="Failure">
                  <Badge color="failure">Failure</Badge>
                </Variant>
                <Variant label="Warning">
                  <Badge color="warning">Warning</Badge>
                </Variant>
                <Variant label="Info">
                  <Badge color="info">Info</Badge>
                </Variant>
              </Group>
            </Section>

            {/* ── Alerts ── */}
            <Section id="alerts" title="Alerts">
              <Group label="Colors">
                <div className="flex flex-col gap-3 w-full max-w-lg">
                  <Alert color="default">System alert — default style.</Alert>
                  <Alert color="success">Operation completed successfully.</Alert>
                  <Alert color="warning">Caution: check before proceeding.</Alert>
                  <Alert color="failure">Error: operation failed.</Alert>
                  <Alert color="info">Info: additional context here.</Alert>
                </div>
              </Group>
              <Group label="Dismissible">
                <div className="flex flex-col gap-3 w-full max-w-lg">
                  <Alert color="default" onDismiss={() => {}}>Dismissible default alert with close button.</Alert>
                  <Alert color="success" onDismiss={() => {}}>Success alert that can be dismissed.</Alert>
                  <Alert color="failure" onDismiss={() => {}}>Error alert with dismiss action.</Alert>
                </div>
              </Group>
            </Section>

            {/* ── Cards ── */}
            <Section id="cards" title="Cards">
              <Group label="Variants">
                <Card className="w-72">
                  <div className="px-4 py-4 border-b-2 border-retro-fg">
                    <h5 className="font-mono text-sm font-bold uppercase tracking-wider">
                      Simple Card
                    </h5>
                  </div>
                  <div className="px-4 pt-3 pb-4">
                    <p className="font-mono text-[11px] text-retro-muted-fg leading-relaxed">
                      Card description with some supporting text content here.
                    </p>
                  </div>
                </Card>
                <Card className="w-72">
                  <div className="px-4 py-4 border-b-2 border-retro-fg">
                    <h5 className="font-mono text-sm font-bold uppercase tracking-wider">
                      With Actions
                    </h5>
                  </div>
                  <div className="px-4 pt-3 pb-4 flex-1">
                    <p className="font-mono text-[11px] text-retro-muted-fg leading-relaxed">
                      Card with action buttons in the footer area.
                    </p>
                  </div>
                  <div className="px-4 pb-4 flex justify-end gap-2">
                    <Button color="primary" size="sm">Save</Button>
                    <Button color="ghost" size="sm">Cancel</Button>
                  </div>
                </Card>
              </Group>
            </Section>

            {/* ── Table ── */}
            <Section id="table" title="Table">
              <style>{stateStyles}</style>
              <Group label="Default">
                <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Header cells show default state; rows support hover state</p>
                <div className="w-full">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>Entity</TableHeadCell>
                        <TableHeadCell>Type</TableHeadCell>
                        <TableHeadCell>Status</TableHeadCell>
                        <TableHeadCell>Updated</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { name: "user_profiles", type: "table", status: "Active", date: "2026-02-18" },
                        { name: "auth_tokens", type: "table", status: "Active", date: "2026-02-17" },
                        { name: "get_user_by_id", type: "function", status: "Deprecated", date: "2026-01-30" },
                        { name: "session_logs", type: "view", status: "Active", date: "2026-02-01" },
                      ].map((row) => (
                        <TableRow key={row.name}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>
                            <Badge
                              color={row.status === "Active" ? "success" : "warning"}
                            >
                              {row.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{row.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Group>
              <Group label="Hoverable rows">
                <div className="w-full">
                  <Table hoverable>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>Function</TableHeadCell>
                        <TableHeadCell>Returns</TableHeadCell>
                        <TableHeadCell>Complexity</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>calculate_total</TableCell>
                        <TableCell>numeric</TableCell>
                        <TableCell>O(n)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>find_user</TableCell>
                        <TableCell>record</TableCell>
                        <TableCell>O(1)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>merge_records</TableCell>
                        <TableCell>void</TableCell>
                        <TableCell>O(n log n)</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Group>
              <Group label="Sortable columns">
                <div className="w-full">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>
                          <button className="flex items-center gap-1 hover:text-retro-bg/70">
                            Name <span className="text-[9px]">▲</span>
                          </button>
                        </TableHeadCell>
                        <TableHeadCell>
                          <button className="flex items-center gap-1 hover:text-retro-bg/70">
                            Size <span className="text-[9px] opacity-40">▼</span>
                          </button>
                        </TableHeadCell>
                        <TableHeadCell>Modified</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow><TableCell>alpha.sql</TableCell><TableCell>14 KB</TableCell><TableCell>2026-04-30</TableCell></TableRow>
                      <TableRow><TableCell>beta.sql</TableCell><TableCell>2 KB</TableCell><TableCell>2026-04-28</TableCell></TableRow>
                      <TableRow><TableCell>schema.json</TableCell><TableCell>88 KB</TableCell><TableCell>2026-04-01</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Group>
              <Group label="Striped rows">
                <div className="w-full">
                  <Table striped>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>Column</TableHeadCell>
                        <TableHeadCell>Type</TableHeadCell>
                        <TableHeadCell>Nullable</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>uuid</TableCell>
                        <TableCell>false</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>username</TableCell>
                        <TableCell>varchar(50)</TableCell>
                        <TableCell>false</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>email</TableCell>
                        <TableCell>varchar(100)</TableCell>
                        <TableCell>true</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>created_at</TableCell>
                        <TableCell>timestamp</TableCell>
                        <TableCell>false</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Group>
            </Section>

            {/* ── Navigation ── */}
            <Section id="navigation" title="Navigation">
              <Group label="Breadcrumb">
                <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Links support hover and active states</p>
                <Breadcrumb>
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem href="#">Database</BreadcrumbItem>
                  <BreadcrumbItem>Schema</BreadcrumbItem>
                </Breadcrumb>
              </Group>
              <Group label="Tabs — Segmented (default) — states">
                <div className="w-full max-w-2xl">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Active tab + inactive tab states</p>
                  <Tabs variant="default">
                    <TabItem title="Schema">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Schema panel — column definitions, types, constraints.
                      </p>
                    </TabItem>
                    <TabItem title="Data">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Data panel — row browser and query results.
                      </p>
                    </TabItem>
                    <TabItem title="Indexes">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Index definitions and performance hints.
                      </p>
                    </TabItem>
                  </Tabs>
                </div>
              </Group>
              <Group label="Tabs — Underline (orange indicator)">
                <div className="w-full max-w-lg">
                  <Tabs variant="underline">
                    <TabItem title="Overview">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Overview — summary metrics and recent activity.
                      </p>
                    </TabItem>
                    <TabItem title="Nodes">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Node list — 14 entities in the graph.
                      </p>
                    </TabItem>
                    <TabItem title="Logs">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Log stream — real-time event output.
                      </p>
                    </TabItem>
                    <TabItem title="Settings">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Connection settings and auth config.
                      </p>
                    </TabItem>
                  </Tabs>
                </div>
              </Group>
              <Group label="Tabs — Pills (sub-filters)">
                <div className="w-full max-w-lg">
                  <Tabs variant="pills">
                    <TabItem title="▌ All">
                      <p className="font-mono text-[11px] text-retro-fg">
                        All items — 177 total.
                      </p>
                    </TabItem>
                    <TabItem title="Draft">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Draft items — unpublished.
                      </p>
                    </TabItem>
                    <TabItem title="Published">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Published items — live.
                      </p>
                    </TabItem>
                    <TabItem title="Failed">
                      <p className="font-mono text-[11px] text-retro-fg">
                        Failed — needs attention.
                      </p>
                    </TabItem>
                  </Tabs>
                </div>
              </Group>
              <Group label="TopNav">
                <div className="w-full max-w-2xl">
                  <Navbar>
                    <NavbarCollapse>
                      <NavbarLink href="#">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                        Add Node
                      </NavbarLink>
                      <NavbarLink href="#">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        Add Connection
                      </NavbarLink>
                      <NavbarLink href="#">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </NavbarLink>
                      <NavbarLink href="#">
                        <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                        </svg>
                        Delete
                      </NavbarLink>
                    </NavbarCollapse>
                  </Navbar>
                </div>
              </Group>
            </Section>

            {/* ── Overlays ── */}
            <Section id="overlays" title="Overlays">
              <Group label="Tooltip">
                <Variant label="Hover trigger">
                  <Tooltip content="Helpful context — shown on hover.">
                    <Button color="outline">Hover for tooltip</Button>
                  </Tooltip>
                </Variant>
              </Group>
              <Group label="Modal">
                <div className="flex flex-col gap-6 w-full">
                  {/* Static design preview */}
                  <div className="w-[520px] rounded-md border-2 border-retro-fg overflow-hidden">
                    <div className="flex items-center justify-between bg-retro-fg px-4 py-[14px]">
                      <span className="font-mono text-[13px] font-bold uppercase tracking-[2px] text-retro-bg">
                        Modal Title
                      </span>
                      <svg className="w-4 h-4 text-retro-bg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="h-px bg-retro-fg" />
                    <div className="px-4 py-4 bg-retro-bg/70">
                      <p className="font-mono text-[11px] leading-[1.6] text-retro-fg">
                        Modal body content goes here. Describe the action
                        <br />or information that requires user attention.
                      </p>
                    </div>
                    <div className="h-px bg-retro-border" />
                    <div className="flex items-center justify-end gap-2 px-4 py-3 bg-retro-bg/70">
                      <Button color="ghost">Cancel</Button>
                      <Button color="primary">Confirm</Button>
                    </div>
                  </div>
                  {/* Interactive triggers */}
                  <div className="flex gap-3">
                    <Variant label="Small">
                      <Button color="outline" size="sm" onClick={() => setOpenSmallModal(true)}>
                        Small
                      </Button>
                    </Variant>
                    <Variant label="Medium (default)">
                      <Button color="primary" onClick={() => setOpenModal(true)}>
                        Medium
                      </Button>
                    </Variant>
                    <Variant label="Large">
                      <Button color="outline" size="sm" onClick={() => setOpenLargeModal(true)}>
                        Large
                      </Button>
                    </Variant>
                  </div>
                </div>
              </Group>
              
              {/* Small Modal */}
              <Modal show={openSmallModal} onClose={() => setOpenSmallModal(false)} size="sm">
                <ModalHeader>Quick Confirm</ModalHeader>
                <ModalBody>
                  <p className="font-mono text-[11px] text-retro-fg">
                    Small modal for brief confirmations.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" size="sm" onClick={() => setOpenSmallModal(false)}>
                    OK
                  </Button>
                </ModalFooter>
              </Modal>
              
              {/* Medium Modal */}
              <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
                <ModalHeader>Confirm Action</ModalHeader>
                <ModalBody>
                  <p className="font-mono text-[11px] text-retro-fg">
                    Are you sure you want to proceed? This action cannot be undone.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="destructive" onClick={() => setOpenModal(false)}>
                    Confirm
                  </Button>
                  <Button color="ghost" onClick={() => setOpenModal(false)}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
              
              {/* Large Modal */}
              <Modal show={openLargeModal} onClose={() => setOpenLargeModal(false)} size="lg">
                <ModalHeader>Detailed Information</ModalHeader>
                <ModalBody>
                  <p className="font-mono text-[11px] text-retro-fg mb-3">
                    Large modal for complex forms or detailed content. This provides more space for comprehensive information.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="field1">Field One</Label>
                      <TextInput id="field1" placeholder="Enter data..." className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="field2">Field Two</Label>
                      <TextInput id="field2" placeholder="Additional input..." className="mt-1" />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => setOpenLargeModal(false)}>
                    Save
                  </Button>
                  <Button color="ghost" onClick={() => setOpenLargeModal(false)}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </Section>

            {/* ── Feedback ── */}
            <Section id="feedback" title="Feedback">
              <Group label="Spinner">
                <div className="flex flex-col gap-6">
                  <Variant label="Ring · linear">
                    <div className="flex gap-4 items-center">
                      <Spinner size="sm" />
                      <Spinner size="md" />
                      <Spinner size="lg" />
                      <Spinner size="xl" />
                    </div>
                  </Variant>
                  <Variant label="Block · steps(8)">
                    <div className="flex gap-4 items-center">
                      <SpinnerBlock size="sm" />
                      <SpinnerBlock size="md" />
                      <SpinnerBlock size="lg" />
                      <SpinnerBlock size="xl" />
                    </div>
                  </Variant>
                  <Variant label="Dots · steps(2)">
                    <SpinnerDots />
                  </Variant>
                </div>
              </Group>
              <Group label="Progress">
                <div className="flex flex-col gap-6 w-full max-w-lg">
                  <Variant label="Determinate (60%)">
                    <Progress progress={60} className="w-64" />
                  </Variant>
                  <Variant label="With label (75%)">
                    <Progress progress={75} textLabel="Uploading" className="w-64" />
                  </Variant>
                  <Variant label="Sizes">
                    <div className="flex flex-col gap-2 w-64">
                      <Progress progress={60} size="sm" />
                      <Progress progress={60} size="md" />
                      <Progress progress={60} size="lg" />
                    </div>
                  </Variant>
                  <Variant label="Indeterminate (loading)">
                    <div className="state-loading w-64 h-2.5 border-2 border-retro-fg rounded-sm bg-retro-secondary progress-indeterminate">
                      <div className="progress-indeterminate-bar bg-retro-orange rounded-sm" />
                    </div>
                  </Variant>
                </div>
              </Group>
              <Group label="Toast">
                <div className="flex flex-col gap-3 max-w-sm">
                  <Toast className="border-retro-success">
                    <div className="flex gap-2.5 p-2.5 w-full items-start">
                      <div className="w-5 h-5 shrink-0 border-2 border-retro-success flex items-center justify-center font-bold text-[10px] text-retro-success rounded-sm">✓</div>
                      <div className="flex-1 font-mono text-[11px]">
                        <b className="block text-[10px] uppercase tracking-wider text-retro-success mb-0.5">Success</b>
                        Node "USER" saved to graph.
                        <div className="h-0.5 bg-retro-success mt-2 w-3/5" />
                      </div>
                      <button className="text-retro-muted-fg hover:text-retro-fg text-[13px] leading-none">×</button>
                    </div>
                  </Toast>
                  <Toast className="border-retro-info">
                    <div className="flex gap-2.5 p-2.5 w-full items-start">
                      <div className="w-5 h-5 shrink-0 border-2 border-retro-info flex items-center justify-center font-bold text-[10px] text-retro-info rounded-sm">i</div>
                      <div className="flex-1 font-mono text-[11px]">
                        <b className="block text-[10px] uppercase tracking-wider text-retro-info mb-0.5">Info</b>
                        3 channels marked as read.
                        <div className="h-0.5 bg-retro-info mt-2 w-2/5" />
                      </div>
                      <button className="text-retro-muted-fg hover:text-retro-fg text-[13px] leading-none">×</button>
                    </div>
                  </Toast>
                  <Toast className="border-retro-warning">
                    <div className="flex gap-2.5 p-2.5 w-full items-start">
                      <div className="w-5 h-5 shrink-0 border-2 border-retro-warning flex items-center justify-center font-bold text-[10px] text-retro-warning-text rounded-sm">!</div>
                      <div className="flex-1 font-mono text-[11px]">
                        <b className="block text-[10px] uppercase tracking-wider text-retro-warning-text mb-0.5">Warning</b>
                        Connection unstable. Retrying…
                        <div className="h-0.5 bg-retro-warning mt-2 w-4/5" />
                      </div>
                      <button className="text-retro-muted-fg hover:text-retro-fg text-[13px] leading-none">×</button>
                    </div>
                  </Toast>
                  <Toast className="border-retro-error">
                    <div className="flex gap-2.5 p-2.5 w-full items-start">
                      <div className="w-5 h-5 shrink-0 border-2 border-retro-error flex items-center justify-center font-bold text-[10px] text-retro-error rounded-sm">✕</div>
                      <div className="flex-1 font-mono text-[11px]">
                        <b className="block text-[10px] uppercase tracking-wider text-retro-error mb-0.5">Error</b>
                        Save failed: techno-babel coupling.
                        <div className="h-0.5 bg-retro-error mt-2 w-full" />
                      </div>
                      <button className="text-retro-muted-fg hover:text-retro-fg text-[13px] leading-none">×</button>
                    </div>
                  </Toast>
                </div>
              </Group>
              <Group label="Rating">
                <div className="flex gap-6">
                  <Variant label="3 stars">
                    <Rating>
                      <RatingStar filled />
                      <RatingStar filled />
                      <RatingStar filled />
                      <RatingStar />
                      <RatingStar />
                    </Rating>
                  </Variant>
                  <Variant label="5 stars">
                    <Rating>
                      <RatingStar filled />
                      <RatingStar filled />
                      <RatingStar filled />
                      <RatingStar filled />
                      <RatingStar filled />
                    </Rating>
                  </Variant>
                </div>
              </Group>
            </Section>

            {/* ── Content ── */}
            <Section id="content" title="Content">
              <Group label="Accordion">
                <div className="w-full max-w-2xl">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Collapsed and expanded states</p>
                  <Accordion>
                    <AccordionPanel>
                      <AccordionTitle>What is Hesperus?</AccordionTitle>
                      <AccordionContent>
                        <p className="font-mono text-[11px] text-retro-fg">
                          A retro-styled design system built with Flowbite React and Tailwind CSS.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                      <AccordionTitle>How do I customize it?</AccordionTitle>
                      <AccordionContent>
                        <p className="font-mono text-[11px] text-retro-fg">
                          Modify the theme object in theme.js and adjust CSS custom properties in index.css.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                      <AccordionTitle>Is dark mode supported?</AccordionTitle>
                      <AccordionContent>
                        <p className="font-mono text-[11px] text-retro-fg">
                          Yes! Toggle the dark mode using the navbar button.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>
                </div>
              </Group>
              <Group label="Timeline">
                <div className="w-full max-w-2xl">
                  <Timeline>
                    <TimelineItem>
                      <TimelinePoint />
                      <TimelineContent>
                        <TimelineTime className="font-mono text-[9px] uppercase">February 2026</TimelineTime>
                        <TimelineTitle className="font-mono text-[11px] font-bold uppercase tracking-wider">Project Initialization</TimelineTitle>
                        <TimelineBody className="font-mono text-[11px] text-retro-muted-fg">
                          Set up design system with Flowbite React and Tailwind.
                        </TimelineBody>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelinePoint />
                      <TimelineContent>
                        <TimelineTime className="font-mono text-[9px] uppercase">March 2026</TimelineTime>
                        <TimelineTitle className="font-mono text-[11px] font-bold uppercase tracking-wider">Component Library</TimelineTitle>
                        <TimelineBody className="font-mono text-[11px] text-retro-muted-fg">
                          Built comprehensive themed components.
                        </TimelineBody>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelinePoint />
                      <TimelineContent>
                        <TimelineTime className="font-mono text-[9px] uppercase">Future</TimelineTime>
                        <TimelineTitle className="font-mono text-[11px] font-bold uppercase tracking-wider">Expansion</TimelineTitle>
                        <TimelineBody className="font-mono text-[11px] text-retro-muted-fg">
                          Add more components and features.
                        </TimelineBody>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </Group>
              <Group label="List">
                <div className="flex gap-8">
                  <Variant label="Unordered">
                    <List>
                      <ListItem>Component system</ListItem>
                      <ListItem>Theme customization</ListItem>
                      <ListItem>Dark mode support</ListItem>
                    </List>
                  </Variant>
                  <Variant label="Ordered">
                    <List ordered>
                      <ListItem>Install dependencies</ListItem>
                      <ListItem>Configure theme</ListItem>
                      <ListItem>Build components</ListItem>
                    </List>
                  </Variant>
                </div>
              </Group>
              <Group label="Avatar">
                <div className="flex gap-4 items-center flex-wrap">
                  <Variant label="Small">
                    <Avatar size="sm" />
                  </Variant>
                  <Variant label="Medium">
                    <Avatar size="md" />
                  </Variant>
                  <Variant label="Large">
                    <Avatar size="lg" />
                  </Variant>
                  <Variant label="Online">
                    <Avatar size="md" status="online" statusPosition="bottom-right" />
                  </Variant>
                  <Variant label="Away">
                    <Avatar size="md" status="away" statusPosition="bottom-right" />
                  </Variant>
                  <Variant label="Busy">
                    <Avatar size="md" status="busy" statusPosition="bottom-right" />
                  </Variant>
                  <Variant label="Group">
                    <AvatarGroup>
                      <Avatar size="sm" stacked />
                      <Avatar size="sm" stacked />
                      <Avatar size="sm" stacked />
                      <AvatarGroupCounter total={12} href="#" />
                    </AvatarGroup>
                  </Variant>
                </div>
              </Group>
              <Group label="Elements">
                <div className="flex flex-col gap-6 w-full max-w-2xl">
                  <Variant label="Horizontal rule">
                    <div className="w-full">
                      <p className="font-mono text-[11px] mb-3">Content above</p>
                      <HR />
                      <p className="font-mono text-[11px] mt-3">Content below</p>
                    </div>
                  </Variant>
                  <Variant label="Blockquote">
                    <Blockquote className="font-mono text-[11px]">
                      "Design is not just what it looks like and feels like. Design is how it works."
                    </Blockquote>
                  </Variant>
                  <Variant label="Keyboard shortcut">
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span>Save:</span>
                      <Kbd>Ctrl</Kbd>
                      <span>+</span>
                      <Kbd>S</Kbd>
                    </div>
                  </Variant>
                </div>
              </Group>
            </Section>

            {/* ── Layout ── */}
            <Section id="layout" title="Layout">
              <Group label="Button Group">
                <div className="flex flex-col gap-4">
                  <Variant label="Default">
                    <ButtonGroup>
                      <Button color="primary">Left</Button>
                      <Button color="primary">Middle</Button>
                      <Button color="primary">Right</Button>
                    </ButtonGroup>
                  </Variant>
                  <Variant label="Outline">
                    <ButtonGroup>
                      <Button color="outline">One</Button>
                      <Button color="outline">Two</Button>
                      <Button color="outline">Three</Button>
                      <Button color="outline">Four</Button>
                    </ButtonGroup>
                  </Variant>
                </div>
              </Group>
              <Group label="Pagination">
                <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Default, active (current page), and disabled states</p>
                <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
              </Group>
              <Group label="Dropdown">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Trigger button states (closed)</p>
                    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))", maxWidth: "400px" }}>
                      <div className="flex flex-col items-center gap-2">
                        <Dropdown label="Actions" color="outline">
                          <DropdownItem>Edit</DropdownItem>
                        </Dropdown>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">default</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-hover">
                        <Dropdown label="Actions" color="outline">
                          <DropdownItem>Edit</DropdownItem>
                        </Dropdown>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:hover</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 state-focus">
                        <Dropdown label="Actions" color="outline">
                          <DropdownItem>Edit</DropdownItem>
                        </Dropdown>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-retro-muted-fg">:focus</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-3">Dropdown with menu items</p>
                    <Dropdown label="Actions" color="outline">
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Duplicate</DropdownItem>
                      <DropdownDivider />
                      <DropdownItem>Archive</DropdownItem>
                      <DropdownItem disabled>Export (unavailable)</DropdownItem>
                      <DropdownDivider />
                      <DropdownItem>Delete</DropdownItem>
                    </Dropdown>
                  </div>
                </div>
              </Group>
              <Group label="Sidebar">
                <div className="flex flex-col gap-3">
                  <Button color="ghost" size="sm" className="w-fit" onClick={() => setSidebarCollapsed(c => !c)}>
                    {sidebarCollapsed ? "▶ Expand" : "◀ Collapse"}
                  </Button>
                  <div className={sidebarCollapsed ? "w-16" : "w-56"}>
                    <Sidebar collapsed={sidebarCollapsed}>
                      <SidebarItems>
                        <SidebarItemGroup>
                          <SidebarItem
                            href="#"
                            icon={() => <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>}
                          >
                            Dashboard
                          </SidebarItem>
                          <SidebarItem
                            href="#"
                            icon={() => <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M3 12h18M3 17h18"/></svg>}
                          >
                            Projects
                          </SidebarItem>
                          <SidebarItem
                            href="#"
                            active
                            icon={() => <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>}
                          >
                            Graph
                          </SidebarItem>
                          <SidebarItem
                            href="#"
                            icon={() => <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z"/></svg>}
                          >
                            Settings
                          </SidebarItem>
                        </SidebarItemGroup>
                      </SidebarItems>
                    </Sidebar>
                  </div>
                </div>
              </Group>
              <Group label="Footer">
                <div className="w-full">
                  <Footer>
                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="font-mono text-[11px] font-bold uppercase">Hesperus</span>
                        <FooterLinkGroup>
                          <FooterLink href="#">About</FooterLink>
                          <FooterLink href="#">Contact</FooterLink>
                          <FooterLink href="#">Terms</FooterLink>
                        </FooterLinkGroup>
                      </div>
                    </div>
                  </Footer>
                </div>
              </Group>
              <Group label="Banner">
                <div className="w-full max-w-2xl">
                  <Banner>
                    <div className="flex items-center gap-4">
                      <p className="font-mono text-[11px]">
                        New version available! Update to get the latest features.
                      </p>
                      <Button size="sm" color="primary">Update</Button>
                    </div>
                  </Banner>
                </div>
              </Group>
              <Group label="Popover">
                <Popover content={<div className="font-mono text-[11px] p-2">Popover content here</div>}>
                  <Button color="outline">Hover for popover</Button>
                </Popover>
              </Group>
              <Group label="File Input">
                <Variant label="Default">
                  <FileInputRetro />
                </Variant>
                <Variant label="Multi-select">
                  <FileInputRetro multiple accept="image/*" />
                </Variant>
                <Variant label="Disabled">
                  <FileInputRetro disabled />
                </Variant>
              </Group>
            </Section>

            {/* ── Drawer ── */}
            <Section id="drawer" title="Drawer">
              <Group label="Side-sheet triggers">
                <div className="flex gap-3">
                  <Variant label="Left">
                    <Button color="outline" onClick={() => setOpenDrawer(true)}>
                      Open Left
                    </Button>
                  </Variant>
                  <Variant label="Right">
                    <Button color="outline" onClick={() => setOpenDrawerRight(true)}>
                      Open Right
                    </Button>
                  </Variant>
                </div>
              </Group>

              {/* Left drawer */}
              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} position="left">
                <DrawerHeader
                  title="Navigation"
                  className="bg-retro-fg px-4 py-3"
                />
                <DrawerItems>
                  <nav className="space-y-0.5">
                    {["Dashboard", "Projects", "Graph", "Chat", "Settings"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="flex items-center gap-2 px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-retro-fg hover:bg-retro-secondary rounded-sm"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-6 pt-4 border-t border-retro-fg">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg mb-2">
                      // Version
                    </p>
                    <p className="font-mono text-[11px] text-retro-fg">v0.1.0</p>
                  </div>
                </DrawerItems>
              </Drawer>

              {/* Right drawer */}
              <Drawer open={openDrawerRight} onClose={() => setOpenDrawerRight(false)} position="right">
                <DrawerHeader
                  title="Node Details"
                  className="bg-retro-fg px-4 py-3"
                />
                <DrawerItems>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg mb-1">Entity</p>
                      <p className="font-mono text-[11px] font-bold uppercase text-retro-fg">User</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg mb-1">Connections</p>
                      <p className="font-mono text-[11px] text-retro-fg">3 outbound · 1 inbound</p>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg mb-1">Attributes</p>
                      <div className="space-y-1">
                        {["id", "name", "email", "created_at"].map((a) => (
                          <p key={a} className="font-mono text-[11px] text-retro-fg border-b border-retro-border pb-1">{a}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button color="primary" size="sm" onClick={() => setOpenDrawerRight(false)}>Save</Button>
                    <Button color="ghost" size="sm" onClick={() => setOpenDrawerRight(false)}>Cancel</Button>
                  </div>
                </DrawerItems>
              </Drawer>
            </Section>

            {/* ── Page States ── */}
            <Section id="page-states" title="Page States">
              <Group label="Empty state">
                <div className="w-full max-w-lg">
                  <div className="flex flex-col items-center justify-center gap-4 rounded-md border-2 border-dashed border-retro-border bg-retro-bg py-16 px-8 text-center">
                    <div className="w-10 h-10 border-2 border-retro-muted-fg flex items-center justify-center rounded-sm text-retro-muted-fg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                        <polyline points="13 2 13 9 20 9" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-retro-fg mb-1">No items yet</p>
                      <p className="font-mono text-[9px] text-retro-muted-fg">Create your first item to get started.</p>
                    </div>
                    <Button color="primary" size="sm">New Item</Button>
                  </div>
                </div>
              </Group>
              <Group label="Loading state">
                <div className="w-full max-w-lg">
                  <div className="flex flex-col items-center justify-center gap-4 rounded-md border-2 border-retro-fg bg-retro-bg py-16 px-8">
                    <SpinnerBlock size="lg" />
                    <div className="text-center">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-retro-fg mb-1">Loading…</p>
                      <p className="font-mono text-[9px] text-retro-muted-fg">Fetching data from the server.</p>
                    </div>
                  </div>
                </div>
              </Group>
              <Group label="Error state">
                <div className="w-full max-w-lg">
                  <div className="flex flex-col items-center justify-center gap-4 rounded-md border-2 border-retro-error bg-retro-bg py-16 px-8 text-center">
                    <div className="w-10 h-10 border-2 border-retro-error flex items-center justify-center rounded-sm text-retro-error font-bold text-lg">
                      ✕
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-retro-error mb-1">Something went wrong</p>
                      <p className="font-mono text-[9px] text-retro-muted-fg">Could not load data. Check your connection and try again.</p>
                    </div>
                    <Button color="destructive" size="sm">Retry</Button>
                  </div>
                </div>
              </Group>
            </Section>

            {/* ── Graph Nodes ── */}
            <Section id="graph" title="Graph Nodes">
              <Group label="Entity nodes">
                <GraphNode
                  title="User"
                  attributes={["id", "name", "email", "created_at"]}
                />
                <GraphNode
                  title="Order"
                  attributes={["id", "user_id", "total", "status"]}
                  accentColor="orange"
                />
                <GraphNode
                  title="Product"
                  attributes={["id", "name", "price", "sku"]}
                  accentColor="cyan"
                />
                <GraphNode
                  title="Tag"
                  attributes={["id", "label"]}
                  accentColor="purple"
                />
              </Group>
              <Group label="Connection labels">
                <ConnectionLabel label="PURCHASED" colorKey="orange" />
                <ConnectionLabel label="CONTAINS" colorKey="green" />
                <ConnectionLabel label="TAGGED_AS" colorKey="purple" />
                <ConnectionLabel label="FULFILLS" colorKey="blue" />
              </Group>
            </Section>

          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
