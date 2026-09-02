# FixBar bilingual site and logo

## What will change
- Keep Arabic as the default site at `/`, `/services`, `/pricing`, `/about`, and `/contact`.
- Add a complete English version at `/en`, with matching English subpages.
- Add a clear AR/EN language switcher in the desktop and mobile navigation.
- Use the uploaded FixBar SVG as the official header/footer logo, preserving vector sharpness at every screen size and adding a restrained neon-green glow.
- Keep service requests WhatsApp-only and provide the same pre-filled request experience in English.

## Technical details
- Make the shared header, footer, page shell, and hero locale-aware, including RTL/LTR direction.
- Add dedicated English TanStack routes and unique English metadata for each page.
- Store the uploaded SVG through the project asset flow and render it with responsive dimensions.
- Remove obsolete loading behavior from the WhatsApp-only Arabic request form while retaining its current functionality.
- Verify Arabic and English pages on desktop and mobile, including language switching, logo quality, and WhatsApp URL generation.
