# Host the portfolio on Vercel

The portfolio is a static React/Vite site. It does not need the API server,
a database, or `SESSION_SECRET`. Contact links open the visitor's email app.

## Import from GitHub

1. Commit `vercel.json` and this guide to GitHub before importing.
2. Go to <https://vercel.com/new>, connect GitHub, and import
   `Ace-g-ops/my-portfolio-website`.
3. Keep **Root Directory** at the repository root (`.`). Do not select
   `artifacts/personal-portfolio`: the build needs the root pnpm workspace
   and shared libraries.
4. Use **Vite** as the framework preset and **Node.js 24.x**.
5. The root `vercel.json` supplies the install command, portfolio-only build
   command, output directory, and single-page routing. No environment variables
   need to be added to the dashboard for this site.
6. Click **Deploy**. Vercel will provide the live URL when the build succeeds.

Vercel's GitHub connection is separate from the Git login used to push from
this workspace. If the workspace push still fails, repair that login first
or add these configuration files through GitHub on a new branch. Keep the
existing required checks on `main`; merge the pull request only after they pass.

## Manual build settings

If importing before `vercel.json` reaches GitHub, override the dashboard settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Root directory | Repository root (`.`) |
| Node.js version | 24.x |
| Install command | `npx --yes pnpm@10.26.1 install --frozen-lockfile` |
| Build command | `npx --yes pnpm@10.26.1 run typecheck:portfolio && PORT=8080 BASE_PATH=/ npx --yes pnpm@10.26.1 run build:portfolio` |
| Output directory | `artifacts/personal-portfolio/dist/public` |

Add `vercel.json` to the repository for the routing rule as well.
The pinned pnpm version matches the workspace's package manager.
`PORT=8080` satisfies the Vite config during the build; it does not start
a server on Vercel. `BASE_PATH=/` builds assets for the root of the Vercel site.

Only the portfolio is built. Do not use the root `pnpm run build`, which
also builds unrelated workspace artifacts.

## After deployment

- Check the project screenshots, project links, theme toggle, and contact link.
- Subsequent changes merged into the connected production branch trigger
  Vercel deployments automatically.
- If desired, add a custom domain under the Vercel project's **Settings → Domains**
  and use the DNS records Vercel displays.

References:
- <https://vercel.com/docs/frameworks/frontend/vite>
- <https://vercel.com/docs/project-configuration/vercel-json>