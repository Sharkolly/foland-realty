/* eslint-disable @typescript-eslint/no-unused-vars */
import Subscribe from "../Subscribe/Subscribe";
import { useContextStore } from "../Store/Context";
import { useEffect } from "react";

const Admin = () => {
  const { showModal, setShowModal } = useContextStore();

  const logOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("isLoggedIn", "false");
    location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      const subscribedValue = localStorage.getItem("isSubscribed");
      if (!subscribedValue) setShowModal(true);
    }, 5000);
  }, []);

  return (
    <div className="h-[2000px]">
      Home Welcome to `Admin Page
      <div className="mt-4">

        {showModal && <Subscribe />}
        <button
          onClick={logOut}
          className=" cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5"
        >
          log out
        </button>
      </div>
    </div>
  );
};

export default Admin;
