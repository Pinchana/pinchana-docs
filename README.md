# Pinchana Docs

The English documentation hub for [Pinchana Web](https://github.com/Pinchana/pinchana-web) and [Pinchana API](https://github.com/Pinchana/pinchana-api). It is an Astro Starlight site published at <https://docs.pinchana.cc>.

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

Documentation lives in `src/content/docs/`. The folder names follow the sidebar groups configured in `astro.config.mjs`: `start`, `api`, `web`, `self-hosting`, and `deployment`. Use lowercase kebab-case filenames, one H1 supplied by frontmatter, descriptive link text, and language tags on code fences. Prefer Starlight Cards, Steps, Tabs, and asides when they make a workflow easier to scan.

Document current behavior from source. Mark every credential as a placeholder; never add API keys, Turnstile secrets, WireGuard keys, certificates, Spotify credentials, or cookies. Use these canonical origins:

- Web: `https://pinchana.cc`
- API: `https://api.pinchana.cc`
- Docs: `https://docs.pinchana.cc`

Before submitting changes:

```sh
bun run check
bun run build
```

The build is fully static. Publish the generated `dist/` directory to any static host. No API or Web service is required at documentation runtime.
