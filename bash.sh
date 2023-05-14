#!/bin/bash
#Install dependencies at root level
npm install
# Install server-side dependencies
cd server
npm install

cd ..
# Navigate to the client directory and install client-side dependencies
cd client
npm install

# Navigate back to the root directory
cd ..
npm run dev