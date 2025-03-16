import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const LayoutPages = () => {
  return (
    <div>
      {/* <div className='w-[90%] mx-auto'> */}
        <Nav />
        <div className='mt-[80px]'>
          <Outlet />
        </div>
        <Footer />
      {/* </div> */}
    </div>
  );
};

export default LayoutPages;
