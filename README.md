# Solo Biz Cards

This is a NextJS starter built with React, ShadCN UI, Tailwind, and Firebase.

## How to Export Your Project

### Option 1: Create a ZIP Archive (Fastest)
1. Open the **Terminal** panel at the bottom.
2. Run this command:
   ```bash
   zip -r project-export.zip . -x "node_modules/*" ".next/*" ".git/*"
   ```
3. Right-click the `project-export.zip` file in the left-hand file explorer and select **Download**.

### Option 2: GitHub (Recommended for Version Control)
1. Open the **Terminal**.
2. Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Export project"
   git remote add origin https://github.com/robuc33/solo-cards-2.git
   git push -u origin main
   ```
   *Note: If prompted for a password, use a GitHub Personal Access Token (PAT).*

---

## Running Locally

Once you have the code on your computer:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set up Firebase**:
   - Create a project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a Web App to get your `firebaseConfig`.
   - Create a `.env.local` file in the root and add your keys (refer to `src/firebase/config.ts`).

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

---

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **AI**: Genkit
