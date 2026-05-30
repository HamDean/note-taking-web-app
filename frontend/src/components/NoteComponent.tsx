interface Props {
  noteTitle: string;
  noteTags: string[];
  dateCreated: string;
  onSelectNote: () => void;
  isSelected: boolean;
}

const NoteComponent = ({
  noteTitle,
  noteTags,
  dateCreated,
  onSelectNote,
  isSelected,
}: Props) => {
  return (
    <div
      onClick={() => onSelectNote()}
      className={`flex flex-col gap-3 cursor-pointer lg:w-60.5 
                lg:text-wrap lg:p-2 lg:h-27.5 lg:rounded-6 ${isSelected ? "lg:bg-neutral-100" : ""}`}
    >
      <h2 className="text-preset-3">{noteTitle}</h2>

      <div className="flex gap-1">
        <div
          className="w-11 h-4.5 bg-neutral-200 
            text-neutral-950 text-preset-6 flex  
            items-center justify-center rounded-4"
        >
          {noteTags[0]}
        </div>
        <div
          className="w-11 h-4.5 bg-neutral-200 
            text-neutral-950 text-preset-6 flex  
            items-center justify-center rounded-4"
        >
          {noteTags[1]}
        </div>
      </div>

      <span className="text-neutral-700 text-preset-6">{dateCreated}</span>

      { !isSelected && <hr className="text-neutral-200 w-full" />}
    </div>
  );
};
export default NoteComponent;
