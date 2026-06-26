import tag from '../assets/images/icon-tag.svg'

const Tag = () => {
  return (
    <div className="flex gap-2 items-center text-preset-4 text-neutral-700 p-3 cursor-pointer">
        <img src={tag} alt="Tag" />
        <span>Cooking</span>
    </div>
  )
}
export default Tag