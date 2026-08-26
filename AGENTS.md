# Documentation contributor guide

## Scope

This site documents the public `Pinchana/pinchana-api` and `Pinchana/pinchana-web` repositories. Do not add documentation for private or closed-source clients.

## Source of truth

Verify current behavior before editing:

- API: `README.md`, `.env.example`, `docker-compose.yml`, `docker-compose.dev.yml`, `config/modules.yaml`, `docs/`, `scripts/`, and the current `pinchana-server` implementation/tests.
- Web: `README.md`, `.env.example`, `docker-compose.yml`, `Dockerfile`, `app/api/`, settings/runtime code, and `messages/`/`i18n/`.

Prefer current implementation and tests over older prose. Distinguish the normal `/v1/scrape` module pipeline from browser-only DLP.

## Site structure

Content is under `src/content/docs/`. Keep user-facing pages concise and link to reference/operations pages rather than duplicating long setup procedures. Use lowercase kebab-case paths and one title supplied by frontmatter.

## Commands

```sh
bun install --frozen-lockfile
bun run check
bun run build
```

For local preview, use the configured background development server:

```sh
bun run dev
bunx astro dev status
bunx astro dev logs
bunx astro dev stop
```

## Security

Every credential in examples must be a placeholder. Never paste real API keys, cookies, WireGuard keys, Turnstile secrets, DLP secrets, session tokens, instance signing keys, or rendered Compose output with interpolated secrets.
