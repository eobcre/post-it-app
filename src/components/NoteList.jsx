// Component
import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({ notes }) => {
  return (
    <div className='grid grid-cols-custom place-items-center gap-6'>
      {notes.map(({ id, text, date }) => (
        <Note key={id} id={id} text={text} date={date} />
      ))}
      <AddNote />
    </div>
  );
};

export default NoteList;
