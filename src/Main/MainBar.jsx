import ReactMarkdown from 'react-markdown'
function Main({activeNote, onUpdateNotes}) {

    const onEditField = (key, value) => {
        onUpdateNotes({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }

    if(!activeNote) return <p className="flex items-center justify-center text-2xl text-gray-400 w-full capitalize flex-1">no note selected</p>

    return (
        <div className="main-bar flex-1 min-h-screen">
            <div className="input-section border-b border-stone-500 flex flex-col p-7 max-h-1/2">
                    <input 
                        type="text" 
                        className="bg-white border-stone-500 border rounded-md p-2 focus:outline-sky-500 mb-3 text-2xl capitalize" 
                        name="note-title" id="note-title" 
                        autoFocus 
                        placeholder="Note Title" 
                        value={activeNote.title} 
                        onChange={(e)=> onEditField('title', e.target.value)} />

                    <textarea 
                        name="note" 
                        className="bg-white flex-1 border-stone-500 border rounded-md p-2 focus:outline-sky-500 mb-3 w-full resize-none" 
                        placeholder="Write Your Note Here" 
                        value={activeNote.body}
                        onChange={(e)=> onEditField('body', e.target.value)}></textarea>
            </div>

            <div className="preview-section p-7 bg-gray-100 h-1/2">
                <h1 className="font-bold text-4xl capitalize">{activeNote.title}</h1>
                
                <p className="text-3xl mt-3">
                    <ReactMarkdown>
                        {activeNote.body}
                    </ReactMarkdown>

                </p>
            </div>
        </div>
    )
}

export default Main;