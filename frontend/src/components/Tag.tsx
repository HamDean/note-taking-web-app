import tagIcon from '../assets/images/icon-tag.svg';

const Tag = ({ tag }: { tag: string}) => {
  return (
    <div className="flex gap-2 items-center text-neutral-700" >
        <img className="w-3.75 h-3.75" src={tagIcon} alt="Tag" />
        <span>{tag}</span>
    </div>
  )
}
export default Tag