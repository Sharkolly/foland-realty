import { FaHome } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
const SideBar = () => {
  return (
    <div className="relative">
      {/* <div className="bg-blue-100/10 fixed shadow-xl left-0 w-[20%] rounded-br-lg rounded-tr-lg py-14 pl-28  max-md:hidden overflow-y-auto  h-screen max-xl:w-[23%] max-xl:pl-20 max-lg:pl-14 max-lg:w-[30%] ">
        <div className="overflow-y-auto  h-screen"> */}
      <div className="bg-blue-100/10 fixed shadow-xl left-0 w-[20%] max-md:hidden max-xl:w-[23%] max-xl:pl-20 max-lg:pl-1 max-lg:w-[30%] h-screen">
        <div className="flex flex-col h-full overflow-y-auto rounded-br-lg rounded-tr-lg py-14 pl-24 max-lg:pl-10">
          <nav>
            <ul className="flex gap-16 flex-col text-navy-blue">
              <li>
                <NavLink
               className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/"
                >
                  
                  <div>
                    <FaHome />
                  </div>
                  <p>Home</p>
                </NavLink>
              </li>

              {/* <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/rent"
                >
                  Rent
                </NavLink>
              </li> */}
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/add-properties"
                >
                  <div>
                  <IoIosAddCircleOutline />
                  </div>
                  <p>Add Properties</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/properties"
                >
                  <div>
                    <PiHouseLineFill />
                  </div>
                  <p>Properties</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/saved-properties"
                >
                  <div>
                    <FaBookmark />
                  </div>
                  <p>Saved Properties</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                     className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/profile"
                >
                  <div>
                    <CgProfile />
                  </div>
                  <p>Profile</p>
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold flex gap-3 items-center opacity-[1]"
                      : " flex gap-3 items-center opacity-[.8]"
                  }
                  to="/settings"
                >
                <div>
                  <IoMdSettings />
                </div>
                  <p>Settings</p>
                </NavLink>
              </li>
              <li className="">
                <button className="flex gap-3 items-center rounded-md">
                <div>
                  <MdOutlineLogout />
                </div>
                  <p>Logout</p>
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
