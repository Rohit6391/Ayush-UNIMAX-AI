# Ayush Unimax AI Studio

This is a Next.js starter project for Firebase Studio. It's designed to be a comprehensive, multi-modal AI assistant that you can modify, extend, and deploy.

## Getting Started

To get started with development, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Deployment Guide (Free, Unlimited Quota)

Deploying your Ayush Unimax AI Studio app to a live URL is a straightforward process using **Vercel**, the creators of Next.js. Their hobby plan is completely free and does not require billing information. By following these steps, your live application will use your own personal API key, giving you an effectively unlimited, free quota.

### **Step 1: Get Your Code**

First, you'll need to get your project's code onto your local machine. You can do this by downloading it as a ZIP file from your workspace.

### **Step 2: Get Your Free Gemini API Key**

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Click "**Create API key in new project**".
3. Your new key will appear. Click the copy icon to copy it to your clipboard.

### **Step 3: Set Up Your Code with GitHub**

1.  Unzip the downloaded file.
2.  Create a new, empty repository on your [GitHub](https://github.com/) account.
3.  Open a terminal, navigate into your unzipped project folder, and run the following commands to link your code to your new GitHub repository:

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    git push -u origin main
    ```
    (Remember to replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub details.)

### **Step 4: Deploy with Vercel**

1.  Go to [Vercel.com](https://vercel.com/) and sign up for a free "Hobby" account using your GitHub account.
2.  Click the "**Add New...**" button and select "**Project**".
3.  Import the GitHub repository you just created.

### **Step 5: Add Your Gemini API Key to Vercel**

This is the most critical step to ensure your deployed app works with your unlimited quota.

1.  In the "Configure Project" screen on Vercel, expand the "**Environment Variables**" section.
2.  In the **Name** field, enter `NEXT_PUBLIC_GEMINI_API_KEY`.
3.  In the **Value** field, paste the API key you got from Google AI Studio.
4.  Click the "**Add**" button.

### **Step 6: Deploy!**

1.  With the environment variable added, simply click the main "**Deploy**" button.
2.  Vercel will build and deploy your site. Once it's finished, it will give you your live website URL. Any time you push new changes to your GitHub repository's `main` branch, Vercel will automatically redeploy them for you.
