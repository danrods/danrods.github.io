## 2024-05-24 - Eager Loading of Hidden PDFs using Object Tags
**Learning:** `object` and `embed` tags force eager downloading of files (like large PDFs) even when they are hidden from the user, such as inside closed accordions. This blocks the main thread and wastes bandwidth.
**Action:** Always replace `<object>` and `<embed>` with `<iframe loading="lazy">` for heavy embedded assets that are not immediately visible upon page load.
