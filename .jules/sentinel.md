## 2024-05-18 - [Prevent Reverse Tabnabbing]
**Vulnerability:** Found `target="_blank"` links without `rel="noopener noreferrer"`.
**Learning:** This exposes a reverse tabnabbing vulnerability where the newly opened page can access and manipulate `window.opener` of the originating page, potentially allowing for phishing attacks.
**Prevention:** Always use `rel="noopener noreferrer"` with `target="_blank"`.
## 2024-11-20 - [Outdated Dependencies in HTML Headers]
**Vulnerability:** Found outdated and potentially vulnerable frontend dependencies loaded via CDN (e.g., jQuery 3.2.1, Bootstrap 4.0.0-beta.3).
**Learning:** Although dependencies might be static in a project, outdated minor/patch versions can carry known security vulnerabilities like XSS.
**Prevention:** Regularly audit and update CDN script/style links to their latest stable patches within the current major version, and always include valid Subresource Integrity (SRI) `integrity` and `crossorigin="anonymous"` attributes.

## 2024-10-24 - Remove unsafe-inline from CSP
**Vulnerability:** The Content Security Policy in the site's headers included `'unsafe-inline'` for `script-src` and `style-src`. This makes the application vulnerable to Cross-Site Scripting (XSS) if user input is ever reflected without proper sanitization.
**Learning:** The `'unsafe-inline'` directive was being used to support inline `onclick` handlers on buttons (e.g., `onclick="copyFingerprint()"`).
**Prevention:** Avoid using inline event handlers in HTML. Instead, use unobtrusive JavaScript by attaching event listeners (e.g., `addEventListener`) to elements using classes or IDs. This allows for a stricter CSP without `'unsafe-inline'`.
## 2024-11-20 - [Fix Broken Iframe by updating CSP]
**Vulnerability:** A previous commit removing unsafe-inline broke iframe rendering in `_site/resume.html` by applying strict default-src 'self'. Also, layout templates like `_layouts/err.htm` sometimes hardcode outdated head blocks, duplicating script references and missing CSP updates entirely.
**Learning:** When making CSP stricter, be sure to permit required external sources like `frame-src 'self' https://drive.google.com` for document rendering to ensure the page doesn't break.
**Prevention:** Avoid duplicating `<head>` content across multiple files. Refactor all layouts to `{% include head.html %}` so CSP updates and dependency patches apply globally.
## 2024-12-07 - [Prevent Client-Side DoS via FileReader]
**Vulnerability:** The `verifyKeyFile` function in `assets/js/pgp.js` used `FileReader.readAsText()` on user-uploaded files without a size check. This allowed uploading excessively large files (e.g., >1GB), leading to memory exhaustion and browser tab crashes (Client-Side Denial of Service).
**Learning:** `FileReader` reads the entire file into memory at once. For text-based verification where the expected file is small (like a PGP key block), lacking a file size restriction exposes the application to deliberate or accidental DoS.
**Prevention:** Always validate `file.size` before passing a `File` object to `FileReader`, especially for text decoding, setting a reasonable upper limit for the expected context (e.g., 1MB).
## 2024-12-07 - [Security Headers via Meta Tags]
**Vulnerability:** The site was lacking defense-in-depth headers such as `X-Content-Type-Options` and `X-Frame-Options`.
**Learning:** Security headers like `X-Frame-Options` and `X-Content-Type-Options` cannot be effectively set via HTML `<meta>` tags as modern browsers ignore them in this context; they must be delivered as HTTP response headers by the web server (e.g., GitHub Pages configuration if possible, or Cloudflare).
**Prevention:** Configure security headers at the server level rather than in the HTML markup.
## 2026-09-20 - [Fix X-XSS-Protection Header configuration]
**Vulnerability:** The site was using the deprecated `X-XSS-Protection: 1; mode=block` HTTP header.
**Learning:** Using `X-XSS-Protection: 1; mode=block` can actually introduce vulnerabilities in some legacy browsers, allowing attackers to manipulate the page's behavior or exfiltrate data (e.g. via XS-Search). The modern standard is to disable it (`0`) and rely on a strong Content Security Policy (CSP).
**Prevention:** Set `X-XSS-Protection: 0` in security headers configuration files.
