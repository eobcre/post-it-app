// hooks
import { useState } from 'react';
// component
import NoteList from './components/NoteList';
// nanoid
import { nanoid } from 'nanoid';

const App = () => {
  const NoteData = [
    {
      id: nanoid(),
      text: 'JavaScript is a high-level programming language that is widely used for web development.',
      date: '6/1/2023',
    },
  ];

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
