# Deploying KayakBoy to Coolify

This Next.js application is configured for deployment on [Coolify](https://coolify.io/) using an optimized, multi-stage **standalone Docker build**.

---

## 📦 What Has Been Prepared

1. **`next.config.mjs`**: Enabled `output: 'standalone'` so Next.js generates a minimal production bundle (~120 MB container) without bulky dev dependencies.
2. **`Dockerfile`**: Multi-stage build with Alpine Linux, pnpm caching, non-root security user, and optimized layer caching.
3. **`.dockerignore`**: Excludes `node_modules`, `.next`, and git files from build context to keep image builds fast.
4. **`docker-compose.yml`**: Includes health checks, environment variables, and port mappings for Docker Compose deployments.

---

## 🚀 Steps to Deploy in Coolify

### Step 1: Push Code to Git
Push your codebase to your GitHub, GitLab, or Gitea repository:
```bash
git add .
git commit -m "feat: Next.js website with Coolify Docker setup"
git push origin main
```

### Step 2: Create Application in Coolify
1. In your Coolify dashboard, select your **Project** and **Environment**.
2. Click **+ New Resource** $\rightarrow$ **Application** $\rightarrow$ **Public / Private Repository**.
3. Select your repository: `username/kayakboy-website` and branch `main`.

### Step 3: Configure Build Pack & Ports
Coolify will automatically detect the `Dockerfile`:
* **Build Pack**: `Dockerfile`
* **Port / Destination**: `3000`
* **Docker Compose (Optional)**: If you prefer Compose, select `Docker Compose` as the build pack instead.

### Step 4: Set Custom Domain & SSL
1. Under **General Settings** in Coolify, set your **Domains**:
   ```
   https://kayakboy.in
   ```
   *(or `https://www.kayakboy.in`)*
2. Coolify will automatically provision free SSL certificates via Let's Encrypt / Traefik.

### Step 5: Deploy
Click **Deploy** in the top right. Coolify will:
* Build the multi-stage Docker image
* Run the standalone Next.js server on port `3000`
* Attach SSL and route traffic through Traefik proxy.

---

## ⚙️ Environment Variables (Optional)

If you plan to add webhooks or analytics later, you can define them in Coolify under **Environment Variables**:
* `PORT=3000` (default)
* `NODE_ENV=production` (default)
