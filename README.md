# 🕊️ Zenaura

Zenaura is a serene, origami-inspired **Pomodoro timer web app** with motivational quotes, calming audio, and AI transcription integration.

---

## 🚀 Live Demo

[Click here to view Zenaura on Vercel](https://zenaura-silk.vercel.app/)

---

## ✨ Features

- Pomodoro timer (5, 25, 50 mins + custom)
- Motivational quotes rotating every 10s
- Calming background audio player (play/pause)
- AssemblyAI speech-to-text transcription demo
- Firebase Firestore integration for session logging
- Browser notification and audio alert on timer completion
- Origami-inspired pastel UI with folded card visuals
- Fully responsive layout with subtle Framer Motion animations

---

## 🛠️ Tech Stack

- React + Vite + TypeScript
- Framer Motion
- AssemblyAI API
- Firebase Firestore
- Pure CSS

---

## 📸 Screenshots

![Screenshot 2025-06-28 005745](https://github.com/user-attachments/assets/9d20f82d-f8cb-479e-800e-3c875b0d3048)

![image](https://github.com/user-attachments/assets/efd06375-058d-4121-b725-693fa008716d)

![image](https://github.com/user-attachments/assets/a431c449-e86c-4022-9de9-d9d36aa96b5e)

![image](https://github.com/user-attachments/assets/77280cde-26d8-4b3f-ac90-a0bf3fef79ec)


---

## ⚙️ Setup & Installation

1. **Clone the repo**

```bash
git clone https://github.com/whyte-fanggg/zenaura.git
cd zenaura
```
2. **Install dependencies**

```bash
npm install
```
4. **Add your Firebase config**

In src/services/FirebaseService.ts:
```bash
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID",
};
```
6. **Add AssemblyAI API key**

In src/services/AssemblyAIService.ts:
```bash
authorization: "YOUR_ASSEMBLYAI_API_KEY",
```
8. **Run locally**

```bash
npm run dev
```
10. **Build for production**

```bash
npm run build
npm run preview
```


---


## 🎨 Design

Pastel origami-inspired UI using:
- Soft paper white background (#FAFAFA)
- Accent lavender (#CBA0E3)
- Accent blue (#A8D8F0)
- Highlight yellow (#FFF3B0)
- Libre Baskerville font


---


## 📂 Project Structure

```plaintext

public/
├── favicon.ico
├── vite.svg

src/
├── assets/
│   └── react.svg
├── components/
│   ├── AudioPlayer.tsx
│   ├── AudioTranscribe.tsx
│   ├── ControlsPanel.tsx
│   ├── Logo.tsx
│   ├── MotivationQuote.tsx
│   ├── SessionStats.tsx
│   └── TimerCircle.tsx
├── services/
│   ├── AssemblyAIService.ts
│   └── FirebaseService.ts
├── App.tsx
├── index.css
├── main.tsx
├── theme.ts
└── vite-env.d.ts

.gitignore
.eslint.config.js
index.html
package-lock.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts

```

---


## 📝 License
MIT


---


## 👤 Author

Stephen Francis Chintalapudi

[Github](https://github.com/whyte-fanggg)
