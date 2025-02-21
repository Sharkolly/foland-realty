/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { useState, useEffect } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { useContextStore } from "../Store/Context";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { email, setEmail, password, setPassword } = useContextStore();

  const [formResponse, setFormResponse] = useState("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

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
    const formData = { email, password };

    try {
      setIsFetching(true);
      const { data } = await axios.post(
        // "http://localhost:3001/login",
        "https://foland-realty-server.onrender.com/login",
        formData
      );

      if (data.token) {
        const { data: response } = await axios.get(
          // "http://localhost:3001/token-verify",
          "https://foland-realty-server.onrender.com/token-verify",
          {
            headers: {
              Authorization: `${data.token}`,
            },
          }
        );
        toast.success(data.message);
        console.log(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", "true");
        location.replace("/admin");
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
      console.error("Error:", errorMessage);
      setFormResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  // Reset error message after 4s
  useEffect(() => {
    if (formResponse) {
      setTimeout(() => {
        setFormResponse("");
      }, 4000);
    }
  }, [formResponse]);

  return (
    <div className="w-[80%] mx-auto max-md:w-[90%]">
      <h1 className="text-center text-black font-bold text-2xl mb-8">
        Login to<span className="text-blue-600"> Foland Realty</span>
      </h1>

      <form className="flex flex-col gap-6" onSubmit={(e) => formSubmit(e)}>
        <div>
          <input
            onChange={(e) => emailOnchangeInput(e)}
            className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
            type="email"
            placeholder="Enter your email address..."
          />
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
        </div>

        <div className="flex justify-between">
          <span className="spacing-4 font-semibold">No account yet?</span>
          <NavLink className="font-bold text-right text-blue-500" to="/signup">
            {" "}
            Sign Up
          </NavLink>
        </div>
        <p
          style={
            formResponse === "Login Successful"
              ? { color: "green" }
              : { color: "red" }
          }
          className="text-center"
        >
          {formResponse ? formResponse : ""}
        </p>
        <div className="flex items-center justify-center w-full">
          <button
            disabled={isFetching ? true : false}
            className="cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5"
          >
            {isFetching ? "Please Wait ..." : "Login"}
            {/* Login */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
