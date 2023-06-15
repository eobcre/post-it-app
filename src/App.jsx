import { useState, createContext } from 'react';
// component
import Header from './components/Header';
import NoteList from './components/NoteList';
import Footer from './components/Footer';
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
    <div className='bg-nude flex min-h-screen'>
      <div className='flex-grow mx-auto max-w-4xl '>
        <Header />
        <MyContext.Provider value={{ handleAddNote, handleDeleteNote }}>
          <NoteList notes={notes} />
        </MyContext.Provider>
        <Footer />
      </div>
    </div>
  );
};

export default App;
