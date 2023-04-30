// Hooks
import { useState } from 'react';
// Component
import NoteList from './components/NoteList';
// Data
import { NoteData } from '../NoteData';

const App = () => {
  const [notes, setNotes] = useState(NoteData);

  const handleAddNote = (text) => {
    console.log(text);
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <NoteList notes={notes} handleAddNote={handleAddNote} />
    </div>
  );
};

export default App;
