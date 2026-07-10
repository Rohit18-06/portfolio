# Vercel Deployment Guide

This project is a TanStack Start app, so Vercel deployment should follow the TanStack Start + Nitro path rather than a static Vite export.

## What changed in the app

- The Vite pipeline includes `nitro()` so production builds emit the runtime bundle Vercel can use.
- `package.json` declares Node `>=22.12.0`, which matches the current TanStack Start package requirements.
- A `start` script is available for local production smoke testing.

## Prerequisites

1. Push the project to a Git repository.
2. Create a Vercel account and connect that repository.
3. Use Node.js 22.12 or newer in your deployment environment.

## Local verification before deploying

Run these from the project root:

```bash
npm install
npm run lint
npm run build
```

If you want a local production smoke test after building, run:

```bash
npm run start
```

## Deploy to Vercel

### Option 1: Git integration in the Vercel dashboard

1. In Vercel, click Add New -> Project.
2. Import the Git repository for this app.
3. Set the project root to `profile-weaver-3d` if Vercel asks for a root directory.
4. Keep the framework detection enabled.
5. Set the build command to `npm run build`.
6. Set the install command to `npm install`.
7. Set the Node.js version to 22.12 or newer.
8. Add environment variables if your app needs them.
9. Deploy.

### Option 2: Vercel CLI

1. Install the CLI if you do not already have it:

```bash
npm i -g vercel
```

2. Log in:

```bash
vercel login
```

3. From the project root, run a preview deployment:

```bash
vercel
```

4. Follow the prompts and confirm:
- Build command: `npm run build`
- Install command: `npm install`
- Node version: 22.12 or newer

5. When the preview looks correct, create the production deployment:

```bash
vercel --prod
```

## Production checklist

1. Verify `npm run lint` passes with no errors.
2. Verify `npm run build` completes successfully.
3. Confirm the deployed site loads the home page and the route sections render.
4. Test at least one direct page refresh on a deep link.
5. Confirm the resume download and contact links still work after deploy.

## Troubleshooting

- If Vercel warns about Node version, set it to 22.12 or newer in Project Settings.
- If the deploy fails on a route build issue, regenerate the route tree by rerunning the Vite build locally and commit the updated `src/routeTree.gen.ts`.
- If the production page loads but a deep link 404s, verify the TanStack Start SSR build completed and that the repository root is set correctly in Vercel.

## Related files

- [vite.config.ts](vite.config.ts)
- [package.json](package.json)
- [README.md](README.md)