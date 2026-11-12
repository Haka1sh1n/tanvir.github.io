# Research Portfolio — Md. Tanvir Ahmed Tonmoy

Live site: https://haka1sh1n.github.io/tanvir.github.io/

A responsive, accessible, zero-build portfolio for a VLSI / neuromorphic computing researcher. The root `index.html` is a standalone static entry point served directly by GitHub Pages; no React/Vite build is required to render the website.

## Features

- Dark/light theme with saved preference and reduced-motion support
- Original conceptual SVG illustrations for TANDEM/TEMPO-CIM, PRECIS-CAM and HfO₂ RRAM research
- Expandable research summaries, filterable projects, section highlighting and scroll progress
- Accepted publications and manuscripts in preparation (carefully distinguished)
- Education, research experience, academic honors, skills and contact options
- `cv.html` printable CV with browser **Print → Save as PDF**

## Content source

Updated November 2026 using `Tanvir_CV(2).pdf`, the owner's latest uploaded CV. TANDEM is the manuscript label for the TEMPO-CIM research direction. Research diagrams illustrate **concepts**, not measured device results or manufactured chips. The PRECIS-CAM initial 38.6% result excludes controller energy and is not a full-system claim.

## Image credit

The contextual wafer rendering links to [Wafer-scale integrated circuit.png](https://commons.wikimedia.org/wiki/File:Wafer-scale_integrated_circuit.png) by Wikideas1, licensed CC0 (public domain dedication). All three research architecture illustrations are original inline SVG artwork.

## Editing & deployment

Edit `index.html` for page content, `site.css` for visual design, `site.js` for interactions and `cv.html` for the print-friendly CV.

GitHub Pages should be set to **Deploy from a branch → main → / (root)**. The older Vite project in `src/` is retained for history but is no longer the active production entry point. The site does not need `npm run build`.

## Notes

External Google Fonts and the optional CC0 image require internet; all key content, diagrams and interactions work without them. Never present contextual illustrations as images from the research or unpublished experimental measurements.
