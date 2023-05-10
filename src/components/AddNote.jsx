import { useState, useContext } from 'react';
// useContext
import { MyContext } from '../App';
// react-icons
import { AiOutlineSave } from 'react-icons/Ai';

const AddNote = () => {
  const [noteText, setNoteText] = useState('');

  const { handleAddNote } = useContext(MyContext);

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
    setNoteText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveClick();
    }
  };

  return (
    <div className='flex flex-col justify-between bg-post-blue rounded-md w-72 h-64 p-5'>
      <textarea
        cols='10'
        rows='8'
        placeholder='Type your note.'
        className='bg-post-blue outline-none resize-none'
        value={noteText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <footer className='flex justify-end'>
        <AiOutlineSave
          className='text-2xl hover:opacity-50 cursor-pointer'
          onClick={handleSaveClick}
        />
      </footer>
    </div>
  );
};

export default AddNote;
