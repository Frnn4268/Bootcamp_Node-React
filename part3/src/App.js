import './App.css';
import { Note } from './Note';
import { useState } from 'react';

function App(props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddToState)

    setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  const handleShowAll = (e) => {
    setShowAll(() => !showAll)
  }

  /* Verify if the array is undefined or it´s empty
  if (typeof notes === 'undefined' || notes.length === 0) {
    return "We don´t have any notes to display"
  }
  */
  
  return (
    <>
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? 'Show only important' : 'Show all'}</button>
          <ol>
            {notes
            .filter(notes => {
              if (showAll === true) return true
              return notes.important === true
            })
            .map(notes => //Mapping of an array with JSX and using a 'key' 
              <Note 
                key={notes.id} 
                id={notes.id} 
                content={notes.content} 
                date={notes.date}
              />  

              /* This is another way to do the previous code
              <Note key={notes.id} {...notes}>  
              */
            )}
          </ol>
          <form  onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={newNote}></input>
            <button>Create note</button>
          </form>
    </div>
      
    </>
  );
}

export default App;
