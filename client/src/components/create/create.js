import { useState } from "react";

const Create = (props) => {
  const { addNote } = props;

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          name="title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          id=""
          cols="30"
          rows="10"
          placeholder="Take a note..."
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addNote(note);
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Create;
