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
import NoAuth from "./Protected_Route/NoAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from "./Error/Error";

// import { useContextStore } from "./Store/Context";

function App() {
  // const { isLoggedIn } = useContextStore();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">

        <Route
          path="/login"
          element={
            <NoAuth>
              <Layout>
                <Login />
              </Layout>
            </NoAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <NoAuth>
              <Layout>
                <Signup />
              </Layout>
            </NoAuth>
          }
        />
        <Route
          path="/reset-password"
          element={
            <NoAuth>
              <Layout>
                <Reset_Password />
              </Layout>
            </NoAuth>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
