import React from 'react'

const mono = 'var(--font-mono, "Space Mono", monospace)'
const fg3 = 'var(--canvas-fg-2)'   // Hesperus has no fg-3; map to muted
const fg2 = 'var(--canvas-fg-2)'
const fg1 = 'var(--canvas-fg-1)'
const border = 'var(--canvas-border)'

export function PageHeader({ name, description }: { name: string; description: string }) {
  return (
    <div style={{ marginBottom: 36, paddingBottom: 24, borderBottom: `1px solid ${border}` }}>
      <h1 style={{ margin: '0 0 8px 0', fontFamily: mono, fontSize: 20, fontWeight: 700, color: fg1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {name}
      </h1>
      <p style={{ margin: 0, fontFamily: mono, fontSize: 11, color: fg2, lineHeight: 1.7 }}>{description}</p>
    </div>
  )
}

export function ShowcaseSection({
  label,
  description,
  children,
}: {
  label: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: fg3, fontWeight: 500, marginBottom: description ? 8 : 14 }}>
        {label}
      </div>
      {description && (
        <p style={{ fontSize: 12, color: fg2, margin: '0 0 14px', lineHeight: 1.65 }}>{description}</p>
      )}
      {children}
    </div>
  )
}

export function DemoRow({ children, gap = 10, wrap = true }: { children: React.ReactNode; gap?: number; wrap?: boolean }) {
  return (
    <div style={{ display: 'flex', gap, flexWrap: wrap ? 'wrap' : 'nowrap', alignItems: 'center' }}>
      {children}
    </div>
  )
}

export function DemoGrid({ children, cols = 3, gap = 12 }: { children: React.ReactNode; cols?: number; gap?: number }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>
      {children}
    </div>
  )
}

export function DemoCard({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div style={{ border: `2px solid ${border}`, borderRadius: 4, overflow: 'hidden' }}>
      {label && (
        <div style={{ padding: '8px 14px', borderBottom: `1px solid ${border}`, fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: fg3 }}>
          {label}
        </div>
      )}
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  )
}

export function PropRow({ name, type, def, description }: { name: string; type: string; def?: string; description: string }) {
  return (
    <tr>
      <td style={{ padding: '7px 12px', fontFamily: mono, fontSize: 12, color: 'var(--color-info)' }}>{name}</td>
      <td style={{ padding: '7px 12px', fontFamily: mono, fontSize: 11, color: fg3 }}>{type}</td>
      <td style={{ padding: '7px 12px', fontFamily: mono, fontSize: 11, color: fg3 }}>{def ?? '—'}</td>
      <td style={{ padding: '7px 12px', fontSize: 12, color: fg2 }}>{description}</td>
    </tr>
  )
}

export function PropsTable({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: `1px solid ${border}`, borderRadius: 6, overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: 'var(--hover-bg)' }}>
            {['Prop', 'Type', 'Default', 'Description'].map(h => (
              <th key={h} style={{ padding: '7px 12px', textAlign: 'left', fontFamily: mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: fg3, fontWeight: 500 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ borderTop: `1px solid ${border}` }}>{children}</tbody>
      </table>
    </div>
  )
}
