// Component
import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({ notes, handleDeleteNote }) => {
  return (
    <div className='grid grid-cols-custom gap-6 p-5'>
      {notes.map(({ id, text, date }) => (
        <Note
          key={id}
          id={id}
          text={text}
          date={date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote />
    </div>
  );
};

export default NoteList;
