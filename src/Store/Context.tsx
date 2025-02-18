import { createContext, useState, useContext } from "react";
import App from "../App";

type UserDetailsType = {
    isLoggedIn: boolean | null;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    profilePic: File | null;
    setProfilePic: React.Dispatch<React.SetStateAction<File | null>>;
};

export const UserDetails = createContext<UserDetailsType | undefined>(
  undefined
);

const Context = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  return <UserDetails.Provider value={{
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
  }}>
    <App/>
  </UserDetails.Provider>;
};

export default Context;

export const useContextStore = () => {

    const context = useContext(UserDetails);
    if(!context) throw new Error('useStore must be used within a Store');
    return context;
};
