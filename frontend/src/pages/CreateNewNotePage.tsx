import NewNotePageNavBar from "../components/NewNotePageNavBar";
import { useState } from "react";
import tagIcon from '../assets/images/icon-tag.svg';
import timeIcon from '../assets/images/icon-clock.svg'

const CreateNewNotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <section className="px-8 py-5">
      <NewNotePageNavBar />

      <form action="" className="mt-4 flex flex-col gap-3">
        {/* title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title..."
            className="w-full text-preset-2 md:text-preset-1  text-gray-950 placeholder-neutral-950 bg-transparent outline-none"
          />

        {/* content */}
        
      </form>
    </section>
  );
};
export default CreateNewNotePage;
