import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="lg:hidden h-13.5 md:h-18.5 bg-neutral-100 p-1 md:p-7 flex items-center">
        <img src={logo} alt="Logo" />
    </nav>
  )
}
export default Navbar