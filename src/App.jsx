import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
  Avatar,
  AvatarGroup,
  AvatarGroupCounter,
  Banner,
  Blockquote,
  Datepicker,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  FileInput,
  Footer,
  FooterLink,
  FooterLinkGroup,
  HR,
  Kbd,
  List,
  ListItem,
  Pagination,
  Popover,
  Progress,
  Rating,
  Spinner,
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
  Tooltip,
} from "./components";
import GraphNode from "./components/GraphNode";
import ConnectionLabel from "./components/ConnectionLabel";
import SpinnerBlock from "./components/SpinnerBlock";
import SpinnerDots from "./components/SpinnerDots";
import FileInputRetro from "./components/FileInputRetro";
import { StateMatrix } from "./components/StateMatrix";

// ── Avatar placeholder helper ─────────────────────────────────────

function createAvatarPlaceholder(initials) {
  const colors = ["#E8D5B9", "#A89968", "#7A6F5E", "#5C4B3D"];
  const color = colors[initials.charCodeAt(0) % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="${color}"/>
    <text x="50" y="50" font-family="monospace" font-size="32" font-weight="bold" fill="#000" text-anchor="middle" dominant-baseline="middle" text-transform="uppercase">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

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
        <span className="font-mono text-[9px] uppercase tracking-wider text-retro-muted-fg">
          {label}
        </span>
      )}
    </div>
  );
}

// ── Simple Button component using Hesperus CSS ────────────────────

function Button({ children, disabled, loading, variant = "primary", ...props }) {
  const baseClasses = "font-mono text-[11px] font-bold uppercase tracking-widest h-10 px-4 rounded-md border-2 border-retro-fg bg-retro-bg text-retro-fg cursor-pointer transition-colors duration-150 inline-flex items-center gap-2 hover:bg-retro-fg hover:text-retro-bg focus:ring-2 focus:ring-offset-2 focus:ring-retro-orange";
  const disabledClasses = disabled ? "opacity-40 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseClasses} ${disabledClasses}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner size="sm" />}
      {children}
    </button>
  );
}

// ── Text input component ────────────────────────────────────────────

function TextInput({ placeholder, disabled, type = "text", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="font-mono text-[11px] px-3 py-2 border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-md focus:ring-2 focus:ring-retro-orange focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      {...props}
    />
  );
}

// ── Select/Dropdown input ───────────────────────────────────────────

function Select({ options, disabled, placeholder, ...props }) {
  return (
    <select
      disabled={disabled}
      className="font-mono text-[11px] px-3 py-2 border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-md focus:ring-2 focus:ring-retro-orange focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options?.map((opt, i) => (
        <option key={i} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  );
}

// ── Checkbox component ──────────────────────────────────────────────

function Checkbox({ label, disabled, ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
      <input
        type="checkbox"
        disabled={disabled}
        className="w-4 h-4 border-2 border-retro-fg bg-retro-bg cursor-pointer rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
        {...props}
      />
      {label && (
        <span className="font-mono text-[11px] uppercase tracking-wider">
          {label}
        </span>
      )}
    </label>
  );
}

// ── Radio component ────────────────────────────────────────────────

function Radio({ label, disabled, ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
      <input
        type="radio"
        disabled={disabled}
        className="w-4 h-4 border-2 border-retro-fg bg-retro-bg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        {...props}
      />
      {label && (
        <span className="font-mono text-[11px] uppercase tracking-wider">
          {label}
        </span>
      )}
    </label>
  );
}

// ── Card component ─────────────────────────────────────────────────

function Card({ title, children, header, footer }) {
  return (
    <div className="bg-retro-bg border-2 border-retro-fg rounded-md overflow-hidden">
      {title && (
        <div className="border-b-2 border-retro-fg bg-retro-fg px-4 py-2">
          <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-retro-bg">
            {title}
          </h3>
        </div>
      )}
      {header && (
        <div className="border-b-2 border-retro-fg bg-retro-fg px-4 py-2">
          {header}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="border-t-2 border-retro-fg bg-retro-secondary px-4 py-2">
          {footer}
        </div>
      )}
    </div>
  );
}

// ── Modal component ────────────────────────────────────────────────

