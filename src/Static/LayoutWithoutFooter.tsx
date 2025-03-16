import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import PhoneTabs from "./PhoneTabs";
// import Footer from "./Footer";

const LayoutWithoutFooter = () => {
  return (
    <div>
      <Nav />
      <div className="mt-[85px] max-md:mt-[95px]">
        <SideBar />
        <div
          className="ml-[20.5%] rounded-lg max-xl:ml-[24%]
        max-md:w-[91%] max-md:mx-auto py-4 px-5 max-md:py-0 max-md:px-0 max-md:mb-[120px]"
        >
          <Outlet />
        </div>
      </div>

      <div className="hidden max-md:block">
        <PhoneTabs />
      </div>
    </div>
  );
};

export default LayoutWithoutFooter;
