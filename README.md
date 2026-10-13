# Cloudflare Pages Starter

A sample React + Vite website for testing GitHub integration and automatic deployments on Cloudflare Pages.

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build and test the production output

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy with GitHub and Cloudflare Pages

1. Create a new GitHub repository, for example `cloudflare-pages-starter`.
2. Upload/push the contents of this folder to the repository's root.
3. Sign in to Cloudflare and open **Workers & Pages**.
4. Choose **Create application** → **Pages** → **Connect to Git** (labels may vary).
5. Authorize GitHub and select your repository.
6. Set the build configuration:
   - Framework preset: `Vite` (if offered)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank
7. Start deployment. Cloudflare will provide a `*.pages.dev` URL.
8. Edit `src/main.jsx` or `src/style.css`, commit and push to GitHub. Cloudflare should automatically build and deploy the update.

## Notes

- This is a static frontend sample. It does not include a backend, authentication, or a database.
- Do not commit passwords, API keys, tokens, or `.env` files.
- For a live company website, replace the sample branding and content, test the mobile layout, add your real contact details and privacy/legal pages as appropriate, and connect your custom domain in Cloudflare Pages.
- If you add client-side routes later, configure routing/fallback behavior for your chosen router.
