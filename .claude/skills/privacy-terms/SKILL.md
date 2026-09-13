---
name: privacy-terms
description: Create Privacy Policy and Terms of Service documents for Manna Studio apps in a dual-language (English-first, Chinese-primary) scriptio continua style. Use when asked to generate privacy policies or terms of service for any app in this repository.
---

# Privacy & Terms Documents

Generate Privacy Policy and Terms of Service documents for Manna Studio applications
following the shared template, styling, and file layout described below.

## Where documents live

Place all documents inside the target app's subdirectory of this project
(e.g. `tts/`, `petchat/`, `manna/`). The app subdirectory is created at the
repository root alongside existing app folders.

## Template configuration

Each new app's legal docs follow this template configuration. Write these files
(using styled Markdown, one per document) into the app directory:

```
docs: ["README.md", "SECURITY.md", "PRIVACY_POLICY.md", "TERMS_OF_SERVICE.md"]
```

The standalone legal documents are always named with **English filenames**:

- `PRIVACY_POLICY.md`
- `TERMS_OF_SERVICE.md`

## Content template

Use the same Markdown text configuration as the privacy-policy example:

- Every section begins with a `## `<section> heading — **no numbering**.
- The document is **dual-language** (bilingual).
- **Chinese-primary**: Chinese carries the primary content weight.
- **English-first**: English text appears before the Chinese text.
- **Chinese punctuation** throughout the Chinese passages.
- **Traditional then Simplified**: for each Chinese passage, write the
  Traditional Chinese version first, then Simplified Chinese (Traditional-first,
  Simplified-second).
- Chinese passages wrap quoted material in **guillemets** `『…』`.
- English passages wrap quoted material in **single Unicode quotes** ‘ ’.
- Body typography: Chinese in **KaiTi (楷体)** and **SimSun (宋体)**,
  quote blocks first, then body text. English uses the **Gill Sans** family
  (`'Gill Sans', 'Gill Sans MT', Georgia, Cambria, serif`).

## Style / design template

- Use **CSS flexbox** for a responsive layout so the document can switch
  between the English / Traditional Chinese / Simplified Chinese versions.
- Aim for a **scriptio continua** style: different fonts and arrangements carry
  the English and the Traditional/Simplified Chinese text in parallel
  (**parallax style**), letting each reader move at their own speed.
- Headings use an **ALL CAPS** voice with tight **letter-spacing / tracking**.
- Lay out each version in a **3-column** arrangement (e.g. an off-canvas
  `3-column` layout) — English | Traditional Chinese | Simplified Chinese.

## Typical sections

**Privacy Policy**: Overview · Data We Do Not Collect · On-Device Processing ·
Local Storage · Model Downloads · Device Permissions · Third-Party Services ·
Children's Privacy · Security · Changes to This Policy · Contact Us.

**Terms of Service**: Agreement to Terms · Eligibility · License · Acceptable
Use · Intellectual Property · Open-Source Components · Disclaimer of Warranties ·
Limitation of Liability · Changes to Terms · Governing Law · Contact Us.

Contact email for all Manna Studio legal documents: **onebestai@gmail.com**.
