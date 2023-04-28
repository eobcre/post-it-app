// Hooks
import { useState } from 'react';
// Component
import NoteList from './components/NoteList';
// Data
import { NoteData } from '../NoteData';

const App = () => {
  const [notes, setNotes] = useState(NoteData);

  return (
    <div className='max-w-4xl mx-auto'>
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
