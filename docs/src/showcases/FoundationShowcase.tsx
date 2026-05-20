import { PageHeader, ShowcaseSection, DemoGrid } from '../components/ShowcaseSection'

const mono = 'var(--font-mono, "Space Mono", monospace)'
const fg1 = 'var(--canvas-fg-1)'
const fg2 = 'var(--canvas-fg-2)'
const border = 'var(--canvas-border)'

// Renders a live swatch backed by a CSS custom property — updates in dark mode automatically
function LiveSwatch({ label, token, hex }: { label: string; token: string; hex?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ width: '100%', height: 48, background: `var(${token})`, border: `2px solid var(--canvas-fg-1)`, borderRadius: 3 }} />
      <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: fg1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      {hex && <div style={{ fontFamily: mono, fontSize: 10, color: fg2 }}>{hex}</div>}
      <div style={{ fontFamily: mono, fontSize: 10, color: fg2 }}>{token}</div>
    </div>
  )
}

// Fixed-color swatch (semantic/accent colors don't shift in dark mode)
function FixedSwatch({ label, hex, token }: { label: string; hex: string; token: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ width: '100%', height: 48, background: hex, border: `2px solid var(--canvas-fg-1)`, borderRadius: 3 }} />
      <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: fg1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
      <div style={{ fontFamily: mono, fontSize: 10, color: fg2 }}>{hex}</div>
      <div style={{ fontFamily: mono, fontSize: 10, color: fg2 }}>{token}</div>
    </div>
  )
}

export function ColorsShowcase() {
  return (
    <div>
      <PageHeader
        name="Colors"
        description="Two-surface palette: warm beige paper (light) and charcoal terminal (dark). Semantic status colors are fixed — they never shift between modes. Never use raw hex — always reference tokens."
      />

      <ShowcaseSection label="Canvas surface — live (changes with dark mode)">
        <DemoGrid cols={4} gap={12}>
          <LiveSwatch label="Background" token="--canvas-bg" hex="light: #efeed0 / dark: #222627" />
          <LiveSwatch label="Primary text" token="--canvas-fg-1" hex="light: #2c2416 / dark: #d4ccaa" />
          <LiveSwatch label="Muted text" token="--canvas-fg-2" hex="light: #8a7e6a / dark: #887766" />
          <LiveSwatch label="Divider" token="--canvas-border" hex="light: #b8a878 / dark: #3d3d3d" />
        </DemoGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Canvas surface — light mode values">
        <DemoGrid cols={4} gap={12}>
          <FixedSwatch label="Background" hex="#efeed0" token="--canvas-bg (light)" />
          <FixedSwatch label="Primary text" hex="#2c2416" token="--canvas-fg-1 (light)" />
          <FixedSwatch label="Muted text" hex="#8a7e6a" token="--canvas-fg-2 (light)" />
          <FixedSwatch label="Divider" hex="#b8a878" token="--canvas-border (light)" />
        </DemoGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Canvas surface — dark mode values">
        <DemoGrid cols={4} gap={12}>
          <FixedSwatch label="Background" hex="#222627" token="--canvas-bg (dark)" />
          <FixedSwatch label="Primary text" hex="#d4ccaa" token="--canvas-fg-1 (dark)" />
          <FixedSwatch label="Muted text" hex="#887766" token="--canvas-fg-2 (dark)" />
          <FixedSwatch label="Divider" hex="#3d3d3d" token="--canvas-border (dark)" />
        </DemoGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Semantic status — fixed (same in both modes)">
        <DemoGrid cols={4} gap={12}>
          <FixedSwatch label="Error" hex="#AA3322" token="--color-error" />
          <FixedSwatch label="Success" hex="#5C7A28" token="--color-success" />
          <FixedSwatch label="Warning" hex="#C4A232" token="--color-warning" />
          <FixedSwatch label="Info" hex="#5566AA" token="--color-info" />
        </DemoGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Accent colors — fixed (graph nodes, badges)">
        <DemoGrid cols={4} gap={12}>
          <FixedSwatch label="Orange" hex="#CC6622" token="--color-accent-orange" />
          <FixedSwatch label="Purple" hex="#7744AA" token="--color-accent-purple" />
          <FixedSwatch label="Cyan" hex="#2E8B8B" token="--color-accent-cyan" />
          <FixedSwatch label="Blue" hex="#5566AA" token="--color-accent-blue" />
        </DemoGrid>
        <div style={{ marginTop: 12 }}>
          <DemoGrid cols={3} gap={12}>
            <FixedSwatch label="Green" hex="#5C7A28" token="--color-accent-green" />
            <FixedSwatch label="Yellow" hex="#C4A232" token="--color-accent-yellow" />
            <FixedSwatch label="Red" hex="#AA3322" token="--color-accent-red" />
          </DemoGrid>
        </div>
      </ShowcaseSection>

      <ShowcaseSection label="Interaction states">
        <DemoGrid cols={3} gap={12}>
          <LiveSwatch label="Hover surface" token="--hover-bg" hex="light: #f2ecda / dark: #3a3428" />
          <FixedSwatch label="Focus ring" hex="#CC6622" token="--focus-ring-color" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ width: '100%', height: 48, background: 'var(--canvas-bg)', border: `2px solid var(--canvas-fg-1)`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 40, height: 24, background: 'var(--canvas-bg)', border: '2px solid var(--focus-ring-color)', borderRadius: 3, boxShadow: 'var(--focus-ring)' }} />
            </div>
            <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: fg1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Focus ring</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: fg2 }}>2px orange offset ring</div>
          </div>
        </DemoGrid>
      </ShowcaseSection>

      <ShowcaseSection label="Color usage rules">
        <div style={{ fontFamily: mono, fontSize: 11, color: fg1, lineHeight: 2 }}>
          <div>— Body text, borders → <span style={{ color: 'var(--canvas-fg-1)' }}>--canvas-fg-1</span> (2px borders for structure)</div>
          <div>— Labels, placeholders → <span style={{ color: 'var(--canvas-fg-2)' }}>--canvas-fg-2</span> (muted / secondary)</div>
          <div>— Surfaces → <span style={{ color: 'var(--canvas-fg-2)' }}>--canvas-bg</span> / <span style={{ color: 'var(--canvas-fg-2)' }}>--hover-bg</span> (no tinting)</div>
          <div>— Soft dividers → <span style={{ color: 'var(--canvas-border)' }}>--canvas-border</span> (1px, inset 2px from outer border)</div>
          <div>— Error / danger → <span style={{ color: '#AA3322' }}>--color-error</span> (brick red, fixed)</div>
          <div>— Success / ok → <span style={{ color: '#5C7A28' }}>--color-success</span> (olive, fixed)</div>
          <div>— No raw hex. No shadows. No tints.</div>
        </div>
      </ShowcaseSection>
    </div>
  )
}

