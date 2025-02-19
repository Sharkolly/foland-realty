import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      Hello WOrld

      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Sign up</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
    </div>
  )
}

export default Home
