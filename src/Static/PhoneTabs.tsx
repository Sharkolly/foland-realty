import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import { IoMdSettings } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const PhoneTabs = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 bg-slate-300 py-4.5">
        <div className=" flex justify-center items-center gap-9 w-[91%] mx-auto">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold v" : "flex-col flex gap-2 items-center"
            }
            to="/"
          >
            <div>
              <FaHome />
            </div>
            <p>Home</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold flex-col flex gap-2 items-center" : "flex-col flex gap-2 items-center"
            }
            to="/properties"
          >
            <div>
              <PiHouseLineFill />
            </div>
            <p>Properties</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold flex-col flex gap-2 items-center" : "flex-col flex gap-2 items-center"
            }
            to="/saved-properties"
          >
            <div>
              <FaBookmark />
            </div>
            <p>Saved</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold flex-col flex gap-2 items-center" : "flex-col flex gap-2 items-center"
            }
            to="/profile"
          >
            <div>
              <CgProfile />
            </div>
            <p>Profile</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PhoneTabs;
