## 2026-10-13 - Prioritize LCP images
**Learning:** Explicitly marking above-the-fold images with fetchpriority="high" and loading="eager" improves LCP performance, especially for dynamically generated elements where the browser might defer loading.
**Action:** Always add fetchpriority="high" and loading="eager" attributes to the main visible image when optimizing above-the-fold content.
## 2026-10-14 - Replace Large CDNs with Targeted Local CSS\n**Learning:** Large external CSS libraries (like hover.css) often contain many rules that are completely unused by the application. Loading them via CDN blocks rendering and downloads unnecessary bytes.\n**Action:** For small utility libraries, extract only the specifically used CSS classes and include them directly in the project's local stylesheet bundle.
## 2026-10-18 - Avoid loading scripts globally if they're only needed on specific pages
**Learning:** Loading large, specialized scripts (like pgp.js) on every single page slows down the network and increases parse time needlessly.
**Action:** Use conditional layout checks (e.g., in Liquid, `{% if page.layout == 'pgp' %}`) to restrict script inclusions to the pages that actually utilize them.
