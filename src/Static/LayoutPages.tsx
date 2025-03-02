import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const LayoutPages = () => {
  return (
    <div>
      {/* <div className='w-[90%] mx-auto'> */}
        <Nav />
        <Outlet />
        <Footer />
      {/* </div> */}
    </div>
  );
};

export default LayoutPages;
