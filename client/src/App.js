import "./App.css";
import Header from "./components/header/header";
import Note from "./components/note/note";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <>
      <div>
        <Header />
        <Note />
        <Footer />
      </div>
    </>
  );
};

export default App;
