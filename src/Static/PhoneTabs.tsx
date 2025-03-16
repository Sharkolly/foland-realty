import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// import { IoMdSettings } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { PiHouseLineFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const PhoneTabs = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 border-t-2 py-6">
        <div className=" flex justify-evenly items-center  ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] font-bold flex-col flex gap-2 items-center"
                : "opacity-[.8] flex-col flex gap-2 items-center"
            }
            to="/"
          >
            <div>
              <FaHome />
            </div>
            <p className="">Home</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] flex-col font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col flex gap-2 items-center"
            }
            to="/properties"
          >
            <div>
              <PiHouseLineFill />
            </div>
            <p className="">Properties</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "opacity-[1] flex-col font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col flex gap-2 items-center"
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
              isActive
                ? "opacity-[1] flex-col font-bold flex gap-2 items-center"
                : "opacity-[.8] flex-col flex gap-2 items-center"
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
