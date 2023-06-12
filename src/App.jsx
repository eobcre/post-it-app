import { useState, createContext } from 'react';
// component
import Header from './components/Header';
import NoteList from './components/NoteList';
// nanoid
import { nanoid } from 'nanoid';

export const MyContext = createContext();

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

  const handleDeleteNote = (id) => {
    const deleteNote = notes.filter((noteItem) => {
      return noteItem.id !== id;
    });
    setNotes(deleteNote);
  };

  return (
    <div className='bg-nude min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <Header />
        <MyContext.Provider value={{ handleAddNote, handleDeleteNote }}>
          <NoteList notes={notes} />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default App;
