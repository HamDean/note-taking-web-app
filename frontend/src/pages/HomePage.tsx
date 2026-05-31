import { useState } from "react";
import NoteComponent from "../components/NoteComponent";
import DesktopPageHeader from "../components/DesktopPageHeader";
import { useParams } from "react-router";
import EmptyNotes from "../components/EmptyNotes";

const HomePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { note = "All Notes" } = useParams();
  const notes = [
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
    { title: "title 1", tags: ["tag 1", "tag 2"], dateCreated: "29 May 2015" },
  ];
  return (
    <>
      <DesktopPageHeader pageTitle={note} />
      <section className="align-page flex flex-col gap-1.5 px-4 py-5 lg:px-0 lg:py-0">
        <h1 className="text-preset-1 mb-4 lg:hidden">All Notes</h1>
        <div className="lg:grid grid-cols-[1fr_2fr_1fr]">
          <div className="lg:w-72.5 lg:pl-8 lg:pr-4 lg:py-5 lg:overflow-y-auto lg:overflow-x-hidden lg:border-r h-[calc(100vh-82px)] lg:border-neutral-200">
            {notes.length === 0 ? (
              <EmptyNotes />
            ) : (
              notes.map((note, index) => (
                <NoteComponent
                  key={index}
                  onSelectNote={() => setSelectedIndex(index)}
                  isSelected={selectedIndex === index}
                  noteTitle={note.title}
                  noteTags={note.tags}
                  dateCreated={note.dateCreated}
                />
              ))
            )}
          </div>
          <div className="lg:w-full lg:border-r h-[calc(100vh-82px)] lg:border-neutral-200"></div>
          <div className="lg:w-72.5"></div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
