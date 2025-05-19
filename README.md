# Biryani Bong's House

A modern, responsive website for Biryani Bong, specializing in authentic biryani and traditional dishes.

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/biryanibong/biryanibong.github.io.git
cd biryanibong.github.io
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
.
├── client               # Frontend code
│   ├── public           # Static assets containing images
│   └── src              # React application source
│       ├── components   # UI components including sections and UI elements
│       ├── hooks        # Custom React hooks
│       ├── lib          # Utility functions and constants
│       └── pages        # Page components
├── server               # Backend code
├── shared               # Shared code between client and server
└── dist                 # Build output directory
```

## 📦 Deployment to GitHub Pages

### Building and Deploying

1. Ensure your repository is configured for GitHub Pages in the repository settings
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

2. Build the project for production
```bash
npm run build
```

3. Deploy to GitHub Pages using the built files in `dist/` directory:

   Option 1: Using gh-pages package
   ```bash
   # Install gh-pages if not already installed
   npm install --save-dev gh-pages
   
   # Add this script to package.json:
   # "deploy": "gh-pages -d dist"
   
   # Then run:
   npm run deploy
   ```

   Option 2: Manual deployment
   ```bash
   # Create a GitHub workflow file at .github/workflows/deploy.yml
   # The workflow should build and deploy the site using the GitHub Pages action
   ```

4. Your site will be available at https://biryanibong.github.io/

### GitHub Actions Workflow

Create a file called `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## 🛠️ Tech Stack

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI component library
- Vite for build tooling