const EmptyNotes = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full lg:w-60.5 bg-neutral-100 rounded-8 p-2 text-preset-5 border border-neutral-200">
        You don’t have any notes yet. Start a new note to capture your thoughts
        and ideas.
      </div>

      <hr className="hidden md:block lg:hidden text-neutral-200" />
    </div>
  );
};
export default EmptyNotes;
