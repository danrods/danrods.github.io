---
layout: pgp
title: "Key Verification Guide"
subtitle: "How to safely verify my PGP key"
permalink: /pgp/verification/
show_verification: true
---

# 🔍 Key Verification Guide

**Key security depends on proper verification.** Never skip this step!

## Why Verification Matters

- **Prevents man-in-the-middle attacks**
- **Ensures you have the real key**, not a malicious one
- **Builds a web of trust** for future communications

---

## Step-by-Step Verification

### Step 1: Get the Fingerprint
First, note my key's fingerprint:
{{ site.data.pgp-keys.current.fingerprint | escape }}

### Step 2: Cross-Reference Multiple Channels
Visit **at least 2-3** of these independent sources:

#### 🐙 GitHub Profile
1. Go to [{{ site.verification.github | escape }}]({{ site.verification.github | escape }})
2. Check my profile README
3. Look for the PGP section
4. Compare the fingerprint

#### 🐦 Twitter/X
1. Visit [{{ site.verification.twitter | escape }}]({{ site.verification.twitter | escape }})
2. Look for pinned tweets
3. Find the PGP fingerprint post
4. Compare with the fingerprint above

#### 🔐 Keybase (Strongest Verification)
1. Go to [{{ site.verification.keybase | escape }}]({{ site.verification.keybase | escape }})
2. View my cryptographic proofs
3. Keybase cryptographically links my key to my identity

### Step 3: In-Person or Phone Verification
For the highest security:
- **Meet me in person** and I'll confirm the fingerprint
- **Call me** and I'll read the fingerprint over the phone
- **Video call** where I can show you the fingerprint

---

## Red Flags 🚩

**DO NOT TRUST** the key if:
- Fingerprints don't match across platforms
- Only one source has the fingerprint
- The website seems suspicious or compromised
- You get a different key from a keyserver

---

## Verification Tools

### Command Line Verification

```bash
# After importing, check the fingerprint
gpg --fingerprint {{ site.data.pgp-keys.current.email | escape }}

# Should output:
{{ site.data.pgp-keys.current.fingerprint | escape }}
```