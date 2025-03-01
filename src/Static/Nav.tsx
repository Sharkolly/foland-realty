import Logo from "../Images/1-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
import { useContextStore } from "../Store/Context";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const { token, isLoggedIn } = useContextStore();
  console.log(token, isLoggedIn);

  return (
    <nav className="flex justify-between items-center py-4 relative w-full bg-white shadow-xl ">
      <div className="w-[90%] mx-auto flex justify-between items-center max-md:w-[95%]">
        <div className="w-[10%] max-md:w-[25%]">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden max-md:block">
          <RxHamburgerMenu className="text-navy-blue text-3xl" />
        </div>
        {/* <div className="w-full "> */}
          <ul className="flex justify-center gap-10 max-md:flex-col max-md:bg-blue-400 max-md:fixed max-md:top-0 max-md:z-[99] max-md:w-[50%] max-md:right-0 max-md:pl-12 max-md:pt-16 max-md:gap-12 max-md:hidden">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Add Properties
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Properties
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Saved Properties
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Profile
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Settings
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Log Out
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Login
              </NavLink>
            </li>
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        {/* </div> */}
        <div className="flex gap-4 max-md:hidden">
          {isLoggedIn && token ? (
            <button className="bg-navy-blue text-white px-5 py-2 rounded-md">
              Logout
            </button>
          ) : (
            <>
              <button className="border-2 border-navy-blue text-nav-blue px-5 py-2 rounded-md">
                <Link to="/login">Login</Link>
              </button>
              <button className="bg-navy-blue text-white px-5 py-2 rounded-md">
                <Link to="/signup">Sign Up</Link>
              </button>
            </>
          )}
        </div>

       
      </div>
    </nav>
  );
};

export default Nav;