export function TypographyShowcase() {
  const scale = [
    { token: '--text-32', px: 32, weight: 700, label: 'Display heading', sample: 'SYSTEM STATUS', upper: true },
    { token: '--text-20', px: 20, weight: 700, label: 'Page heading', sample: 'SCHEMA EDITOR', upper: true },
    { token: '--text-14', px: 14, weight: 700, label: 'Section heading', sample: 'GRAPH NODES', upper: true },
    { token: '--text-13', px: 13, weight: 400, label: 'Body text', sample: 'life.organism · cls_4f3a · 3 connections' },
    { token: '--text-11', px: 11, weight: 400, label: 'Body (default)', sample: 'life.organism · cls_4f3a · 3 connections' },
    { token: '--text-10', px: 10, weight: 400, label: 'Label / eyebrow', sample: 'SCHEMA · 128 NODES', upper: true },
    { token: '--text-9', px: 9, weight: 400, label: 'Timestamp / meta', sample: '2026-05-20 · 04:41 UTC', upper: false },
  ]

  return (
    <div>
      <PageHeader
        name="Typography"
        description="Space Mono only — everywhere. One typeface, two weights (400/700). Uppercase headings with 0.05em tracking. Never use sans-serif or any other font."
      />
      <ShowcaseSection label="Type scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {scale.map(s => (
            <div key={s.token} style={{ display: 'flex', alignItems: 'baseline', gap: 20, paddingBottom: 12, paddingTop: 12, borderBottom: `1px solid ${border}` }}>
              <div style={{ width: 180, fontFamily: mono, fontSize: 10, color: fg2, flexShrink: 0 }}>
                <div style={{ textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                <div style={{ color: fg2, marginTop: 2 }}>{s.token} · {s.weight}</div>
              </div>
              <div style={{
                fontFamily: mono,
                fontSize: s.px,
                fontWeight: s.weight,
                color: fg1,
                lineHeight: 1.3,
                textTransform: s.upper ? 'uppercase' : 'none',
                letterSpacing: s.upper ? '0.05em' : '0',
                flex: 1,
              }}>
                {s.sample}
              </div>
              <div style={{ fontFamily: mono, fontSize: 10, color: fg2, marginLeft: 'auto', flexShrink: 0 }}>{s.px}px</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection label="Weights">
        <div style={{ display: 'flex', gap: 32 }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 20, fontWeight: 700, color: fg1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>BOLD 700</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: fg2, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Headings, buttons, labels</div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 20, fontWeight: 400, color: fg1 }}>Regular 400</div>
            <div style={{ fontFamily: mono, fontSize: 10, color: fg2, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Body, data, descriptions</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection label="Rules">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: mono, fontSize: 11, color: fg1, lineHeight: 1.7 }}>
          <div>— One font: Space Mono. Always. No Inter, no JetBrains, no system-ui.</div>
          <div>— Headings uppercase, <span style={{ letterSpacing: '0.05em' }}>0.05em letter-spacing</span>, weight 700.</div>
          <div>— Body 11px normal weight. Labels 10px uppercase. Timestamps 9px muted.</div>
          <div>— No italic. No medium (500) weight — only 400 and 700.</div>
          <div>— Data columns: <span style={{ fontFamily: mono }}>font-feature-settings: "tnum"</span> for tabular figures.</div>
        </div>
      </ShowcaseSection>
    </div>
  )
}

export function SpacingShowcase() {
  const steps = [2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 64]

  return (
    <div>
      <PageHeader name="Spacing" description="4px base grid. Use multiples of 4 for all layout dimensions. 8px for compact gaps, 16px for sections, 24–32px for canvas padding." />
      <ShowcaseSection label="Scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {steps.map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 80, fontFamily: mono, fontSize: 11, color: fg2, textAlign: 'right' }}>{s}px</div>
              <div style={{ height: 16, background: 'var(--canvas-fg-1)', opacity: 0.6, borderRadius: 2, width: s }} />
            </div>
          ))}
        </div>
      </ShowcaseSection>
      <ShowcaseSection label="Common usage">
        <div style={{ fontFamily: mono, fontSize: 11, color: fg1, lineHeight: 2 }}>
          <div>4px — icon-to-label gap, chip internal padding</div>
          <div>6px — button group gap, tight row spacing</div>
          <div>8px — standard gap for inline elements</div>
          <div>12px — input internal padding, card header padding-y</div>
          <div>16px — section spacing, form field gap</div>
          <div>20–24px — card padding, panel body padding</div>
          <div>22px 26px 32px — canvas inner padding (top / sides / bottom)</div>
        </div>
      </ShowcaseSection>
    </div>
  )
}