function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-retro-bg/70" onClick={onClose} />
      <div className="relative bg-retro-bg border-2 border-retro-fg rounded-md max-w-md w-full mx-4">
        <div className="border-b-2 border-retro-fg bg-retro-fg px-4 py-2">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-widest text-retro-bg">
            {title}
          </h2>
        </div>
        <div className="p-4">{children}</div>
        <div className="border-t-2 border-retro-fg flex justify-end gap-2 p-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

// ── Badge component ────────────────────────────────────────────────

function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-retro-fg text-retro-bg",
    error: "bg-retro-error text-retro-bg",
    success: "bg-retro-success text-retro-bg",
    warning: "bg-retro-warning text-retro-bg",
    info: "bg-retro-info text-retro-bg",
  };

  return (
    <span className={`font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${variants[variant]}`}>
      {children}
    </span>
  );
}

// ── Alert component ────────────────────────────────────────────────

function Alert({ title, children, variant = "info" }) {
  const variants = {
    error: "border-retro-error text-retro-error",
    success: "border-retro-success text-retro-success",
    warning: "border-retro-warning text-retro-warning",
    info: "border-retro-info text-retro-info",
  };

  return (
    <div className={`border-2 ${variants[variant]} bg-retro-bg rounded-md p-3`}>
      {title && (
        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest mb-1">
          {title}
        </h4>
      )}
      <p className="font-mono text-[11px] leading-relaxed">{children}</p>
    </div>
  );
}

// ── Navbar component ────────────────────────────────────────────────

function Navbar({ children }) {
  return (
    <nav className="bg-retro-bg border-b-2 border-retro-fg px-4 py-3">
      <div className="flex items-center gap-4">
        {children}
      </div>
    </nav>
  );
}

// ── Table component ────────────────────────────────────────────────

