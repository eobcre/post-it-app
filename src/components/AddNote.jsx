// react-icons
import { AiOutlineSave } from 'react-icons/Ai';

const AddNote = () => {
  return (
    <div className='flex flex-col justify-between bg-neon-yellow rounded-md w-72 p-5'>
      <textarea
        cols='10'
        rows='8'
        placeholder='Type your note.'
        className='bg-neon-yellow outline-none resize-none'
      ></textarea>
      <footer className='flex justify-end'>
        <AiOutlineSave className='text-2xl' />
      </footer>
    </div>
  );
};

export default AddNote;
