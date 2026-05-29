import Tag from "./Tag";

const TagsSection = ({ tags }: { tags: string[] }) => {
  return (
    <div>
      <h2 className="text-preset-4 text-neutral-500">Tags</h2>

      <div className="mt-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};
export default TagsSection;
