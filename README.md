🕊️ Zenaura
A serene, pastel origami-inspired Pomodoro timer web app with motivational quotes, calming audio playback, and AI transcription integration. Built as a clean, recruiter-grade portfolio project to showcase modern frontend skills, API integration, and unique UI aesthetics.

🌟 Project Summary
Zenaura combines productivity and calm focus in an elegant single-page app. Its Origami UI reflects folded paper aesthetics with pastel colors to create a peaceful user experience.

🎯 Key Features
✅ Pomodoro Timer with presets (5, 25, 50 min) and custom durations
✅ Motivational Quotes rotating every 10s for focus encouragement
✅ Calming Audio Player with play/pause controls (mocked AssemblyAI usage)
✅ AssemblyAI Transcription Integration (speech-to-text API demonstration)
✅ Firebase Firestore for session logging and persistence
✅ Responsive Origami UI Design with folded card visuals
✅ Framer Motion subtle animations for entrance and interactions
✅ Browser Notifications when timer completes
✅ Audio alert beep on timer completion

🛠️ Tech Stack
Tech	            Purpose
React	            Frontend framework
Vite	            Build tool
TypeScript	      Static typing
Framer Motion	    Animations and transitions
Firebase	        Firestore database for sessions
AssemblyAI	      Speech-to-text transcription
Pure CSS	        Styling (no Tailwind used)

🎨 Design & Theme
Theme: Origami UI

Palette: Pastel lavender, blue, and yellow on soft paper white

Font: Libre Baskerville for a classic, calm aesthetic

Layout: Folded-card feel with subtle drop shadows and corner fold accents

Responsiveness: Fully mobile-friendly with clean alignment

🚀 Live Demo


📸 Screenshots
![image](https://github.com/user-attachments/assets/9dc5aac4-4081-4073-ad92-211de7c90916)


⚙️ Installation & Setup

**Clone the repository**

git clone https://github.com/whyte-fanggg/zenaura.git
cd zenaura

**Install dependencies**
npm install

**Add Firebase Configuration**

Go to Firebase Console.
Create a project and Firestore database.
Copy your config object.
Replace the placeholder in src/services/FirebaseService.ts:

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID",
};

**Add AssemblyAI API Key**
Sign up at AssemblyAI.
Get your API key from Dashboard → API Keys.
Replace the placeholder in src/services/AssemblyAIService.ts:
authorization: "YOUR_ASSEMBLYAI_API_KEY",

**Run the development server**
npm run dev

**Build for production**
npm run build
npm run preview

💻 Project Structure
zenaura/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── AudioPlayer.tsx
│   │   ├── AudioTranscribe.tsx
│   │   ├── ControlsPanel.tsx
│   │   ├── Logo.tsx
│   │   ├── MotivationQuote.tsx
│   │   ├── SessionStats.tsx
│   │   └── TimerCircle.tsx
│   ├── services/
│   │   ├── AssemblyAIService.ts
│   │   └── FirebaseService.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── vite.config.ts

✨ Contributing
This is a personal portfolio project. Forking is welcome for learning purposes.

📝 License
MIT License.

👤 Author
Stephen Francis Chintalapudi
https://github.com/whyte-fanggg
