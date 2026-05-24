My homepage looks clean but it's static and doesn't feel modern or alive. I want a futuristic, "morphing" feel WITHOUT heavy 3D — keep it light enough for a mid-range Android on a slow connection. Make these changes and show me in local preview after each group:

Animated background: Make the aurora/mesh gradient flow continuously — slow, organic motion, colors drifting (deep teal → emerald → cool blue). Add 2–3 soft blurred "blobs" that slowly morph their shape and drift behind the content. Use CSS/SVG, not WebGL.
Scroll motion: As I scroll, the background should shift subtly (parallax), and every section — subheadline, buttons, stat row, and all cards — should fade in and slide up as it enters the viewport, with a gentle stagger between items.
Hero depth: Add a soft glowing aura that slowly pulses behind the headline, and very subtle parallax so the hero feels alive when I move/scroll.
Stronger glass: Increase backdrop-blur and translucency on the header and cards so they clearly read as frosted glass, with soft glowing borders and a gentle glow on hover.
One light 3D accent (optional): A single lightweight floating shape in the hero is fine, but only if it stays smooth on mobile — otherwise skip it.

Hard rules: respect prefers-reduced-motion (serve a calm static version when set), don't stack heavy blurs, lazy-load, and keep Lighthouse mobile 90+. After the changes, run a local build and tell me the rough mobile performance impact.