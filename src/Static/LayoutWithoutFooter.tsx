import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import PhoneTabs from "./PhoneTabs";
// import Footer from "./Footer";

const LayoutWithoutFooter = () => {
  return (
    <div>
      <Nav />
      <div className="mt-[85px]">
        <SideBar />
        <div className="ml-[20.5%] rounded-lg h-[2000px] bg-slate-200 max-xl:ml-[24%] max-md:mx-0 
        max-md:w-[91%] max-md:mx-auto">
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>

      <div className="hidden max-md:block">
        <PhoneTabs />
      </div>
    </div>
  );
};

export default LayoutWithoutFooter;