export function RadiusShowcase() {
  const radii = [
    { label: '--radius-sm', value: '3px', px: 3, usage: 'Buttons (sm), chips' },
    { label: '--radius-default / --radius-md', value: '4px', px: 4, usage: 'Buttons, inputs, badges' },
    { label: '--radius-lg', value: '6px', px: 6, usage: 'Cards, panels, dropdowns' },
    { label: 'max', value: '6px', px: 6, usage: 'Nothing larger than 6px' },
  ]

  return (
    <div>
      <PageHeader name="Radius" description="Square corners only. 3–6px max. No pills, no circles, no large radii — ever. Hesperus components have hard rectangular corners by design." />
      <ShowcaseSection label="Scale">
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {radii.map(r => (
            <div key={r.label} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <div style={{
                width: 80,
                height: 48,
                background: 'var(--canvas-bg)',
                border: `2px solid var(--canvas-fg-1)`,
                borderRadius: r.px,
              }} />
              <div style={{ fontFamily: mono, fontSize: 11, fontWeight: 700, color: fg1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.value}</div>
              <div style={{ fontFamily: mono, fontSize: 10, color: fg2, maxWidth: 120 }}>{r.label}</div>
              <div style={{ fontFamily: mono, fontSize: 10, color: fg2, maxWidth: 120 }}>{r.usage}</div>
            </div>
          ))}
        </div>
      </ShowcaseSection>
      <ShowcaseSection label="Rules">
        <div style={{ fontFamily: mono, fontSize: 11, color: fg1, lineHeight: 2 }}>
          <div>— No border-radius above 6px. No pill shapes (border-radius: 9999px).</div>
          <div>— All interactive components use --radius-sm (3px) or --radius-md (4px).</div>
          <div>— Panels and containers use --radius-lg (6px).</div>
          <div>— The CRT aesthetic requires hard, rectangular corners — rounded elements break the terminal feel.</div>
        </div>
      </ShowcaseSection>
    </div>
  )
}
