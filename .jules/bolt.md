## 2026-10-13 - Prioritize LCP images
**Learning:** Explicitly marking above-the-fold images with fetchpriority="high" and loading="eager" improves LCP performance, especially for dynamically generated elements where the browser might defer loading.
**Action:** Always add fetchpriority="high" and loading="eager" attributes to the main visible image when optimizing above-the-fold content.
## 2026-10-14 - Replace Large CDNs with Targeted Local CSS\n**Learning:** Large external CSS libraries (like hover.css) often contain many rules that are completely unused by the application. Loading them via CDN blocks rendering and downloads unnecessary bytes.\n**Action:** For small utility libraries, extract only the specifically used CSS classes and include them directly in the project's local stylesheet bundle.
## 2026-10-15 - Conditionally loading JS in Jekyll layouts
**Learning:** Loading page-specific JS globally (e.g., in `default.htm`) causes unnecessary network requests and parsing time on unassociated pages. Adding `defer` at the end of the `<body>` doesn't fully solve this.
**Action:** Use Liquid templating blocks like `{% if page.layout == 'specific_layout' %}` to conditionally load scripts only where they are needed, reducing global bundle size and improving parsing times on other pages.
