// Component
import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({ notes }) => {
  return (
    <div className='grid grid-cols-custom gap-6 p-5'>
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
};

export default NoteList;
