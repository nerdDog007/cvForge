import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-screen shadow-2xl p-4">
        <div className="flex w-full items-center justify-center md:justify-between ">
        <img src={logo} alt="ForgeCV Logo" className="w-30 md:w-34"/> 
        <button className="text-blue-500 text-xl border-2 border-blue-500 px-4 py-2 font-semibold rounded-xl hidden md:block">
            Create A Cv
        </button>
        </div>
    </nav>
  )
}

export default Navbar