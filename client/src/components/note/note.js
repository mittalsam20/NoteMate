const Note = (props) => {
  const { id, title, content, deleteNote } = props;

  console.log(title);

  return (
    <>
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteNote(id);
          }}
        >
          DELETE
        </button>
      </div>
    </>
  );
};

export default Note;
