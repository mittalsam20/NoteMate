import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const Create = (props) => {
  const { addNote } = props;
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [exp, setExp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const expand = () => {
    setExp(true);
  };
  return (
    <>
      <form className="create-note">
        {exp && (
          <input
            type="text"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            name="title"
          />
        )}
        <textarea
          onClick={expand}
          name="content"
          value={note.content}
          onChange={handleChange}
          id=""
          rows={exp ? "3" : "1"}
          placeholder="Take a note..."
        />
        <Zoom in={exp}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              addNote(note);
              setNote({
                title: "",
                content: "",
              });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};

export default Create;
