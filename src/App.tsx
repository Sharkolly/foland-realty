import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About";
import LayoutAuth from "./Auth/LayoutAuth";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Reset_Password from "./Auth/Reset_Password";
import ProtectedRoute from "./Protected_Route/ProtectedRoute";
import Admin from "./Admin/Admin";
import NoAuth from "./Protected_Route/NoAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Error/Error";
import ScrollProgressBar from "./Components/ProgressBar";
import LayoutPages from "./Static/LayoutPages";
import HomeLayout from "./Pages/Home/HomeLayout";

// import { useContextStore } from "./Store/Context";

function App() {
  // const { isLoggedIn } = useContextStore();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/login"
          element={
            <NoAuth>
              <LayoutAuth>
                <Login />
              </LayoutAuth>
            </NoAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <NoAuth>
              <LayoutAuth>
                <Signup />
              </LayoutAuth>
            </NoAuth>
          }
        />
        <Route
          path="/reset-password"
          element={
            <NoAuth>
              <LayoutAuth>
                <Reset_Password />
              </LayoutAuth>
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
        <Route path="/" element={<LayoutPages />}>
          <Route index  element={<HomeLayout />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <ScrollProgressBar />
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
