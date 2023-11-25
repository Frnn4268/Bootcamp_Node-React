import './App.css';
import { Note } from './Note';
import { getAllNotes } from './services/notes/getAllNotes'
import { createNote } from './services/notes/createNote';

import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [error, setError] = useState('')

  useEffect(() => { //Using useEffect
    getAllNotes()
    .then(notes => {
      setNotes(notes)
    })

    /*
    fetch("https://jsonplaceholder.typicode.com/posts") //Make a request to a URL async with useEffect
      .then((res) => res.json())
      .then((json) => {
        setNotes(json)
      })
    */
  }, [/*newNote*/]) //Example with single dependency

  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    setError('')

    createNote(noteToAddToState) //Create a note
    .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote))
      }).catch(e => {
        console.error(e)
        setError("Something was wrong")
      })

    //setNotes([...notes, noteToAddToState])
    setNewNote('')
  }

  // Verify if the array is undefined or it´s empty
  if (typeof notes === 'undefined' || notes.length === 0) {
    return "We don´t have any notes to display"
  }
  
  return (
    <>
    <div>
      <h1>Notes</h1>
          <ol>
            {notes
            .map(notes => //Mapping of an array with JSX and using a 'key' 
              // This is another way to do the previous code
              <Note key={notes.id} {...notes} />  
            )}
          </ol>
          <form  onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={newNote}></input>
            <button>Create note</button>
          </form>

          {error ? <span style={{color: "red"}}>{ error }</span>  : ""}
    </div>
      
    </>
  );
}

export default App;
