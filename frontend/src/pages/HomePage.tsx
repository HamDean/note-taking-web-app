import { useState } from "react";
import NoteComponent from "../components/NoteComponent";

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const notes = [
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
  ];
  return (
    <section className="align-page flex flex-col gap-1.5 px-4 py-5 lg:px-0 lg:py-0">
      {notes.map((note, index) => (
        <NoteComponent
          onSelectNote={() => setSelectedIndex(index)}
          isSelected={selectedIndex === index}
          noteTitle={note.title}
          noteTags={note.tags}
          dateCreated={note.dateCreated}
        />
      ))}
    </section>
  );
};
export default HomePage;
