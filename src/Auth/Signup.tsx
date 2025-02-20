import { NavLink } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
// import { useContextStore } from "../Store/context";
import axios from "axios";
import { useContextStore } from "../Store/Context";

const Signup = () => {
  const { email, setEmail, password, setPassword  } =
    useContextStore();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Tenant");
  const changeShowPasswordStatus = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formErr, setFormError] = useState("");

  const firstNameOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const regexForValidEmail = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const regexForValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const emailOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // const acceptProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) setProfilePic(e.target.files[0]);
  // };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("firstName", firstName);
    // formData.append("lastName", lastName);
    // formData.append("email", email);
    // formData.append("role", role);
    // formData.append("password", password);
    // formData.append("profilePic", profilePic as Blob);

    const formData = {
      firstName, lastName, email, role, password
    }

    if (!firstName || !lastName || !password  || !email)
      setFormError("Complete the form");

    try {
      const sendData = await axios.post(
        // "http://localhost:3001/signup",
        "https://foland-realty-server.onrender.com/signup",
        formData
      );
      const { data } = await sendData;

      const sendToken = await axios.get(
        // "http://localhost:3001/token-verify",{
        "https://foland-realty-server.onrender.com/token-verify", {
        headers: {
          Authorization: `${data.token}`,
        },
      });
      const response = await sendToken.data;
      console.log(response);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", "true");
      location.replace("/admin");
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <div className="w-[80%]  mx-auto max-md:w-[90%]">
      {/* <img src={Logo} className="scale-[.6]" alt="Foland Realty" /> */}
      <div className="">
        <h1 className="text-center  mt-0 font-bold text-2xl mb-9 max-md:mb-6">
          Sign Up to<span className="text-blue-600"> Foland Realty</span>
        </h1>
      </div>
      <form className="flex flex-col gap-3" onSubmit={(e) => formSubmit(e)}>
        <div>
          <input
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="text"
            name="firstname"
            placeholder="Firstname..."
            onChange={(e) => firstNameOnchangeInput(e)}
          />
          <p className="text-sm text-red-700">
            {firstName.length <= 0 ? "Firstname is empty" : ""}
          </p>
        </div>

        <div>
          <input
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="text"
            name="lastname"
            placeholder="Lastname..."
            onChange={(e) => lastNameOnchangeInput(e)}
          />
          <p className="text-sm text-red-700">
            {lastName.length <= 0 ? "Lastname is empty" : ""}
          </p>
        </div>
        <div>
          <input
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="email"
            name="email"
            placeholder="Enter your email address..."
            onChange={(e) => emailOnchangeInput(e)}
          />
          <p className="text-sm text-red-700">
            {!regexForValidEmail.test(email)
              ? "Email is not a valid email"
              : ""}
          </p>
        </div>

        <div>
          <div className="relative">
            <input
              className="w-full h-[2.5em] outline-none text-black pl-3 border border-gray-400 rounded-md"
              placeholder="Password"
              name="password"
              onChange={(e) => passwordOnchangeInput(e)}
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
          <p className="text-sm text-red-700">
            {!regexForValidPassword.test(password)
              ? "Password must have minimum of 8 characters, 1 Uppercase Letter, 1 Lowercase Letter, 1 Number , 1 Special Character"
              : ""}
          </p>
        </div>
        {/* <div>
          <div className="flex w-full items-center items-center justify-between">
            <label htmlFor="Profile Picture" className="text-lg font-bold">
              Profile Picture:
            </label>
            <input
              className="outline-none text-black h-[2.5em] rounded-md w-[35%] file:text-blue-800 "
              type="file"
              placeholder="Enter your email address..."
              onChange={(e) => acceptProfilePicture(e)}
            />
          </div>
          <p className="opacity-[.7]">
            {profilePic ? profilePic.name : "No File Selected Yet"}{" "}
          </p>
        </div> */}
        <div className="flex gap-5 max-md:gap-3 text-slate-300 justify-between">
          <span className="font-bold">Sign as: </span>
          <div className="flex gap-3">
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="tenant" className="text-yellow-700">
                Tenant
              </label>
              <input
                type="radio"
                value="Tenant"
                checked={role === "Tenant"}
                name="role"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="Agent" className="text-green-600">
                Agent
              </label>
              <input
                type="radio"
                name="Role"
                checked={role === "Agent"}
                value="Agent"
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="flex gap-2 max-md:gap-1">
              <label htmlFor="Landlord" className="text-blue-800">
                Landlord
              </label>
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
          <span className="spacing-4">Already have an account?</span>
          <NavLink className="font-bold text-right text-blue-500" to="/login">
            {" "}
            Login
          </NavLink>
        </div>

        <p>{formErr ? "" : ""}</p>
        <div className="flex items-center justify-center w-full">
          <button className="w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
