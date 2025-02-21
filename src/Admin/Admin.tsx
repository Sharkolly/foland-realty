const Admin = () => {


  const logOut = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('isLoggedIn', 'false');
    location.reload();
  };

  return (
    <div className='flex justify-center mt-12'>
      Home Welcome

      <div className="flex items-center justify-center w-[10%]">
        <button onClick={logOut}  className=" cursor-pointer w-full hover:font-bold bg-blue-800 text-white px-8 pointer rounded-lg py-2.5">
          log out

        </button>
        </div>
    </div>
  )
}

export default Admin