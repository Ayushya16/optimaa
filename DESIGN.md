# DESIGN.md: Optimaa Design System

> **Visual Design Specification for Optimaa**
> Formatted according to Google Stitch / VoltAgent DESIGN.md standard.
> Aesthetic Target: Precision Technical SaaS (inspired by Linear, Vercel, Stripe, and Cal.com).

---

## 1. Visual Theme & Atmosphere
- **Aesthetic**: Modern, high-craft, precision engineering interface in crisp light mode.
- **Mood**: Authoritative, mathematically grounded, calm, human-centric, and technically sophisticated.
- **Philosophy**: Avoid unnecessary ornamental clutter. Every visual element (borders, cards, status pills, numbers) represents real software telemetry, solver convergence, or assistive interaction.
- **Density**: Compact-to-comfortable technical density. Generous whitespace around key narrative anchors, dense monospaced precision inside diagnostic cards.

---

## 2. Color Palette & Functional Roles

| Semantic Role | Hex Code | Functional Usage |
|:---|:---|:---|
| **Canvas Primary** | `#FFFFFF` | Core application background and high-elevation cards |
| **Canvas Soft** | `#F8FAFC` | Page background, alternating section canvas |
| **Surface Muted** | `#F1F5F9` | Secondary card fills, interactive button resting states |
| **Surface Card** | `#FFFFFF` | Primary content cards, visualizer panels |
| **Hairline Border** | `#E2E8F0` | Default 1px card and divider borders |
| **Hairline Strong** | `#CBD5E1` | Active borders, hover outlines, table rules |
| **Hairline Subtle** | `#F1F5F9` | Internal table dividers, subtle separators |
| **Ink Obsidian (Primary)** | `#0F172A` | Headings, bold metrics, primary action text |
| **Ink Body (Secondary)** | `#334155` | Explanatory paragraphs, readable copy |
| **Ink Muted** | `#64748B` | Eyebrows, timestamps, secondary labels |
| **Ink Subtle** | `#94A3B8` | Footers, disabled states, inactive dots |
| **Accent Emerald (Signal)**| `#059669` | DWSIM math proof, solver convergence, verified state |
| **Accent Emerald Soft** | `#ECFDF5` | Pill backgrounds, positive badge fills |
| **Accent Amber (Action)** | `#D97706` | Corporate launch flows, mobile keyboard triggers |
| **Accent Amber Soft** | `#FFFBEB` | Warning or review badges, corporate pill fills |
| **Focus / Ring Ring** | `rgba(16, 185, 129, 0.2)` | Interactive focus states, keyboard focus indicators |

---

## 3. Typography Rules

- **Display & Headings**: `Space Grotesk`, sans-serif (Weights: 600, 700). Letter-spacing: `-0.03em` to `-0.02em`. Tight line height (`1.1` to `1.2`).
- **Body & Interface**: `Plus Jakarta Sans`, `-apple-system`, BlinkMacSystemFont, sans-serif (Weights: 400, 500, 600). Letter-spacing: `-0.01em`. Line height: `1.5` to `1.6`.
- **Code & Telemetry**: `JetBrains Mono`, `ui-monospace`, monospace (Weights: 400, 600). Used for math residuals (`< 10^-11`), DWSIM stream properties, CPU/RAM metrics, and file paths.

---

## 4. Elevation & Shadow Architecture

- **Hairline Rule**: Every card has a crisp `1px solid #E2E8F0` border.
- **Elevation 1 (Resting)**: `shadow-[0_1px_3px_0_rgba(15,23,42,0.04),0_1px_2px_-1px_rgba(15,23,42,0.04)]`
- **Elevation 2 (Card)**: `shadow-[0_4px_6px_-1px_rgba(15,23,42,0.04),0_2px_4px_-2px_rgba(15,23,42,0.04)]`
- **Elevation 3 (Hover / Focus)**: `shadow-[0_10px_15px_-3px_rgba(15,23,42,0.06),0_4px_6px_-4px_rgba(15,23,42,0.04)] -translate-y-0.5`
- **Elevation 4 (Dropdown / Modal)**: `shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1),0_8px_10px_-6px_rgba(15,23,42,0.06)]`

---

## 5. Component Patterns & Guidelines

### Buttons & Actions
- **Primary Action (Deck Slideshow)**:
  - Fill: `#059669` (Emerald 600) -> Hover: `#047857` (Emerald 700)
  - Text: White, `Space Grotesk`, bold, uppercase tracking, `text-xs`.
  - Radius: `rounded-xl` (12px).
  - Shadow: Crisp micro-shadow with subtle upward transition (`hover:-translate-y-0.5`).
- **Secondary Action (Dropdown / Tab)**:
  - Fill: `#F8FAFC` -> Hover: `#F1F5F9`
  - Border: `1px solid #E2E8F0` -> Active: `#059669` border.
  - Text: `#0F172A`, font-semibold.

### Cards & Panels
- Background: `#FFFFFF` (Canvas Primary) with `rounded-3xl` (24px) or `rounded-2xl` (16px).
- Border: `border border-slate-200/90`.
- Padding: `p-6` to `p-8`.

### Badges & Eyebrows
- Format: `[PULSE_DOT] [CATEGORY_CODE] // [TITLE]`
- Example: `🟢 USE CASE 01 // DWSIM PROCESS SIMULATION`
- Styling: `text-[11px] font-bold font-['Space_Grotesk'] uppercase tracking-wider px-3 py-1 rounded-full`.

---

## 6. Micro-Interactions
- Smooth CSS transitions (`transition-all duration-200 ease-out`).
- Smooth scrolling with offset padding for sticky header.
- Pulse indicators on live scanning and active telemetry.
- Subtle interactive hover states on all diagram nodes and metric cards.
