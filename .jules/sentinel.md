## 2024-05-18 - [Prevent Reverse Tabnabbing]
**Vulnerability:** Found `target="_blank"` links without `rel="noopener noreferrer"`.
**Learning:** This exposes a reverse tabnabbing vulnerability where the newly opened page can access and manipulate `window.opener` of the originating page, potentially allowing for phishing attacks.
**Prevention:** Always use `rel="noopener noreferrer"` with `target="_blank"`.
## 2024-11-20 - [Outdated Dependencies in HTML Headers]
**Vulnerability:** Found outdated and potentially vulnerable frontend dependencies loaded via CDN (e.g., jQuery 3.2.1, Bootstrap 4.0.0-beta.3).
**Learning:** Although dependencies might be static in a project, outdated minor/patch versions can carry known security vulnerabilities like XSS.
**Prevention:** Regularly audit and update CDN script/style links to their latest stable patches within the current major version, and always include valid Subresource Integrity (SRI) `integrity` and `crossorigin="anonymous"` attributes.
