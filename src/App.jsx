import { useState } from 'react'

import uuid from 'react-uuid'

import MainBar from './Main/MainBar';
import Sidebar from './Sidebar/Sidebar';

function App() {

    const [notes, setNotes] = useState([]);

    const [activeNote, setActiveNote] = useState(false); 

    const onAddNote = () => {
        console.log("note added")
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        }
        setNotes([newNote, ...notes])
        
        setActiveNote(newNote.id)
        
    }
    
    
    const getActiveNote = () => {
       return notes.find((note) => note.id === activeNote) ;
    }

    const onDelete = (id) => {
        setNotes(notes.filter((note) => (note.id !== id)));
    }

    const onUpdateNotes = (updatedNote) => {
        const updatedNotesArray = notes.map((note)=>{
            if(note.id === activeNote) {
                return updatedNote;
            } return note;
        })
        setNotes(updatedNotesArray)
    }

    return (

    <div className="note-app flex bg-stone-50 overflow-hidden">

        <Sidebar notes={notes} onAddNote={onAddNote} onDelete={onDelete} activeNote={activeNote} setActiveNote={setActiveNote} />
        <MainBar activeNote={getActiveNote()} onUpdateNotes={onUpdateNotes} />

    </div>
    )
}

export default App
