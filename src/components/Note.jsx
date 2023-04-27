import { RiDeleteBin2Line } from 'react-icons/Ri';

const Note = () => {
  return (
    <div className='flex flex-col justify-between bg-neon-yellow rounded-md w-72 h-72 p-5'>
      <h1>Title</h1>
      <footer className='flex justify-between items-center'>
        <small>Date</small>
        <RiDeleteBin2Line className='text-2xl' />
      </footer>
    </div>
  );
};

export default Note;
