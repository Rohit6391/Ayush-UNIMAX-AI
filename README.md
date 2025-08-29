# Ayush Unimax AI Studio

This is a Next.js starter project for Firebase Studio. It's designed to be a comprehensive, multi-modal AI assistant that you can modify, extend, and deploy.

## Getting Started

To get started with development, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Deployment Guide

Deploying your Ayush Unimax AI Studio app to a live URL is a straightforward process using Firebase App Hosting.

### **Step 1: One-Time Setup**

You only need to do this part once for your project. If you've done it before, you can skip to Step 2.

1.  **Install Firebase Tools:** If you don't have it, open your terminal and run:
    ```bash
    npm install -g firebase-tools
    ```
2.  **Log In to Firebase:**
    ```bash
    firebase login
    ```
3.  **Connect Your Project:** Run this command from your project's root folder and follow the prompts to select the Firebase project you created.
    ```bash
    firebase init apphosting
    ```

### **Step 2: Deploy Your Website**

Whenever you want to publish your changes, just run this single command from your project's terminal:

```bash
npm run deploy
```

This one command handles everything: it builds your app for production and deploys it to Firebase. Once it's finished, the terminal will give you your live website URL. That's it!
