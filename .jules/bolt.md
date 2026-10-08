## 2024-05-24 - Do not use <object> or <embed> for hidden PDFs
**Learning:** Using `<object>` or `<embed>` tags for embedding PDFs forces eager downloading of the files, even if they are hidden (e.g., inside accordions). This negatively impacts page load performance and wastes bandwidth.
**Action:** Use `<iframe>` with `loading="lazy"` instead of `<object>` or `<embed>` for embedding PDFs that are not immediately visible. Place fallback download links outside the `<iframe>` tag so they remain accessible if inline PDF rendering fails.
