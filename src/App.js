import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "This is my own",
    //   date: "15/04/2021",
    //   time: "12:56:54 AM"
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my name",
    //   date: "16/04/2021",
    //   time: "12:56:54 AM"
    // },
    // {
    //   id: nanoid(),
    //   text: "This is care",
    //   date: "17/04/2021",
    //   time: "12:56:54 AM"
    // },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const time = new Date();
    const newNote = {
      is: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container p-3">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