function Table({ columns, rows }) {
  return (
    <div className="border-2 border-retro-fg bg-retro-bg rounded-md overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-retro-fg text-retro-bg">
            {columns.map((col, i) => (
              <th
                key={i}
                className="font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-2 text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-retro-border hover:bg-retro-secondary transition-colors"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="font-mono text-[11px] px-4 py-2 text-retro-fg"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Sidebar nav ───────────────────────────────────────────────────

const NAV_SECTIONS = [
  { id: "buttons", label: "Buttons" },
  { id: "form", label: "Form Inputs" },
  { id: "selects", label: "Selects & Dropdowns" },
  { id: "checkboxes", label: "Checkboxes & Radio" },
  { id: "badges", label: "Badges" },
  { id: "alerts", label: "Alerts" },
  { id: "cards", label: "Cards & Modals" },
  { id: "table", label: "Table" },
  { id: "accordion", label: "Accordion" },
  { id: "avatar", label: "Avatar" },
  { id: "banner", label: "Banner" },
  { id: "blockquote", label: "Blockquote" },
  { id: "datepicker", label: "Datepicker" },
  { id: "file-input", label: "File Input" },
  { id: "footer", label: "Footer" },
  { id: "hr", label: "Horizontal Rule" },
  { id: "kbd", label: "Keyboard Key" },
  { id: "list", label: "List" },
  { id: "pagination", label: "Pagination" },
  { id: "popover", label: "Popover" },
  { id: "progress", label: "Progress" },
  { id: "rating", label: "Rating" },
  { id: "spinner", label: "Spinner" },
  { id: "timeline", label: "Timeline" },
  { id: "tooltip", label: "Tooltip" },
  { id: "graph", label: "Graph Nodes" },
];

// ── App ───────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [ratings, setRatings] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-retro-bg text-retro-fg bg-grid">
      {/* ── Header ── */}
      <Navbar>
        <span className="font-mono text-[13px] font-bold uppercase tracking-widest">
          Hesperus
        </span>
        <span className="text-[13px] opacity-40">//</span>
        <span className="font-mono text-[10px] uppercase tracking-wider opacity-70">
          Component Browser
        </span>
        <div className="flex-1" />
        <button
          onClick={() => setDark(!dark)}
          className="font-mono text-[10px] uppercase tracking-wider px-3 py-2 border-2 border-retro-fg hover:bg-retro-fg hover:text-retro-bg transition-colors rounded-md"
        >
          {dark ? "☀ Light" : "☾ Dark"}
        </button>
      </Navbar>

      <div className="flex pt-0">
        {/* ── Sidebar ── */}
        <nav className="fixed left-3 top-16 bottom-3 w-44 bg-retro-bg border-2 border-retro-fg rounded-lg overflow-y-auto py-8 px-5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-retro-muted-fg mb-4">
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

          {/* ── Buttons ── */}
          <Section id="buttons" title="Buttons">
            <Group label="Default states">
              <Variant label="Default">
                <Button>Click me</Button>
              </Variant>
              <Variant label="Hover">
                <Button className="bg-retro-fg text-retro-bg">Hover state</Button>
              </Variant>
              <Variant label="Disabled">
                <Button disabled>Disabled</Button>
              </Variant>
              <Variant label="Loading">
                <Button loading>Loading...</Button>
              </Variant>
              <Variant label="Focus">
                <Button className="ring-2 ring-retro-orange ring-offset-2">Focus</Button>
              </Variant>
            </Group>
          </Section>

          {/* ── Form Inputs ── */}
          <Section id="form" title="Form Inputs">
            <Group label="Text inputs">
              <Variant label="Default">
                <TextInput placeholder="Enter text..." />
              </Variant>
              <Variant label="Disabled">
                <TextInput placeholder="Disabled input" disabled />
              </Variant>
              <Variant label="With value">
                <TextInput value="Sample text" readOnly />
              </Variant>
              <Variant label="Focus">
                <TextInput placeholder="Focus state" className="ring-2 ring-retro-orange ring-offset-2" />
              </Variant>
            </Group>
            <Group label="Textarea">
              <Variant label="Default">
                <textarea
                  placeholder="Enter text..."
                  className="font-mono text-[11px] px-3 py-2 border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-md focus:ring-2 focus:ring-retro-orange focus:outline-none w-full"
                  rows="4"
                />
              </Variant>
              <Variant label="Disabled">
                <textarea
                  placeholder="Disabled textarea"
                  disabled
                  className="font-mono text-[11px] px-3 py-2 border-2 border-retro-fg bg-retro-bg text-retro-fg rounded-md disabled:opacity-40 disabled:cursor-not-allowed w-full"
                  rows="4"
                />
              </Variant>
            </Group>
          </Section>

          {/* ── Selects & Dropdowns ── */}
          <Section id="selects" title="Selects & Dropdowns">
            <Group label="Select inputs">
              <Variant label="Default">
                <Select placeholder="Choose option..." options={["Option 1", "Option 2", "Option 3"]} />
              </Variant>
              <Variant label="Disabled">
                <Select placeholder="Choose option..." options={["Option 1", "Option 2"]} disabled />
              </Variant>
            </Group>
            <Group label="Dropdown component">
              <Variant label="Default">
                <Dropdown trigger="Menu">
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
              </Variant>
              <Variant label="Disabled">
                <div className="opacity-40 pointer-events-none">
                  <Dropdown trigger="Menu">
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Item 3</DropdownItem>
                  </Dropdown>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2 inline-block">
                  <Dropdown trigger="Menu">
                    <DropdownItem>Item 1</DropdownItem>
                    <DropdownItem>Item 2</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Item 3</DropdownItem>
                  </Dropdown>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Checkboxes & Radio ── */}
          <Section id="checkboxes" title="Checkboxes & Radio">
            <Group label="Checkboxes">
              <Variant label="Default">
                <Checkbox label="Unchecked" />
              </Variant>
              <Variant label="Checked">
                <Checkbox label="Checked" defaultChecked />
              </Variant>
              <Variant label="Disabled">
                <Checkbox label="Disabled" disabled />
              </Variant>
              <Variant label="Disabled checked">
                <Checkbox label="Disabled checked" disabled defaultChecked />
              </Variant>
            </Group>
            <Group label="Radio buttons">
              <Variant label="Default">
                <div className="flex gap-4">
                  <Radio name="demo" label="Option 1" />
                  <Radio name="demo" label="Option 2" />
                </div>
              </Variant>
              <Variant label="Selected">
                <div className="flex gap-4">
                  <Radio name="demo2" label="Option 1" defaultChecked />
                  <Radio name="demo2" label="Option 2" />
                </div>
              </Variant>
              <Variant label="Disabled">
                <div className="flex gap-4">
                  <Radio name="demo3" label="Option 1" disabled />
                  <Radio name="demo3" label="Option 2" disabled defaultChecked />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Badges ── */}
          <Section id="badges" title="Badges">
            <Group label="Badge variants">
              <Variant label="Default">
                <Badge>Default</Badge>
              </Variant>
              <Variant label="Error">
                <Badge variant="error">Error</Badge>
              </Variant>
              <Variant label="Success">
                <Badge variant="success">Success</Badge>
              </Variant>
              <Variant label="Warning">
                <Badge variant="warning">Warning</Badge>
              </Variant>
              <Variant label="Info">
                <Badge variant="info">Info</Badge>
              </Variant>
            </Group>
            <Group label="Badge states">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Badge>Disabled</Badge>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-sm inline-block">
                  <Badge>Focused</Badge>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Alerts ── */}
          <Section id="alerts" title="Alerts">
            <Group label="Alert variants">
              <Variant label="Info">
                <Alert title="Information" variant="info">
                  This is an informational alert message
                </Alert>
              </Variant>
              <Variant label="Error">
                <Alert title="Error" variant="error">
                  An error has occurred
                </Alert>
              </Variant>
              <Variant label="Success">
                <Alert title="Success" variant="success">
                  Operation completed successfully
                </Alert>
              </Variant>
              <Variant label="Warning">
                <Alert title="Warning" variant="warning">
                  Please be careful with this action
                </Alert>
              </Variant>
            </Group>
            <Group label="Alert states">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Alert title="Disabled Alert" variant="info">
                    This alert is disabled
                  </Alert>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                  <Alert title="Focused Alert" variant="info">
                    This alert has focus
                  </Alert>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Cards & Modals ── */}
          <Section id="cards" title="Cards & Modals">
            <Group label="Cards">
              <Variant label="Default">
                <Card title="Card Title">
                  This is a basic card with some content
                </Card>
              </Variant>
              <Variant label="Card with footer">
                <Card
                  title="Card with footer"
                  footer={<Button>Action</Button>}
                >
                  Card content with a footer
                </Card>
              </Variant>
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Card title="Disabled Card">
                    This card is disabled
                  </Card>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                  <Card title="Focused Card">
                    This card has focus
                  </Card>
                </div>
              </Variant>
            </Group>
            <Group label="Modals">
              <Variant label="Modal">
                <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
                <Modal open={openModal} onClose={() => setOpenModal(false)} title="Modal Title">
                  <p className="mb-4">This is a modal dialog window.</p>
                  <p>You can put any content inside it.</p>
                </Modal>
              </Variant>
            </Group>
          </Section>

          {/* ── Table ── */}
          <Section id="table" title="Table">
            <Group label="Default">
              <Table
                columns={["Name", "Email", "Status"]}
                rows={[
                  ["Alice", "alice@example.com", "Active"],
                  ["Bob", "bob@example.com", "Inactive"],
                  ["Charlie", "charlie@example.com", "Active"],
                ]}
              />
            </Group>
            <Group label="Disabled">
              <div className="opacity-40">
                <Table
                  columns={["Name", "Email", "Status"]}
                  rows={[
                    ["Alice", "alice@example.com", "Active"],
                    ["Bob", "bob@example.com", "Inactive"],
                  ]}
                />
              </div>
            </Group>
            <Group label="Focus">
              <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md overflow-hidden">
                <Table
                  columns={["Name", "Email", "Status"]}
                  rows={[
                    ["Alice", "alice@example.com", "Active"],
                    ["Bob", "bob@example.com", "Inactive"],
                  ]}
                />
              </div>
            </Group>
          </Section>

          {/* ── Accordion ── */}
          <Section id="accordion" title="Accordion">
            <Group label="Default">
              <Accordion>
                <AccordionPanel>
                  <AccordionTitle>Panel 1</AccordionTitle>
                  <AccordionContent>
                    Content for panel 1
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                  <AccordionTitle>Panel 2</AccordionTitle>
                  <AccordionContent>
                    Content for panel 2
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </Group>
            <Group label="Disabled">
              <div className="opacity-40">
                <Accordion>
                  <AccordionPanel>
                    <AccordionTitle>Panel 1</AccordionTitle>
                    <AccordionContent>
                      Content for panel 1
                    </AccordionContent>
                  </AccordionPanel>
                  <AccordionPanel>
                    <AccordionTitle>Panel 2</AccordionTitle>
                    <AccordionContent>
                      Content for panel 2
                    </AccordionContent>
                  </AccordionPanel>
                </Accordion>
              </div>
            </Group>
            <Group label="Focus">
              <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                <Accordion>
                  <AccordionPanel>
                    <AccordionTitle>Panel 1</AccordionTitle>
                    <AccordionContent>
                      Content for panel 1
                    </AccordionContent>
                  </AccordionPanel>
                  <AccordionPanel>
                    <AccordionTitle>Panel 2</AccordionTitle>
                    <AccordionContent>
                      Content for panel 2
                    </AccordionContent>
                  </AccordionPanel>
                </Accordion>
              </div>
            </Group>
          </Section>

          {/* ── Avatar ── */}
          <Section id="avatar" title="Avatar">
            <Group label="Avatar sizes">
              <Variant label="Default">
                <Avatar
                  alt="avatar"
                  img={createAvatarPlaceholder("AC")}
                />
              </Variant>
              <Variant label="With label">
                <div className="flex items-center gap-2">
                  <Avatar
                    alt="avatar"
                    img={createAvatarPlaceholder("AC")}
                  />
                  <span className="font-mono text-[11px]">User</span>
                </div>
              </Variant>
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Avatar
                    alt="avatar"
                    img={createAvatarPlaceholder("AC")}
                  />
                </div>
              </Variant>
            </Group>
            <Group label="Avatar group">
              <Variant label="Group">
                <AvatarGroup>
                  <Avatar alt="avatar" img={createAvatarPlaceholder("AC")} />
                  <Avatar alt="avatar" img={createAvatarPlaceholder("BD")} />
                  <Avatar alt="avatar" img={createAvatarPlaceholder("CE")} />
                </AvatarGroup>
              </Variant>
              <Variant label="Group Disabled">
                <div className="opacity-40">
                  <AvatarGroup>
                    <Avatar alt="avatar" img={createAvatarPlaceholder("AC")} />
                    <Avatar alt="avatar" img={createAvatarPlaceholder("BD")} />
                    <Avatar alt="avatar" img={createAvatarPlaceholder("CE")} />
                  </AvatarGroup>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Banner ── */}
          <Section id="banner" title="Banner">
            <Group label="Default">
              <Variant label="Banner">
                <Banner>
                  Important announcement
                </Banner>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Banner>
                    Disabled banner
                  </Banner>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                  <Banner>
                    Focused banner
                  </Banner>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Blockquote ── */}
          <Section id="blockquote" title="Blockquote">
            <Group label="Default">
              <Variant label="Blockquote">
                <Blockquote>
                  This is a blockquote with some important information
                </Blockquote>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Blockquote>
                    Disabled blockquote
                  </Blockquote>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                  <Blockquote>
                    Focused blockquote
                  </Blockquote>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Datepicker ── */}
          <Section id="datepicker" title="Datepicker">
            <Group label="States">
              <Variant label="Default">
                <Datepicker />
              </Variant>
              <Variant label="Disabled">
                <Datepicker disabled />
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md inline-block">
                  <Datepicker />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── File Input ── */}
          <Section id="file-input" title="File Input">
            <Group label="States">
              <Variant label="Default">
                <FileInput />
              </Variant>
              <Variant label="Disabled">
                <FileInput disabled />
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md inline-block">
                  <FileInput />
                </div>
              </Variant>
              <Variant label="Retro style">
                <FileInputRetro />
              </Variant>
            </Group>
          </Section>

          {/* ── Footer ── */}
          <Section id="footer" title="Footer">
            <Group label="Default">
              <Variant label="Footer">
                <Footer>
                  <FooterLinkGroup>
                    <FooterLink href="#">Link 1</FooterLink>
                    <FooterLink href="#">Link 2</FooterLink>
                    <FooterLink href="#">Link 3</FooterLink>
                  </FooterLinkGroup>
                </Footer>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Footer>
                    <FooterLinkGroup>
                      <FooterLink href="#">Link 1</FooterLink>
                      <FooterLink href="#">Link 2</FooterLink>
                      <FooterLink href="#">Link 3</FooterLink>
                    </FooterLinkGroup>
                  </Footer>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                  <Footer>
                    <FooterLinkGroup>
                      <FooterLink href="#">Link 1</FooterLink>
                      <FooterLink href="#">Link 2</FooterLink>
                      <FooterLink href="#">Link 3</FooterLink>
                    </FooterLinkGroup>
                  </Footer>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Horizontal Rule ── */}
          <Section id="hr" title="Horizontal Rule">
            <Group label="Default">
              <Variant label="HR">
                <div className="w-44">
                  <HR />
                </div>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40 w-44">
                  <HR />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2 w-44">
                  <HR />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Keyboard Key ── */}
          <Section id="kbd" title="Keyboard Key">
            <Group label="Default">
              <Variant label="Keys">
                <div className="flex gap-2">
                  <Kbd>Ctrl</Kbd>
                  <Kbd>+</Kbd>
                  <Kbd>C</Kbd>
                </div>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40 flex gap-2">
                  <Kbd>Ctrl</Kbd>
                  <Kbd>+</Kbd>
                  <Kbd>C</Kbd>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2">
                  <div className="flex gap-2">
                    <Kbd>Ctrl</Kbd>
                    <Kbd>+</Kbd>
                    <Kbd>C</Kbd>
                  </div>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── List ── */}
          <Section id="list" title="List">
            <Group label="Default">
              <Variant label="Unordered">
                <List>
                  <ListItem>Item 1</ListItem>
                  <ListItem>Item 2</ListItem>
                  <ListItem>Item 3</ListItem>
                </List>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <List>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                  </List>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md">
                  <List>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                  </List>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Pagination ── */}
          <Section id="pagination" title="Pagination">
            <Group label="Default">
              <Variant label="Pagination">
                <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md inline-block p-2">
                  <Pagination currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Popover ── */}
          <Section id="popover" title="Popover">
            <Group label="Default">
              <Variant label="Popover">
                <Popover trigger="Popover">
                  This is a popover with content
                </Popover>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Popover trigger="Popover">
                    Disabled popover
                  </Popover>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md inline-block">
                  <Popover trigger="Popover">
                    Focused popover
                  </Popover>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Progress ── */}
          <Section id="progress" title="Progress">
            <Group label="Progress states">
              <Variant label="0%">
                <Progress value={0} />
              </Variant>
              <Variant label="50%">
                <Progress value={50} />
              </Variant>
              <Variant label="100%">
                <Progress value={100} />
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Progress value={50} />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2">
                  <Progress value={50} />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Rating ── */}
          <Section id="rating" title="Rating">
            <Group label="Default">
              <Variant label="Default (3/5)">
                <Rating value={3} readonly />
              </Variant>
              <Variant label="Full (5/5)">
                <Rating value={5} readonly />
              </Variant>
              <Variant label="Interactive">
                <Rating value={ratings} onChange={(v) => setRatings(v)} />
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Rating value={3} readonly />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2 inline-block">
                  <Rating value={3} readonly />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Spinner ── */}
          <Section id="spinner" title="Spinner">
            <Group label="Spinners">
              <Variant label="Default">
                <Spinner />
              </Variant>
              <Variant label="Large">
                <Spinner size="lg" />
              </Variant>
              <Variant label="Small">
                <Spinner size="sm" />
              </Variant>
            </Group>
            <Group label="Spinner variants">
              <Variant label="Block">
                <SpinnerBlock />
              </Variant>
              <Variant label="Dots">
                <SpinnerDots />
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Spinner />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-full p-2 inline-block">
                  <Spinner />
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Timeline ── */}
          <Section id="timeline" title="Timeline">
            <Group label="Default">
              <Variant label="Timeline">
                <Timeline>
                  <TimelineItem>
                    <TimelinePoint />
                    <TimelineContent>
                      <TimelineTime>2024-01-15</TimelineTime>
                      <TimelineTitle>Event 1</TimelineTitle>
                      <TimelineBody>First event in timeline</TimelineBody>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelinePoint />
                    <TimelineContent>
                      <TimelineTime>2024-01-16</TimelineTime>
                      <TimelineTitle>Event 2</TimelineTitle>
                      <TimelineBody>Second event in timeline</TimelineBody>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Timeline>
                    <TimelineItem>
                      <TimelinePoint />
                      <TimelineContent>
                        <TimelineTime>2024-01-15</TimelineTime>
                        <TimelineTitle>Event 1</TimelineTitle>
                        <TimelineBody>First event</TimelineBody>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2">
                  <Timeline>
                    <TimelineItem>
                      <TimelinePoint />
                      <TimelineContent>
                        <TimelineTime>2024-01-15</TimelineTime>
                        <TimelineTitle>Event 1</TimelineTitle>
                        <TimelineBody>First event</TimelineBody>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Tooltip ── */}
          <Section id="tooltip" title="Tooltip">
            <Group label="Default">
              <Variant label="Tooltip">
                <Tooltip content="Tooltip text">
                  <span className="border-b border-retro-fg cursor-help">Hover me</span>
                </Tooltip>
              </Variant>
            </Group>
            <Group label="States">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <Tooltip content="Tooltip text">
                    <span className="border-b border-retro-fg cursor-help">Hover me</span>
                  </Tooltip>
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md p-2 inline-block">
                  <Tooltip content="Tooltip text">
                    <span className="border-b border-retro-fg cursor-help">Hover me</span>
                  </Tooltip>
                </div>
              </Variant>
            </Group>
          </Section>

          {/* ── Graph Nodes ── */}
          <Section id="graph" title="Graph Nodes">
            <Group label="Node colors">
              <Variant label="Orange">
                <GraphNode
                  title="Node 1"
                  attributes={["Attribute 1", "Attribute 2"]}
                  accentColor="orange"
                />
              </Variant>
              <Variant label="Cyan">
                <GraphNode
                  title="Node 2"
                  attributes={["Attribute 1", "Attribute 2"]}
                  accentColor="cyan"
                />
              </Variant>
              <Variant label="Purple">
                <GraphNode
                  title="Node 3"
                  attributes={["Attribute 1", "Attribute 2"]}
                  accentColor="purple"
                />
              </Variant>
              <Variant label="Green">
                <GraphNode
                  title="Node 4"
                  attributes={["Attribute 1", "Attribute 2"]}
                  accentColor="green"
                />
              </Variant>
              <Variant label="Red">
                <GraphNode
                  title="Node 5"
                  attributes={["Attribute 1", "Attribute 2"]}
                  accentColor="red"
                />
              </Variant>
            </Group>
            <Group label="Connection labels">
              <Variant label="Default">
                <div className="flex items-center gap-4">
                  <div className="w-32 h-12 border-2 border-retro-fg rounded-md" />
                  <ConnectionLabel label="connection" colorKey="orange" />
                  <div className="w-32 h-12 border-2 border-retro-fg rounded-md" />
                </div>
              </Variant>
              <Variant label="Disabled">
                <div className="opacity-40 flex items-center gap-4">
                  <div className="w-32 h-12 border-2 border-retro-fg rounded-md" />
                  <ConnectionLabel label="connection" colorKey="cyan" />
                  <div className="w-32 h-12 border-2 border-retro-fg rounded-md" />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="flex items-center gap-4 ring-2 ring-retro-orange ring-offset-2 rounded-md p-2">
                  <div className="w-32 h-12 border-2 border-retro-fg rounded-md" />
                  <ConnectionLabel label="connection" colorKey="purple" />
                  <div className="w-32 h-12 border-2 border-retro-fg rounded-md" />
                </div>
              </Variant>
            </Group>
            <Group label="State matrix">
              <StateMatrix />
            </Group>
            <Group label="Node states">
              <Variant label="Disabled">
                <div className="opacity-40">
                  <GraphNode
                    title="Node Disabled"
                    attributes={["Attribute 1", "Attribute 2"]}
                    accentColor="orange"
                  />
                </div>
              </Variant>
              <Variant label="Focus">
                <div className="ring-2 ring-retro-orange ring-offset-2 rounded-md inline-block p-2">
                  <GraphNode
                    title="Node Focused"
                    attributes={["Attribute 1", "Attribute 2"]}
                    accentColor="orange"
                  />
                </div>
              </Variant>
            </Group>
          </Section>

        </main>
      </div>
    </div>
  );
}
