# HOMIVA

## Current State
Full mobile-first React app with ocean blue / golden amber color palette using oklch CSS variables and inline styles throughout. All pages, components, and CSS variables use this blue/amber scheme.

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- Replace ALL colors across the entire app to exactly match the Netlify reference palette:
  - Body background: `linear-gradient(135deg, #f3e8ff, #e9d5ff, #fbcfe8)`
  - Navbar bg: `rgba(255,255,255,0.6)` with backdrop blur
  - Nav link hover/active: `#a855f7`
  - Admin/login button: `linear-gradient(135deg, #a855f7, #ec4899)`
  - Section h2 headings: `#4b2e83` (deep purple)
  - Heading underline accent: `linear-gradient(90deg, #ff4da6, #6a5acd)`
  - Service card titles: `#ec4899` (hot pink)
  - Primary buttons (Book Now, Submit, CTA): `linear-gradient(135deg, #ff4da6, #6a5acd)`
  - Safety/trust section background: `linear-gradient(135deg, #f3e7ff, #ffe4f1)`
  - Booking/light section bg: `#f9f6ff`
  - Step number circles: `linear-gradient(135deg, #6a5acd, #ff4da6)`
  - Safety card headings: `#4b2e83`
  - Footer background: `#1a1a2e` (dark navy)
  - Footer brand heading: `#ff4da6`
  - Footer link hover: `#ff4da6`
  - Logo motto text: `#ff4da6`
  - Splash screen background: `linear-gradient(135deg, #a855f7, #ec4899)`
  - Bottom nav active: `#a855f7`
  - Trust badges strip: `linear-gradient(135deg, #a855f7, #ec4899)`
  - Testimonial avatar bg: `#a855f7`
  - Discount badge bg: `#ec4899`
  - Stats/financials card bg: `#f9f6ff` with border `#e9d5ff`
  - HOMIVA by the numbers gradient: `linear-gradient(135deg, #ff4da6, #6a5acd)`

### Remove
- All oklch color values for the ocean blue / golden amber palette

## Implementation Plan
1. Update `index.css` CSS variables and global styles to the pink/lavender/purple palette
2. Update `Header.tsx` - nav link colors, active state, button gradient
3. Update `Footer.tsx` - background to `#1a1a2e`, heading to `#ff4da6`, link hover
4. Update `BottomNav.tsx` - active state to `#a855f7`
5. Update `SplashScreen.tsx` - background gradient
6. Update `MobileTopBar.tsx` - top bar color
7. Update `HomePage.tsx` - all inline style colors
8. Update remaining pages (`ServiceDetailPage`, `TrustSafetyPage`, `HowItWorksPage`, `InvestorPage`, `MyBookingsPage`) similarly
