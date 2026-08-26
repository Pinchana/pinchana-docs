# Pinchana Docs

Documentation for the public Pinchana API and Pinchana Web projects. The site is built with Astro Starlight and published at <https://docs.pinchana.cc>.

This repository intentionally does **not** document private or closed-source clients. Product documentation here is scoped to:

- [`Pinchana/pinchana-api`](https://github.com/Pinchana/pinchana-api) — the public gateway, scraper modules, DLP stack, deployment tooling, and release process.
- [`Pinchana/pinchana-web`](https://github.com/Pinchana/pinchana-web) — the public Next.js browser client and its same-origin backend-for-frontend.

## Local development

```sh
bun install --frozen-lockfile
bun run dev
bunx astro dev status
bunx astro dev logs
bunx astro dev stop
```

Use `bun run dev:foreground` when you need an attached Astro process.

## Validation

```sh
bun run check
bun run build
```

The docs build is static and does not need a running API or Web deployment.

## Authoring rules

Documentation lives in `src/content/docs/`. Before documenting a route, option, environment variable, security boundary, or deployment command, verify the current implementation in the API or Web repository. Repository READMEs are useful summaries, but runtime code, Compose files, `.env.example`, tests, and operational scripts are the final source of truth.

Never commit real API keys, Turnstile secrets, WireGuard keys, cookies, instance signing keys, DLP secrets, Spotify credentials, session tokens, or rendered Compose output containing interpolated secrets.

Canonical public origins used in examples:

- Web: `https://pinchana.cc`
- API: `https://api.pinchana.cc`
- Docs: `https://docs.pinchana.cc`

When behavior differs between the normal scrape pipeline and browser-only DLP, document the distinction explicitly instead of describing DLP as a scraper module.
