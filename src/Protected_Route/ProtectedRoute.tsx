import Layout from "../Auth/Layout";
import Login from "../Auth/Login";
import { useContextStore } from "../Store/Context";

type childProp = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: childProp) => {
  const { isLoggedIn, token } = useContextStore();
  return isLoggedIn && token ? (
    <> {children} </>
  ) : (
    <Layout>
      <Login />
    </Layout>
  );
};

export default ProtectedRoute;
