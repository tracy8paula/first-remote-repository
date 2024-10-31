import React, { useState } from 'react';
import Note from './my_app';

function NotesList({ notes, addNote }) {
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote({ text: noteText, id: Date.now() });
      setNoteText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Add a new note"
      />
      <button onClick={handleAddNote}>Add Note</button>
      <div>
        {notes.map((note) => (
          <Note key={note.id} text={note.text} />
        ))}
      </div>
    </div>
  );
}

export default NotesList;
