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
