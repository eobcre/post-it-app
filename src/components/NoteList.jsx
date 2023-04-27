import Note from './Note';

const NoteList = () => {
  return (
    <div className='note-layout grid gap-4 justify-items-center p-5'>
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NoteList;
