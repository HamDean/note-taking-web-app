const NoteTag = ({ tag }: { tag: string }) => {
  return (
    <div
      className="w-11 h-4.5 bg-neutral-200 
            text-neutral-950 text-preset-6 flex  
            items-center justify-center rounded-4"
    >
      {tag}
    </div>
  );
};
export default NoteTag;
