## 2024-05-18 - [Prevent Reverse Tabnabbing]
**Vulnerability:** Found `target="_blank"` links without `rel="noopener noreferrer"`.
**Learning:** This exposes a reverse tabnabbing vulnerability where the newly opened page can access and manipulate `window.opener` of the originating page, potentially allowing for phishing attacks.
**Prevention:** Always use `rel="noopener noreferrer"` with `target="_blank"`.
