import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/User Context/UserContext";
import { useContext } from "react";

const PrivateLoginRouter = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  if (currentUser) {
    return <Navigate to="/dashboard/home" />;
  }
  return children;
};

export default PrivateLoginRouter;
