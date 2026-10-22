## 2026-10-13 - Prioritize LCP images
**Learning:** Explicitly marking above-the-fold images with fetchpriority="high" and loading="eager" improves LCP performance, especially for dynamically generated elements where the browser might defer loading.
**Action:** Always add fetchpriority="high" and loading="eager" attributes to the main visible image when optimizing above-the-fold content.
## 2026-10-14 - Replace Large CDNs with Targeted Local CSS\n**Learning:** Large external CSS libraries (like hover.css) often contain many rules that are completely unused by the application. Loading them via CDN blocks rendering and downloads unnecessary bytes.\n**Action:** For small utility libraries, extract only the specifically used CSS classes and include them directly in the project's local stylesheet bundle.

## 2024-10-22 - Avoid Global Script Inclusion
**Learning:** Including page-specific JavaScript in global layouts (like `default.htm`) causes it to be fetched, parsed, and executed on every page, wasting network bandwidth and main thread time.
**Action:** Use conditional logic (e.g., `{% if page.layout == 'specific_page' %}`) in global templates to restrict script loading only to the pages that require the functionality.
