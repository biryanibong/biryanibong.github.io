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
````

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8000`

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

To deploy the site to GitHub Pages, you need to build the project and then push the updated `dist` directory to the `main` branch of your repository.

1. Ensure your repository is configured for GitHub Pages in the repository settings.

      - Go to Settings \> Pages.
      - Set Source to "Deploy from a branch".
      - Choose the `main` branch and the `/dist/public` folder.

2. Build the project for production. This will generate the static files in the `/dist/public` directory.

```bash
npm run build
```

3. Commit the changes, including the updated `dist` directory.

```bash
git add dist
git commit -m "Update build for deployment"
```

4. Push the changes to the `main` branch on GitHub.

```bash
git push origin main
```

5. Your site will be available at https://biryanibong.github.io/ shortly after the push is complete and GitHub Pages finishes building.

## 🛠️ Tech Stack

  - React with TypeScript
  - Tailwind CSS for styling
  - Shadcn UI component library
  - Vite for build tooling
