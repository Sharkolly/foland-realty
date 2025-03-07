/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
// import { Helmet} from 'react-helmet-async';

const Reset_Password = () => {
  const [steps, setSteps] = useState<number>(1);
  const [code, setCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [messageResponse, setMessageResponse] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const changeShowPasswordStatus = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const forgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const { data } = await axios.post(
        "http://localhost:3001/forgot-password",
        // "https://foland-realty-server.onrender.com/forgot-password",
        { email }
      );
      setMessageResponse(data.message);
      console.log(messageResponse);
      setTimeout(() => {
        setSteps(2);
      }, 2500);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      // toast.error(errorMessage);
      setMessageResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const verifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsFetching(true);
      const { data } = await axios.post(
        // "http://localhost:3001/verify-code", 
        "https://foland-realty-server.onrender.com/verify-code",
      
      {
        code,
        email,
      });
      setMessageResponse(data.message);
      setTimeout(() => {
        setSteps(3);
      }, 2500);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      // toast.error(errorMessage);
      setMessageResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const { data } = await axios.post(
        // "http://localhost:3001/reset-password",
        "https://foland-realty-server.onrender.com/reset-password",
        {
          newPassword,
          email
        }
      );
      setMessageResponse(data.message);
      location.replace("/login");
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      setMessageResponse(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (messageResponse) {
      setTimeout(() => {
        setMessageResponse("");
      }, 2500);
    }
  }, [messageResponse]);

  return (
    <div className="w-[80%] mx-auto max-md:w-[85%]">
       {/* <Helmet> */}
        {/* <title>Reset Password - Foland Realty</title> */}
        {/* <meta name="description" content="Learn more about Foland Realty, our mission, and how we help you find and manage rental properties." /> */}
        {/* <meta name="keywords" content="about Foland Realty, real estate company, rental management, property leasing" /> */}
      {/* </Helmet> */}
      <div className="flex justify-center">
        <img src={Logo} className="scale-[.6]" alt="Foland Realty" />
      </div>
      {steps === 1 && (
        <div>
          <h1 className=" text-black font-bold text-2xl mb-8">
            <span className="text-navy-blue"> Forgot Password</span>
          </h1>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => forgotPassword(e)}
          >
            <div>
              <input
                className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                type="email"
                placeholder="Enter your email address..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleEmailOnChange(e)
                }
              />
            </div>

            <div className='text-right text-navy-blue '>
              <Link to='/login'>Go back</Link>
            </div>
            <p
              style={
                messageResponse === "Reset code sent to email"
                  ? { color: "green" }
                  : { color: "red" }
              }
              className="text-center"
            >
              {messageResponse ? messageResponse : ""}{" "}
            </p>
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                disabled={isFetching ? true : false}
                className="cursor-pointer w-full hover:font-bold bg-navy-blue text-white px-8 pointer rounded-lg py-2.5"
              >
                {isFetching ? "Please Wait ..." : "Send Code"}
              </button>
            </div>
          </form>
        </div>
      )}
      {steps === 2 && (
        <div>
          <h1 className=" text-black font-bold text-2xl mb-8">
            <span className="text-navy-blue"> Verify Code</span>
          </h1>

          <form className="flex flex-col gap-6" onSubmit={(e) => verifyCode(e)}>
            <div>
              <input
                className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <p
              style={
                messageResponse === "Code Verified"
                  ? { color: "green" }
                  : { color: "red" }
              }
              className="text-center"
            >
              {messageResponse ? messageResponse : ""}{" "}
            </p>

            <div className="flex items-center justify-center w-full">
              <button
                disabled={isFetching ? true : false}
                type="submit"
                className="cursor-pointer w-full hover:font-bold bg-navy-blue text-white px-8 pointer rounded-lg py-2.5"
              >
                {isFetching ? "Please Wait ..." : "Verify Code"}
              </button>
            </div>
          </form>
        </div>
      )}

      {steps === 3 && (
        <div>
          <h1 className=" text-black font-bold text-2xl mb-8">
            <span className="text-navy-blue"> Reset Password</span>
          </h1>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => resetPassword(e)}
          >
            <div className="relative">
              <input
                // className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                   className="w-full h-[2.5em] outline-none text-navy-blue pl-3 border border-gray-400 rounded-md"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {showPassword ? (
              <IoEyeOffSharp
                onClick={changeShowPasswordStatus}
                className="absolute top-[50%] translate-y-[-50%] text-xl  text-navy-blue right-[20px] z-[10] max-md:right-[15px]"
              />
            ) : (
              <MdRemoveRedEye
                onClick={changeShowPasswordStatus}
                className="absolute top-[50%] translate-y-[-50%] text-xl  text-navy-blue right-[20px] z-[10] max-md:right-[15px] "
              />
            )}
            </div>
            <p
              style={
                messageResponse === "Password Reset"
                  ? { color: "green" }
                  : { color: "red" }
              }
              className="text-center"
            >
              {messageResponse ? messageResponse : ""}{" "}
            </p>

            <div className="flex items-center justify-center w-full">
              <button
                disabled={isFetching ? true : false}
                className="cursor-pointer w-full hover:font-bold bg-navy-blue text-white px-8 pointer rounded-lg py-2.5"
                type="submit"
              >
                {isFetching ? "Please Wait ..." : "Reset Password"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reset_Password;
