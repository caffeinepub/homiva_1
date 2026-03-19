# HOMIVA

## Current State
App uses teal (#0F6F6B) as primary color and orange as accent. In "HOMIVA by the numbers" section: shows "₹1.5 Cr" / "Seed Ask", "3 Centres" / "Training", "25%" / "Commission".

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- **Colors**: Change entire app color scheme from teal/orange → pink (primary) and lavender (accent/bold text)
- **"HOMIVA by the numbers"** stat row:
  - "₹1.5 Cr" / "Seed Ask" → "₹7 Lac" / "Initial Value"
  - "3 Centres" / "Training" → "Godrej Waterside, Salt Lake Sector V" / "Office"
  - "25%" / "Commission" → "21%" / "Commission"
- All hardcoded teal/orange colors in HomePage, InvestorPage, and other pages → pink/lavender
- index.css CSS tokens: primary hue 185 (teal) → pink (~350), accent hue 65 (orange) → lavender (~285)

### Remove
- Nothing

## Implementation Plan
1. Update index.css: change --primary to pink oklch(0.60 0.20 350), --accent to lavender oklch(0.68 0.15 285), background to light pink tint
2. Update all hardcoded oklch/teal/orange color references in HomePage.tsx, InvestorPage.tsx, and any other component files
3. Update HomePage.tsx "HOMIVA by the numbers" stats: Initial Value ₹7 Lac, Office location, 21% commission
