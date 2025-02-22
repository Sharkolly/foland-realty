import { NavLink } from "react-router-dom";
import Logo from  '../Images/logo.png'

const Home = () => {
  return (
    <div>
      Hello WOrld

      <img src={Logo} alt="Logo" />
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Sign up</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
    </div>
  )
}

export default Home
