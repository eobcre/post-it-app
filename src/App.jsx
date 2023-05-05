// Hooks
import { useState } from 'react';
// Component
import NoteList from './components/NoteList';
// Data
import { NoteData } from '../NoteData';
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState(NoteData);

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <NoteList notes={notes} handleAddNote={handleAddNote} />
    </div>
  );
};

export default App;
