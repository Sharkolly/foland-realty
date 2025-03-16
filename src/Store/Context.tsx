import { createContext, useState, useContext } from "react";
import App from "../App";

type UserDetailsType = {
  isLoggedIn: string | null;
  // isLoggedIn: boolean | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<string | null>>;
  // setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  profilePic: File | null;
  setProfilePic: React.Dispatch<React.SetStateAction<File | null>>;
  subscribed: string | null;
  setSubscribed: React.Dispatch<React.SetStateAction<string | null>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  profileMenu: boolean;
  setProfileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserDetails = createContext<UserDetailsType | undefined>(
  undefined
);

const Context = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(
  //   localStorage.getItem("isLoggedIn") === "true"
  // );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [subscribed, setSubscribed] = useState(
    localStorage.getItem("isSubscribed")
  );
  const [showModal, setShowModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <UserDetails.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        profilePic,
        setProfilePic,
        subscribed,
        setSubscribed,
        showModal,
        setShowModal,
        menu,
        setMenu,
        profileMenu,
        setProfileMenu,
      }}
    >
      <App />
    </UserDetails.Provider>
  );
};

export default Context;

export const useContextStore = () => {
  const context = useContext(UserDetails);
  if (!context) throw new Error("useStore must be used within a Store");
  return context;
};
