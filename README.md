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

### **Step 1: Get Ready**

First, make sure you have the following installed on your computer:
1.  **Node.js**
2.  **Firebase Account** (free to create)
3.  **Firebase CLI**: If you don't have it, run this command in your terminal:
    `npm install -g firebase-tools`

### **Step 2: Create a Firebase Project**

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Click **"Add project"** and follow the steps. You can name it whatever you like.

### **Step 3: Log In and Initialize**

This step connects your local project to your Firebase project. You only need to do this once.

1.  In your terminal, log in to Firebase:
    `firebase login`
2.  Navigate to your project's root folder and run:
    `firebase init apphosting`
3.  Follow the prompts, selecting the Firebase project you just created.

### **Step 4: Deploy!**

Now, whenever you want to deploy your application, just run the following command from your project's root directory:

```bash
npm run deploy
```

This single command will:
1.  Build a production-ready version of your app.
2.  Deploy it to Firebase App Hosting.

Once it's finished, the terminal will give you your live website URL. That's it!
