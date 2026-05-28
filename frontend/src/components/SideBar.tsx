import logo from '../assets/images/logo.svg'

const SideBar = () => {
  return (
    <article className="hidden lg:block w-68 border-r border-neutral-200 h-screen px-4 py-3">
        <div>
            <img src={logo} />
        </div>

    </article>
  )
}
export default SideBar