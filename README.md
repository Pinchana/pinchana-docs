# Pinchana Docs

The English documentation hub for Pinchana Web, API, DLP, and project contributors. It is an Astro Starlight site published at <https://docs.pinchana.cc>.

## Local development

Install dependencies with Bun, then use Astro's background development mode:

```sh
bun install --frozen-lockfile
bun run dev
bunx astro dev status
bunx astro dev logs
bunx astro dev stop
```

Use `bun run dev:foreground` only when an attached foreground server is useful.

## Authoring

Documentation lives in `src/content/docs/`. The component-oriented folders are `start`, `web`, `api`, `dlp`, `translating`, `self-hosting`, and `deployment`. Use lowercase kebab-case filenames, one H1 supplied by frontmatter, descriptive link text, and language tags on code fences. Use Starlight Cards, Steps, Tabs, and asides only when they improve comprehension.

Treat the repositories as the source of truth. Before documenting a command or default, check the current Compose file, environment example, runtime validation, and operational scripts. Keep the quickstart linear and link to reference pages for exhaustive options instead of maintaining two competing setup procedures.

Document current behavior from source. Mark every credential as a placeholder; never add API keys, Turnstile secrets, WireGuard keys, certificates, Spotify credentials, or cookies. Do not paste rendered Compose configuration into issues or pull requests because it can contain interpolated secrets. Use these canonical origins:

- Web: `https://pinchana.cc`
- API: `https://api.pinchana.cc`
- Docs: `https://docs.pinchana.cc`

Before submitting changes:

```sh
bun run check
bun run build
```

The build is fully static and requires no API or Web service at runtime. Production hosting uses `docker-compose.yml`: a one-shot Bun service builds into a named volume and Nginx serves it on `127.0.0.1:4321` by default.

```sh
docker compose up --detach
docker compose ps
```
