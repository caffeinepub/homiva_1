# HOMIVA

## Current State
The app has a desktop-first responsive web layout with a top header, bottom nav (mobile only), and multiple pages: Home, Service Detail, My Bookings, Trust & Safety, How It Works. The design uses teal and orange brand colors. It functions well but feels like a traditional website, not a mobile app.

## Requested Changes (Diff)

### Add
- Splash/onboarding screen on first load (full-screen app-style intro)
- Android-style app shell: no top desktop header on mobile — replace with a compact Android-style top app bar
- Material Design-inspired card elevations, ripple-style tap feedback
- Search bar at top of home screen (Android pattern)
- Floating Action Button (FAB) for quick booking
- Android-style tab chips for service category switching
- App-like animated transitions between screens
- Location pill in top bar (e.g. "Kolkata, 700001")

### Modify
- Bottom navigation: make it taller, more prominent, Android-style with labels and active indicator pill
- Home page: restructure as a mobile app home feed — hero becomes a compact banner, services in horizontal scroll cards, then sections stacked vertically
- Header: on mobile, replace with a compact Android top app bar (location + search + avatar); keep desktop header for wide screens
- All cards: increase border-radius, add shadow elevation, make touch targets larger
- Typography: scale up for mobile readability
- Color usage: teal primary, orange accent, white surface — more Material-like

### Remove
- Desktop-centric top utility strip on mobile
- Footer on mobile (not typical in mobile apps)

## Implementation Plan
1. Create a Splash screen component shown for ~2s on first load, then fades into app
2. Create a MobileTopBar component: location pill, search input, notification bell, avatar
3. Rebuild HomePage as a mobile-first feed: compact banner, horizontal-scroll service cards, trust badges, testimonial, stats
4. Update BottomNav: taller, pill active indicator, Android style
5. Update App.tsx: show MobileTopBar on mobile, desktop Header on desktop, hide Footer on mobile
6. Add FAB button on home screen for quick booking
7. Apply consistent card elevation (shadow-md/shadow-lg), larger touch targets, rounder corners throughout all pages
8. Add smooth page transition animations
