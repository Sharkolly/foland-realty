import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className=" bg-slate-100 fixed left-0 w-[20%] rounded-br-lg rounded-tr-lg py-10 pl-28 overflow-y-auto h-[100vh]  max-md:hidden max-xl:w-[23%] max-xl:pl-20 max-lg:pl-14 max-lg:w-[30%] ">
        <div className="">
          <nav>
            <ul className="flex gap-16 flex-col text-navy-blue">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
            
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/admin"
                >
                  Admin
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/rent"
                >
                  Rent
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/add-properties"
                >
                  Add Properties
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/properties"
                >
                  Properties
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/saved-properties"
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
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold" : ""
                  }
                  to="/settings"
                >
                  Settings
                </NavLink>
              </li>
              <li className="">
              <button className=" rounded-md">
              Logout
            </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
