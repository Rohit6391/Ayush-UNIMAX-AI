#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Building the application for production..."
npm run build

echo "Deploying to Firebase App Hosting..."
firebase apphosting:backends:deploy

echo "✅ Deployment complete!"
