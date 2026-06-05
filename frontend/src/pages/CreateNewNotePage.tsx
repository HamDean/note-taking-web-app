import NewNotePageNavBar from "../components/NewNotePageNavBar";
import { useState } from "react";
import tagIcon from "../assets/images/icon-tag.svg";
import timeIcon from "../assets/images/icon-clock.svg";

const CreateNewNotePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

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
        <div className="flex flex-col gap-3">
          {/* tags row */}
          <div className="flex gap-2 items-center text-preset-6 h-7">
            <div className="flex items-center gap-1.5 w-28.75">
              <img className="w-4 h-4" src={tagIcon} alt="Tag" />
              <span className="text-neutral-700">Tags</span>
            </div>
            <div className="flex items-center w-full h-full">
              <input
                type="text"
                name="tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder={
                  tags.length === 0
                    ? "Add tags separated by commas (e.g. Work, Planning)"
                    : ""
                }
                className="text-neutral-950 align-middle leading-12 placeholder-neutral-400 bg-transparent outline-none w-full placeholder:text-wrap"
              />
            </div>
          </div>

          {/* last edited row */}
          <div className="flex items-center gap-2 text-preset-6 h-7">
            <div className="flex items-center gap-1.5 w-28.75">
              <img className="w-4 h-4" src={timeIcon} alt="Last Edited" />
              <span className="text-neutral-700">Last Edited</span>
            </div>
            <span className="text-preset-6 md:text-preset-5 text-neutral-400">
              Not yet saved
            </span>
          </div>
        </div>
      </form>
    </section>
  );
};
export default CreateNewNotePage;
