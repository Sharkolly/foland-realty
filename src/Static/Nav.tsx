import Logo from "../Images/1-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
import { useContextStore } from "../Store/Context";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Nav = () => {
  const { token, isLoggedIn } = useContextStore();
  const [menu, setMenu] = useState(false);

  const changeMenu = () => setMenu(!menu);

  const logOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  };

  return (
    <header className="flex justify-between items-center border-b-2 border-navy-blue w-full bg-white shadow-5xl fixed top-0 left-0 right-0 h-[85px] z-[99]">
      <div className="w-[90%] mx-auto flex justify-between items-center max-md:w-[95%] ">
        <div className="w-[10%] max-md:w-[25%]">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className={` hidden ${menu ? `max-md:hidden` : `max-md:block`} `} onClick={changeMenu}>
          <RxHamburgerMenu onClick={changeMenu} className="text-navy-blue  text-3xl mr-3" />
        </div>
        <nav className={`${menu ? `max-md:block` : `max-md:hidden`} `}>
        {/* {menu && ( */}
          <ul className="z-[99] flex justify-center gap-10 max-md:flex-col max-lg:gap-6 max-md:fixed max-md:top-0 max-md:z-[99] max-md:w-[60%] max-md:right-0 max-md:px-8 max-md:pt-7 max-md:gap-12 max-md:text-white max-md:bg-navy-blue  max-md:backdrop-blur-md max-md:h-[100vh] max-md:justify-start">
            <div className="hidden max-md:block flex justify-items-end" >
              <LiaTimesSolid className="text-3xl " onClick={changeMenu} />
            </div>
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
            {/* <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Profile
              </NavLink>
            </li> */}
            <li className="hidden max-md:block">
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/contact"
              >
                Settings
              </NavLink>
            </li>
            {isLoggedIn && token ? (
              <li className="hidden max-md:block">
                  <button className="" onClick={logOut}>
              Logout
            </button>
              </li>
            ) : (
              <>
                <li className="hidden max-md:block">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="hidden max-md:block">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          </nav>
        {/* )} */}
        {/* </div> */}
        <div className="flex gap-4 max-md:hidden">
          {isLoggedIn && token ? (
            <button className="bg-navy-blue text-white px-5 py-2 rounded-md" onClick={logOut}>
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
    </header>
  );
};

export default Nav;
