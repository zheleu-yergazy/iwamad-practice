# Week 5 — Handoff notes (SIS 2 starter design)

Routes (from the prototype): /, /skills, /contact (current application routes; verify against Figma prototype)
Components → React files:
PostCard → src/components/PostCard.tsx
Button → src/components/ui/Button.tsx
Tag → src/components/ui/Tag.tsx

Button variants → prop: variant = "primary" | "secondary"

PostCard layout: direction column; gap var(--spacing-medium); padding var(--spacing-medium); radius var(--radius-card)

Breakpoint change: phone 1 column, desktop 3 columns; header stacks on phone and aligns horizontally on desktop

Tokens (all ten):
color/primary = #005BB5
color/text = #1D1D1F
color/text-muted = #626267
color/background = #F5F5F7
color/surface = #FFFFFF
color/border = #D1D1D6
spacing/small = 8px
spacing/medium = 16px
radius/card = 20px
radius/button = 999px

Contrast fix: color/text-muted changed from #86868B to #626267 on white. The original is approximately 3.6:1; the replacement is approximately 6.1:1.
