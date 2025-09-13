# Ayush Unimax AI Studio

This is a Next.js starter project for Firebase Studio. It's designed to be a comprehensive, multi-modal AI assistant that you can modify, extend, and deploy.

## Get Extensive Free Usage in 2 Steps

This application uses the Gemini API. To get the best experience with a very large, free quota of requests, you should use your own personal API key.

### **Step 1: Get Your Free Gemini API Key**

1.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Click "**Create API key in new project**".
3.  Your new key will appear. Click the copy icon to copy it to your clipboard. This key provides a generous free tier, which is more than enough for most development and personal use.

### **Step 2: Add the Key to Your Project**

1.  In the file explorer on the left, find and open the `.env` file.
2.  Paste your API key directly after the `=` sign. The line should look like this:

    ```
    NEXT_PUBLIC_GEMINI_API_KEY=PASTE_YOUR_API_KEY_HERE
    ```

That's it! The application will now use your personal key, giving you access to the full free tier.

---

## Deploying Your App to Vercel (Free)

To deploy your application to a live URL, you can use Vercel.

1.  **Get Your Code:** Download your project code as a ZIP file from your workspace.
2.  **Set Up on GitHub:** Create a new repository on GitHub and push your code to it.
3.  **Deploy on Vercel:** Go to [Vercel.com](https://vercel.com/), sign up with your GitHub account, and import your repository.
4.  **Add Your API Key to Vercel:** In the project settings on Vercel, find the "Environment Variables" section. Add a new variable:
    *   **Name:** `NEXT_PUBLIC_GEMINI_API_KEY`
    *   **Value:** Paste your API key here.
5.  **Deploy:** Click the "Deploy" button. Your app will be live with your free, personal key.