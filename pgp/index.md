---
layout: pgp
title: "PGP Public Key"
subtitle: "Secure communication and digital signatures"
permalink: /pgp/
show_key_info: true
show_downloads: true
show_verification: true
show_technical: true
---

# Secure Communication

Welcome to my PGP key distribution page. Use this key for:

## 📧 **Email Encryption**
Send me confidential emails that only I can read.

## ✍️ **Digital Signatures** 
Verify that documents and emails truly came from me.

## 🔐 **File Encryption**
Encrypt sensitive files before sharing them with me.

---

## 🚀 Quick Start

### For Email Users
1. **Download my public key** using the button below
2. **Import it** into your email client (Thunderbird, Outlook, Apple Mail)
3. **Verify the fingerprint** through multiple channels
4. **Start sending encrypted emails!**

### For Developers
```bash
# Import key via command line
curl -s {{ site.url }}/pgp/keys/current.asc | gpg --import

# Or use Web Key Directory
gpg --locate-keys {{ site.data.pgp-keys.current.email }}
```

📚 Additional Resources

[🔍 Key Verification Guide](https://claude.ai/chat/verification/) - Detailed verification instructions
[📖 PGP Tutorial](https://claude.ai/chat/tutorial/) - Learn how to use PGP
[🏛️ Key Archive](https://claude.ai/chat/archive/) - Previous keys and migration info
[❓ FAQ](https://claude.ai/chat/faq/) - Frequently asked questions


Last updated: {{ site.time | date: "%B %d, %Y" }}
