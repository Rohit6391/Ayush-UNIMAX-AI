# Ayush Unimax AI Studio

This is a Next.js starter project for Firebase Studio. It's designed to be a comprehensive, multi-modal AI assistant that you can modify, extend, and deploy.

This application is configured to work out-of-the-box using a pool of shared public API keys, giving you a robust and uninterrupted experience from the start.

You can run, test, and build upon this application freely.

---

## Deploying Your App to Vercel (Free)

To deploy your application to a live URL, you can use Vercel.

1.  **Get Your Code:** Download your project code as a ZIP file from your workspace.
2.  **Set Up on GitHub:** Create a new repository on GitHub and push your code to it.
3.  **Deploy on Vercel:** Go to [Vercel.com](https://vercel.com/), sign up with your GitHub account, and import your repository.
4.  **Add the Environment Variable:** In your Vercel project settings, find "Environment Variables". Add a new variable:
    *   **Name:** `GEMINI_API_KEY`
    *   **Value:** Paste one of the public keys from `src/lib/api-keys.ts` here. For even better performance, you can generate your own free key at [Google AI Studio](https://aistudio.google.com/app/apikey).
5.  **Deploy:** Click the "Deploy" button. Your app will be live.
