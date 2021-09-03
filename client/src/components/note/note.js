import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const { id, title, content, deleteNote } = props;
  console.log(title);

  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "en-US";

  // let p = document.createElement("p");
  // const words = document.querySelector(".words");
  // words.appendChild(p);

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    console.log(transcript);

    // if (e.results[0].isFinal) {
    //   p = document.createElement("p");
    //   words.appendChild(p);
    // }
  });

  recognition.addEventListener("end", recognition.start);
  recognition.start();

  return (
    <>
      <div className="note" contenteditable>
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
    </>
  );
};

export default Note;
