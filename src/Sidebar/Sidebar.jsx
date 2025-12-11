import ReactMarkdown from 'react-markdown'

function Sidebar({ notes, onAddNote, onDelete, activeNote, setActiveNote}) {

    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)

    return(
        <div className="sidebar w-1/3 border-x-1 border-stone-300 min-h-lvh">
            
            <div className="header flex justify-between  p-7">
                <h1 className="font-bold text-4xl">Notes</h1>
                <button className="text-sky-500 cursor-pointer" onClick={onAddNote}>Add</button>
            </div>
            <div className="notes w-full">
                {
                    sortedNotes.map((note)=>(
                        <div 
                            key={note.id} 
                            className={`note flex p-7  hover:bg-gray-300 click:bg-sky-500 transition-all duration-300 ${activeNote === note.id && 'bg-sky-600 text-white hover:bg-sky-700 flex-wrap'}`} 
                            onClick={()=>setActiveNote(prev => prev===note.id ? false: note.id)}>

                            <div  className="note-content flex-1">
                                <h3 className="note-title font-bold text-xl capitalize mb-3">{note.title}</h3>
                                <p className="note-text text-sm whitespace-pre-wrap wrap-break-word capitalize mb-2">
                                    <ReactMarkdown>
                                        {note.body && note.body.substr(0, 100) + '...'}
                                    </ReactMarkdown>
                                </p>
                                <p className={`note-date text-xs text-stone-500 ${activeNote === note.id && 'text-white'}`}>Last Modified {new Date(note.lastModified).toLocaleDateString('en-GB', {
                                    hour: '2-digit', 
                                    minute: '2-digit'
                                })}</p>
                            </div>
                            <button
                                className="delete-btn text-red-500 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(note.id);
                                }}>Delete
                            </button>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;