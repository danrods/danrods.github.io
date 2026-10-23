## 2026-10-13 - Prioritize LCP images
**Learning:** Explicitly marking above-the-fold images with fetchpriority="high" and loading="eager" improves LCP performance, especially for dynamically generated elements where the browser might defer loading.
**Action:** Always add fetchpriority="high" and loading="eager" attributes to the main visible image when optimizing above-the-fold content.
## 2026-10-14 - Replace Large CDNs with Targeted Local CSS\n**Learning:** Large external CSS libraries (like hover.css) often contain many rules that are completely unused by the application. Loading them via CDN blocks rendering and downloads unnecessary bytes.\n**Action:** For small utility libraries, extract only the specifically used CSS classes and include them directly in the project's local stylesheet bundle.
## 2024-05-24 - Conditionally load page-specific JavaScript in global templates
**Learning:** Adding page-specific JavaScript in global templates like `_layouts/default.htm` without conditional logic loads unnecessary scripts globally, increasing network requests and parsing time on unassociated pages.
**Action:** When adding page-specific JavaScript to global layout templates, utilize conditional Liquid blocks (e.g., `{% if page.layout == 'pgp' %}`) to ensure the script is only loaded on the relevant pages.
