import React from 'react'

export default function NoteForm ({handleSubmit, newNote, handleNoteChange, handleLogout}) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder='Write your note content' 
                value={newNote} 
                onChange={handleNoteChange} />
                <button type="submit">save</button>  
            </form>
            <div>
                <button onClick={handleLogout}>
                Logout
                </button>
            </div>
        </> 
    )
}