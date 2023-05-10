import { useContext } from 'react';
import { MyContext } from '../App';
// react-icons
import { RiDeleteBin2Line } from 'react-icons/Ri';

const Note = ({ id, text, date }) => {
  const { handleDeleteNote } = useContext(MyContext);

  return (
    <div className='flex flex-col justify-between bg-post-yellow rounded-md w-72 h-64 p-5'>
      <h1>{text}</h1>
      <footer className='flex justify-between items-center'>
        <small>{date}</small>
        <RiDeleteBin2Line
          onClick={() => handleDeleteNote(id)}
          className='text-2xl hover:opacity-50 cursor-pointer'
        />
      </footer>
    </div>
  );
};

export default Note;
