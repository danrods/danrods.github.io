## 2026-10-13 - Prioritize LCP images
**Learning:** Explicitly marking above-the-fold images with fetchpriority="high" and loading="eager" improves LCP performance, especially for dynamically generated elements where the browser might defer loading.
**Action:** Always add fetchpriority="high" and loading="eager" attributes to the main visible image when optimizing above-the-fold content.
## 2026-10-14 - Replace Large CDNs with Targeted Local CSS\n**Learning:** Large external CSS libraries (like hover.css) often contain many rules that are completely unused by the application. Loading them via CDN blocks rendering and downloads unnecessary bytes.\n**Action:** For small utility libraries, extract only the specifically used CSS classes and include them directly in the project's local stylesheet bundle.
## 2026-10-30 - Conditional JS Loading vs Global Defer
**Learning:** Adding the `defer` attribute to a `<script>` tag placed right before the closing `</body>` tag provides virtually no render-blocking benefit, as the HTML document parsing is already complete at that point. It still incurs the cost of network download and JS parsing on every page.
**Action:** Optimize by conditionally avoiding the download/parsing altogether (e.g., using Liquid `{% if %}` templating) if the script is only needed for specific pages.
