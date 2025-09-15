'use server';

import * as fs from 'fs/promises';
import * as path from 'path';

// Define a schema for the input validation
type UpdateEnvFileResponse = {
    success: boolean;
    error?: string;
    message?: string;
};

/**
 * Appends a new API key to the .env file.
 * This function is a Server Action and should only be called from the client.
 * @param newKey The new API key to add.
 * @returns A promise that resolves to an object indicating success or failure.
 */
export async function addApiKey(newKey: string): Promise<UpdateEnvFileResponse> {
    if (!newKey || !newKey.trim()) {
        return { success: false, error: 'API key cannot be empty.' };
    }
    
    const envFilePath = path.resolve(process.cwd(), '.env');

    try {
        let fileContent = '';
        try {
            fileContent = await fs.readFile(envFilePath, 'utf8');
        } catch (e: any) {
            if (e.code !== 'ENOENT') {
                throw e; // Re-throw errors that aren't "file not found"
            }
            // If the file doesn't exist, we'll create it.
        }

        const keyVariable = 'GEMINI_API_KEYS';
        let newContent = '';
        
        if (fileContent.includes(keyVariable)) {
            // Key exists, append the new one
            newContent = fileContent.replace(
                /^(GEMINI_API_KEYS=.*)$/m,
                (line) => {
                    const existingKeys = line.split('=')[1] || '';
                    if (existingKeys) {
                        return `${line},${newKey.trim()}`;
                    }
                    return `GEMINI_API_KEYS=${newKey.trim()}`;
                }
            );
        } else {
            // Key doesn't exist, add it
            newContent = fileContent + `\n${keyVariable}=${newKey.trim()}`;
        }
        
        await fs.writeFile(envFilePath, newContent.trim());
        
        return { success: true, message: 'API key added successfully! The app is restarting to apply changes.' };
    } catch (error) {
        console.error('Error updating .env file:', error);
        return { success: false, error: 'Failed to update the environment file.' };
    }
}
