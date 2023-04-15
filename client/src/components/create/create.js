import { useState, useEffect } from "react";

import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

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

  useEffect(() => {
    handleListen();
    // eslint-disable-next-line
  }, [exp]);

  const handleListen = () => {
    if (exp) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote((prev) => {
        return { ...prev, content: transcript };
      });
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
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
          onClick={() => {
            setExp(true);
          }}
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
              setExp(false);
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
