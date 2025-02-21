const Draft = () => {
  // const formData = new FormData();
  // formData.append("firstName", firstName);
  // formData.append("lastName", lastName);
  // formData.append("email", email);
  // formData.append("role", role);
  // formData.append("password", password);
  // formData.append("profilePic", profilePic as Blob);

  // const acceptProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) setProfilePic(e.target.files[0]);
  // };

  // useEffect(() => {
  //   if (formResponse) {
  //     setTimeout(() => {
  //       setFormResponse("");
  //     }, 4000);
  //   }
  // }, [formResponse]);

  // const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = {
  //     email,
  //     password,
  //   };

  //   try {
  //     setIsFetching(true);
  //     const sendData = await axios.post(
  //       "http://localhost:3001/login",
  //       // "https://foland-realty-server.onrender.com/login",
  //       formData
  //     );
  //     const { data } = await sendData;
  //     // setFormResponse(data.message);
  //     // setTimeout(() => {
  //     //   setFormResponse("");
  //     // }, 4000);
  //     if (data.token) {
  //       const sendToken = await axios.get(
  //         "http://localhost:3001/token-verify",
  //         {
  //           // "https://foland-realty-server.onrender.com/token-verify", {
  //           headers: {
  //             Authorization: `${data.token}`,
  //           },
  //         }
  //       );
  //       const response = await sendToken.data;
  //       localStorage.setItem("token", data.token);
  //       localStorage.setItem("isLoggedIn", "true");
  //       location.replace("/admin");
  //       setIsFetching(false);
  //     }
  //   } catch (error) {
  //     const axiosError = error as AxiosError<{ message?: string }>;
  //     const errorMessage =
  //       axiosError.response?.data?.message || "An unexpected error occurred.";
  //     console.error("Error:", errorMessage);
  //     setFormResponse(errorMessage);
  //   }
  // };
  return (
    <div>
      {/* {isLoggedIn ? "" : <Route path="/login" element={<Layout><Login /></Layout>} />} */}
      {/* {isLoggedIn ? "" : <Route path="/signup" element={<Layout><Signup /></Layout>} />} */}
      {/* {isLoggedIn ? (
            ""
          ) : (
            <Route path="/reset-password" element={<Layout><Reset_Password /></Layout>} />
          )} */}
      {/* </Route> */}
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
      // role in the login form
      <div className="flex gap-5 max-md:gap-3 text-slate-300 justify-between">
        <span className="font-bold text-slate-800">Log as: </span>
        <div className="flex gap-3">
          <div className="flex gap-2 max-md:gap-1">
            <label htmlFor="tenant" className="text-slate-700">
              Tenant
            </label>
            <input
              type="radio"
              value="Tenant"
              // checked={role === "Tenant"}
              name="Role"
              // onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="flex gap-2 max-md:gap-1">
            <label htmlFor="Agent" className="text-slate-700">
              Agent
            </label>
            <input
              type="radio"
              name="Role"
              // checked={role === "Agent"}
              value="Agent"
              // onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="flex gap-2 max-md:gap-1">
            <label htmlFor="Landlord" className="text-slate-700">
              Landlord
            </label>
            <input
              type="radio"
              name="Role"
              // checked={role === "Landlord"}
              value="Landlord"
              // onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;
