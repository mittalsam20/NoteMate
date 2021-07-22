import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Create from "./components/create/create";
import Note from "./components/note/note";
import Footer from "./components/footer/footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newnote) => {
    console.log(newnote);
    setNotes((prev) => {
      return [...prev, newnote];
    });
  };

  return (
    <>
      <div>
        <Header />
        {notes.map((note, index) => {
          return <Note key={index} title={note.title} content={note.content} />;
        })}
        <Create addNote={addNote} />
        <Footer />
      </div>
    </>
  );
};

export default App;
