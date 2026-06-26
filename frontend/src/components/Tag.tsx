import TagIcon from './icon-components/TagIcon';

const Tag = () => {
  return (
    <div className="flex gap-2 items-center text-preset-4 text-neutral-700 p-3 cursor-pointer">
        <TagIcon />
        <span>Cooking</span>
    </div>
  )
}
export default Tag