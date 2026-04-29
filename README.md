# cookabc.github.io

This repo uses Bun for local development and deployment.

## Branches

- `source`: application source code
- `main`: published static site output

Do not develop directly on `main`. Changes should land on `source`, then be deployed to `main`.

## Setup

```bash
bun install
```

## Commands

```bash
bun run dev
bun run build
bun run deploy
```

- `bun run dev`: start the Vite dev server
- `bun run build`: type-check, lint, format-check, and build
- `bun run deploy`: build and publish `dist/` to the `main` branch

## Update dependencies

```bash
bun update
bun run build
```

## Standard workflow

```bash
git checkout source
git pull --rebase origin source

# make changes

git add .
git commit -m "Describe the change"
git push origin source
bun run deploy
```
