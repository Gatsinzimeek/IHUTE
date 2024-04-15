import { Route, Routes } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";
import Home from "./Router/Home/Home";
import Registration from "./Router/Authentication/Registration/Registration";
import Login from "./Router/Authentication/Login/Login";
import About from "./Component/About-section/About";
import Testimonial from "./Component/Testimonial-section/Testimonial";
import PrivateRoute from "./Router/PrivateRoute/PrivateRoute";
import { UserContext } from "./Context/User Context/UserContext";
import { useContext } from "react";
import Dashboard from "./Router/Dashboard/dashboard";
import Setting from "./Router/Setting/Setting";
import Map from "./Router/Map/Map";
import AdminHome from "./Router/Dashboard/Home";
import PrivateLoginRouter from "./Router/PrivateRoute/PrivateLoginRouter";
function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateLoginRouter>
            <Navigation />
          </PrivateLoginRouter>
        }
      >
        <Route index Component={Home}></Route>
        <Route path="About" Component={About}></Route>
        <Route path="Testimonial" Component={Testimonial}></Route>
        <Route path="Login" Component={Login}></Route>
        <Route path="Registration" Component={Registration}></Route>
      </Route>

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="home" element={<AdminHome />}></Route>
        <Route path="setting" element={<Setting />}></Route>
        <Route path="map" element={<Map />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
