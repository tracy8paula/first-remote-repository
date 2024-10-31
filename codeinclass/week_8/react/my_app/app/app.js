import React, { useState } from 'react';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NotesList notes={notes} addNote={addNote} />
    </div>
  );
}

export default App;
