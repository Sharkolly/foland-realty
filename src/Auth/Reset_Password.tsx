/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
// import { toast } from "react-toastify";

const Reset_Password = () => {
  const [steps, setSteps] = useState<number>(1);
  const [code, setCode] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [messageResponse, setMessageResponse] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const forgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsFetching(true);
      const { data } = await axios.post(
        "http://localhost:3001/forgot-password",
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
      const { data } = await axios.post("http://localhost:3001/verify-code", {
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
        "http://localhost:3001/reset-password",
        {
          newPassword,
        }
      );
      setMessageResponse(data.message);

      location.replace("/login");
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

  useEffect(() => {
    if (messageResponse) {
      setTimeout(() => {
        setMessageResponse("");
      }, 2500);
    }
  }, [messageResponse]);

  return (
    <div className="w-[80%] mx-auto max-md:w-[85%]">
      {steps === 1 && (
        <div>
          <h1 className=" text-black font-bold text-2xl mb-8">
            <span className="text-blue-600"> Forgot Password</span>
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
                className="cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5"
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
            <span className="text-blue-600"> Verify Code</span>
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
                className="cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5"
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
            <span className="text-blue-600"> Reset Password</span>
          </h1>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => resetPassword(e)}
          >
            <div>
              <input
                className="w-full outline-none text-black pl-3 h-[2.5em] border border-gray-400 rounded-md"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
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
                className="cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5"
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
