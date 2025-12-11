Notes App (React)

A simple and clean Notes Application built with React, featuring real-time editing, markdown preview, and persistent note management.

🚀 Features

➕ Create new notes instantly

✏️ Edit title and content in real-time

🧹 Delete notes

💾 Auto-sorted notes (latest updated at the top)

🔍 Markdown preview

🎯 Active note highlighting

🧭 Clean UI using TailwindCSS

🛠️ Technologies Used

React 19

Vite

TailwindCSS

React Markdown

UUID for unique IDs

📷 Screenshots (Optional)

Add screenshots of your app here later
Example:

/screenshots
  ├─ home.png
  ├─ editor.png
  └─ preview.png

📂 Project Structure
src/
├─ Main/
│  └─ MainBar.jsx
├─ Sidebar/
│  └─ Sidebar.jsx
├─ App.jsx
└─ index.css

🧠 How It Works

The app stores all notes in a React useState array.

Each note has:

{
  id,
  title,
  body,
  lastModified
}


Clicking a note sets it as activeNote.

Editing triggers:

onUpdateNotes()


Markdown preview is powered by:

<ReactMarkdown>{activeNote.body}</ReactMarkdown>

🏁 Getting Started
1. Install dependencies
npm install

2. Run the development server
npm run dev

3. Build for production
npm run build

🔧 Future Improvements (Optional)

⌨️ Keyboard shortcuts

🌙 Dark mode

💾 Save notes to localStorage

🔍 Add search functionality

📜 License

This project is open-source and free to use.
