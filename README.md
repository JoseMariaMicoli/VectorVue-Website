# VectorVue Website

Official marketing and documentation site for **VectorVue — Continuous Security Assurance**.

This repository contains the public product website, documentation, and technical position material used by customers, auditors, and partners to understand the platform capabilities.

This is not the VectorVue platform itself.
No operational security logic exists in this repository.

---

## Purpose

The website serves three roles:

1. Product explanation for security and compliance stakeholders
2. Technical transparency and architecture communication
3. Stable public entrypoint for trust evaluation

Security buyers evaluate vendors before conversations happen.
This site is designed to be deterministic, minimal, and auditable.

---

## Design Principles

* Static-first architecture (no runtime attack surface)
* Deterministic builds
* No tracking scripts
* No fingerprinting analytics
* Minimal external dependencies
* Long-term URL stability (citations safe)
* Security-header strictness
* Content > marketing aesthetics

The website intentionally behaves more like documentation infrastructure than a marketing landing page.

---

## Technology

| Component        | Purpose                         |
| ---------------- | ------------------------------- |
| Static Framework | Deterministic rendering         |
| Markdown Content | Long-term maintainability       |
| Cloudflare Pages | Immutable deployment            |
| Custom Domain    | Stable trust anchor             |
| No cookies       | Privacy & compliance neutrality |

---

## Local Development

```bash
git clone https://github.com/<org>/vectorvue-site.git
cd vectorvue-site
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The output is a static artifact deployable to any CDN.

---

## Deployment

Automatic deployment occurs via Git push to the main branch.

Cloudflare Pages settings (GitHub integration):

* Framework preset: `Next.js (Static HTML Export)`
* Build command: `npm run build`
* Build output directory: `out`
* Node.js version: `20` (recommended)

Properties:

* Immutable deployments
* TLS enforced
* No server runtime
* No database
* No dynamic execution

The deployed artifact is identical to the repository build output.

---

## Security Model

This repository intentionally contains:

* no credentials
* no API keys
* no infrastructure secrets
* no internal endpoints

The website does not interact with the production VectorVue platform.

Attack surface is limited to static asset delivery.

Security headers are enforced at CDN level.

---

## Responsible Disclosure

If you discover a vulnerability affecting the website delivery or integrity:

[founder@nyxera.cloud](mailto:founder@nyxera.cloud)

Do not include exploit code in public issues.

---

## License

Website content and branding: All rights reserved
Code structure: see LICENSE file

This repository is separate from the VectorVue platform licensing model.

---

## Relationship to Product

VectorVue platform repositories contain the operational assurance engine.

This repository only communicates:

* concepts
* architecture
* capabilities
* integration model

No platform behavior can be inferred from this codebase.

---

## Philosophy

Security vendors should not require trust before providing information.

The website is built to be:

Readable without scripts
Crawlable without execution
Understandable without sales contact

VectorVue proves security continuously.
This site explains how.
