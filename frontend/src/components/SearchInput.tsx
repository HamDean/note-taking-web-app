import searchIcon from '../assets/images/icon-search.svg'

const SearchInput = () => {
  return (
    <div className="border-neutral-300 border px-4 py-3 rounded-8 relative flex items-center gap-2 text-preset-5">
        <img className="h-5 w-5 abso" src={searchIcon} alt="Search icon" />
        <input className="w-50 outline-none" type="text" placeholder="Search by title, content or tags..." />
    </div>
  )
}
export default SearchInput