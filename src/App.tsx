import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Auth/Layout";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Reset_Password from "./Auth/Reset_Password";
import ProtectedRoute from "./Protected_Route/ProtectedRoute";
import Admin from "./Admin/Admin";
import { useContextStore } from "./Store/Context";

function App() {
  const { isLoggedIn } = useContextStore();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' >
          {isLoggedIn ? "" : <Route path="/login" element={<Layout><Login /></Layout>} />}
          {isLoggedIn ? "" : <Route path="/signup" element={<Layout><Signup /></Layout>} />}
          {isLoggedIn ? (
            ""
          ) : (
            <Route path="/reset-password" element={<Layout><Reset_Password /></Layout>} />
          )}
        {/* </Route> */}
        <Route
          index
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route index  element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
