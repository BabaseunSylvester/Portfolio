# Project Guide

## Architecture

This is a TanStack Start portfolio deployed on Netlify. Routes are file-based in `src/routes/`, global presentation is centralized in `src/styles.css`, and reusable primitives remain in `src/components/ui/`.

## Key directories

- `src/routes/`: Home, projects, résumé, contact, and article pages.
- `content/`: Markdown records for projects, jobs, education, and notes.
- `public/`: Static assets and the hidden Netlify Forms registration page.
- `.netlify/`: Build-system metadata and task results.

## Conventions

- Use TypeScript and function components.
- Keep portfolio copy in Markdown when it belongs to a content collection.
- Reuse the design tokens and page-level classes in `src/styles.css`.
- Preserve accessible labels, keyboard focus, reduced-motion behavior, and responsive layouts.
- Use Lucide icons instead of emoji or hand-drawn icon markup.

## Non-obvious decisions

The contact form posts to `public/contact.html` because Netlify must detect a static form during deployment and TanStack Start otherwise intercepts root-level requests. The public social links are intentionally generic and should be replaced with the portfolio owner's profiles before launch.
