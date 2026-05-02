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
  Select,
  Checkbox,
  Radio,
  Label,
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
  Dropdown,
  DropdownItem,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
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
  FileInput,
  Footer,
  FooterLink,
  FooterLinkGroup,
  Banner,
  ToggleSwitch,
} from "flowbite-react";
import { hesperusTheme } from "./theme";
import GraphNode from "./components/GraphNode";
import ConnectionLabel from "./components/ConnectionLabel";

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
  { id: "graph", label: "Graph Nodes" },
];

// ── App ───────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSmallModal, setOpenSmallModal] = useState(false);
  const [openLargeModal, setOpenLargeModal] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <ThemeProvider theme={hesperusTheme}>
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
              <Group label="Variants">
                <Variant label="Primary">
                  <Button color="primary">Primary</Button>
                </Variant>
                <Variant label="Outline">
                  <Button color="outline">Outline</Button>
                </Variant>
                <Variant label="Ghost">
                  <Button color="ghost">Ghost</Button>
                </Variant>
                <Variant label="Destructive">
                  <Button color="destructive">Destructive</Button>
                </Variant>
              </Group>
              <Group label="Sizes">
                <Variant label="Small">
                  <Button color="primary" size="sm">Small</Button>
                </Variant>
                <Variant label="Medium">
                  <Button color="primary" size="md">Medium</Button>
                </Variant>
              </Group>
              <Group label="Full width">
                <div className="w-80">
                  <Button color="primary" className="w-full">Full Width</Button>
                </div>
              </Group>
            </Section>

            {/* ── Form Inputs ── */}
            <Section id="form" title="Form Inputs">
              <Group label="Text Input">
                <Variant label="Placeholder">
                  <TextInput placeholder="Enter value..." className="w-64" />
                </Variant>
                <Variant label="With value">
                  <TextInput defaultValue="Existing value" className="w-64" />
                </Variant>
                <Variant label="Disabled">
                  <TextInput placeholder="Disabled input" disabled className="w-64" />
                </Variant>
              </Group>
              <Group label="Select">
                <Variant label="Default">
                  <Select className="w-48">
                    <option>Option Alpha</option>
                    <option>Option Beta</option>
                    <option>Option Gamma</option>
                  </Select>
                </Variant>
                <Variant label="Disabled">
                  <Select disabled className="w-48">
                    <option>Disabled select</option>
                  </Select>
                </Variant>
              </Group>
              <Group label="Checkbox & Radio">
                <Variant label="Unchecked">
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb1" />
                    <Label htmlFor="cb1">Enable feature</Label>
                  </div>
                </Variant>
                <Variant label="Checked">
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb2" defaultChecked />
                    <Label htmlFor="cb2">Active state</Label>
                  </div>
                </Variant>
                <Variant label="Radio group">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Radio id="r1" name="demo" defaultChecked />
                      <Label htmlFor="r1">Option A</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio id="r2" name="demo" />
                      <Label htmlFor="r2">Option B</Label>
                    </div>
                  </div>
                </Variant>
              </Group>
              <Group label="Toggle Switch">
                <Variant label="Off">
                  <ToggleSwitch label="Notifications" />
                </Variant>
                <Variant label="On">
                  <ToggleSwitch label="Auto-save" checked />
                </Variant>
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
              <Group label="Default">
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
                <Breadcrumb>
                  <BreadcrumbItem href="#">Home</BreadcrumbItem>
                  <BreadcrumbItem href="#">Database</BreadcrumbItem>
                  <BreadcrumbItem>Schema</BreadcrumbItem>
                </Breadcrumb>
              </Group>
              <Group label="Tabs">
                <div className="w-full max-w-lg">
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
                <div className="flex gap-6">
                  <Variant label="Small">
                    <Spinner size="sm" />
                  </Variant>
                  <Variant label="Medium">
                    <Spinner size="md" />
                  </Variant>
                  <Variant label="Large">
                    <Spinner size="xl" />
                  </Variant>
                </div>
              </Group>
              <Group label="Progress">
                <div className="flex flex-col gap-4 w-full max-w-lg">
                  <Variant label="Default (45%)">
                    <Progress progress={45} />
                  </Variant>
                  <Variant label="With label">
                    <Progress progress={75} textLabel="Progress" />
                  </Variant>
                  <Variant label="Sizes">
                    <div className="flex flex-col gap-2 w-full">
                      <Progress progress={60} size="sm" />
                      <Progress progress={60} size="md" />
                      <Progress progress={60} size="lg" />
                    </div>
                  </Variant>
                </div>
              </Group>
              <Group label="Toast">
                <Toast>
                  <div className="font-mono text-[11px]">
                    Operation completed successfully!
                  </div>
                </Toast>
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
                <div className="flex gap-4 items-center">
                  <Variant label="Small">
                    <Avatar size="sm" />
                  </Variant>
                  <Variant label="Medium">
                    <Avatar size="md" />
                  </Variant>
                  <Variant label="Large">
                    <Avatar size="lg" />
                  </Variant>
                  <Variant label="Extra large">
                    <Avatar size="xl" />
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
                <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
              </Group>
              <Group label="Dropdown">
                <Dropdown label="Actions">
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownItem>Archive</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </Dropdown>
              </Group>
              <Group label="Sidebar">
                <div className="w-64">
                  <Sidebar>
                    <SidebarItemGroup>
                      <SidebarItem href="#">Dashboard</SidebarItem>
                      <SidebarItem href="#">Projects</SidebarItem>
                      <SidebarItem href="#">Settings</SidebarItem>
                    </SidebarItemGroup>
                  </Sidebar>
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
                <div className="w-80">
                  <FileInput />
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
