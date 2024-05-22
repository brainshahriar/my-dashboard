import { useState } from 'react';
import './notes.scss'
import Count from '../../components/notes/Count';
import Note from '../../components/notes/Note';
import CreateArea from '../../components/notes/CreatArea';

const Notes = () => {
    const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
}
  return (
    <div className='notes-body'>
        <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      />
     <CreateArea onAdd={addNote} />
     {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default Notes