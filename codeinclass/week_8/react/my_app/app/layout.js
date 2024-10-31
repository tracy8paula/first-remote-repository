const React = require('react');
const { useState } = React;

import React, { useState } from 'node_modules/react';
import NotesList from 'noteslist';

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
