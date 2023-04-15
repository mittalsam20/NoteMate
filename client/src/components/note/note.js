import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const { id, title, content, deleteNote } = props;
  console.log(title);

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteNote(id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
