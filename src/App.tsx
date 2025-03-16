import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
import AboutLayout from "./Pages/About/AboutLayout";
import Serviceslayout from "./Pages/Services/Services.layout";
import ContactLayout from "./Pages/Contact/ContactLayout";
import SettingLayout from "./Settings/SettingLayout";
import LayoutWithoutFooter from "./Static/LayoutWithoutFooter";
import AddPropertyLayoyut from "./Add-Property/AddPropertyLayoyut";
import SavedPropertyLayout from "./SavedProperty.tsx/SavedPropertyLayout";
import ProfileLayout from "./Profile/ProfileLayout";
import PropertyLayout from "./Property/PropertyLayout";

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

       
        <Route path="/" element={<LayoutPages />}>
          <Route index element={<HomeLayout />} />
          <Route path="about" element={<AboutLayout />} />
          <Route path="services" element={<Serviceslayout />} />
          <Route path="contact" element={<ContactLayout />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LayoutWithoutFooter />
            </ProtectedRoute>
          }
        >
          <Route
            path="properties"
            element={
              <ProtectedRoute>
                <PropertyLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="rent"
            element={
              <ProtectedRoute>
                <AddPropertyLayoyut />
              </ProtectedRoute>
            }
          />
          <Route
            path="add-properties"
            element={
              <ProtectedRoute>
                <AddPropertyLayoyut />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved-properties"
            element={
              <ProtectedRoute>
                <SavedPropertyLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <SettingLayout />
              </ProtectedRoute>
            }
          />
           <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
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
