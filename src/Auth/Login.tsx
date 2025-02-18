import { NavLink } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { useContextStore } from "../Store/Context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Tenant");
  const { email, setEmail, password, setPassword } = useContextStore();

  // const [formErr, setFormError] = useState("");

  const changeShowPasswordStatus = () => {
    setShowPassword(!showPassword);
  };

  const emailOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    // formData.append("role", role);
    formData.append("password", password);
  };

  return (
    <div className="w-[80%] mx-auto max-md:w-[90%]">
      <h1 className="text-center text-black font-bold text-2xl mb-12">
        Login to<span className="text-blue-600"> Real Estate</span>
      </h1>
      
      <form className="flex flex-col  gap-10" onSubmit={(e) => formSubmit(e)}>
        <div className="flex items-center justify-between">
          <input
            onChange={(e) => emailOnchangeInput(e)}
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="email"
            placeholder="Enter your email address..."
          />
        </div>

        <div className="relative">
          <input
            onChange={(e) => passwordOnchangeInput(e)}
            className="w-full h-[2.5em] outline-none text-black pl-3 border border-gray-400 rounded-md"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          {showPassword ? (
            <IoEyeOffSharp
              onClick={changeShowPasswordStatus}
              className="absolute top-[50%] translate-y-[-50%] text-xl  text-black right-[20px] z-[10] max-md:right-[15px]"
            />
          ) : (
            <MdRemoveRedEye
              onClick={changeShowPasswordStatus}
              className="absolute top-[50%] translate-y-[-50%] text-xl  text-black right-[20px] z-[10] max-md:right-[15px] "
            />
          )}
        </div>
        <div className="flex gap-5 max-md:gap-3 text-slate-300 justify-between">
          <span className="font-bold text-slate-800">Log as: </span>
          <div className="flex gap-3">
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="tenant" className="text-slate-700">Tenant</label>
              <input
                type="radio"
                value="Tenant"
                checked={role === "Tenant"}
                name="Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="Agent" className="text-slate-700">Agent</label>
              <input
                type="radio"
                name="Role"
                checked={role === "Agent"}
                value="Agent"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="Landlord" className="text-slate-700">Landlord</label>
              <input
                type="radio"
                name="Role"
                checked={role === "Landlord"}
                value="Landlord"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="spacing-4 font-semibold">No account yet?</span>
          <NavLink
            className="font-bold text-right text-blue-500"
            to="/signup"
          >
            {" "}
            Sign Up
          </NavLink>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};


export default Login;
