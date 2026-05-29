import { useState } from "react";
import Tag from "./Tag";

const TagsSection = ({ tags }: { tags: string[] }) => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h2 className="text-preset-4 text-neutral-500">Tags</h2>

      <div className="mt-2">
        {tags.map((tag) => (
          <Tag
            key={tag}
            tag={tag}
            isSelected={tag === selected}
            onSelectTag={(tag) => setSelected(tag)}
          />
        ))}
      </div>
    </div>
  );
};
export default TagsSection;
