import { useState } from "react";
import "./App.css";

import Note from "./components/note/note";
import Header from "./components/header/header";
import Create from "./components/create/create";
import Footer from "./components/footer/footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newnote) => {
    console.log(newnote);
    setNotes((prev) => {
      return [...prev, newnote];
    });
  };

  const deleteNote = (id) => {
    console.log(id);
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <Create addNote={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
