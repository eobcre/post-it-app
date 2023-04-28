// Component
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <div className='note-layout grid grid-cols-custom gap-6 p-5'>
      {notes.map((note) => (
        <Note />
      ))}
    </div>
  );
};

export default NoteList;
