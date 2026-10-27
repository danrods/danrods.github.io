## 2026-10-13 - Prioritize LCP images
**Learning:** Explicitly marking above-the-fold images with fetchpriority="high" and loading="eager" improves LCP performance, especially for dynamically generated elements where the browser might defer loading.
**Action:** Always add fetchpriority="high" and loading="eager" attributes to the main visible image when optimizing above-the-fold content.
## 2026-10-14 - Replace Large CDNs with Targeted Local CSS\n**Learning:** Large external CSS libraries (like hover.css) often contain many rules that are completely unused by the application. Loading them via CDN blocks rendering and downloads unnecessary bytes.\n**Action:** For small utility libraries, extract only the specifically used CSS classes and include them directly in the project's local stylesheet bundle.
## 2024-05-15 - Conditionally Loading JavaScript
**Learning:** Adding a defer attribute doesn't prevent render blocking if it's placed just before the closing body tag. It's often more impactful to conditionally prevent the download/parsing altogether if a script is only needed for a specific layout.
**Action:** Use Liquid templating conditional logic (e.g. `{% if page.layout == 'pgp' %}`) inside `_layouts/default.htm` to only load layout-specific scripts on the pages they actually apply to, reducing network payload and parsing overhead on unrelated pages.
