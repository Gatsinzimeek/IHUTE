import { Route,Routes } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";
import Home from "./Router/Home/Home";
import Registration from "./Router/Authentication/Registration/Registration";
import Login from "./Router/Authentication/Login/Login";
import About from "./Component/About-section/About";
import Testimonial from "./Component/Testimonial-section/Testimonial";
import Admin from "./Router/Admin/Admin";
import PrivateRoute from "./Router/PrivateRoute/PrivateRoute";
import { UserContext } from "./Context/User Context/UserContext";
import { useContext } from "react";
import Dashboard from "./Router/Dashboard/dashboard";
import Setting from "./Router/Setting/Setting";
function App() {
  const {currentUser} = useContext(UserContext);
  return (
    <Routes>
{/*       
      {
        !currentUser ? ( */}

          <Route path="/" element={<Navigation/>}>
          <Route index Component={Home}></Route>
          <Route path="/About"  Component={About}></Route>
          <Route path="/Testimonial" Component={Testimonial}></Route>
          <Route path="/Login" Component={Login}></Route>
          <Route path="/Registration" Component={Registration}></Route>
        </Route>
        {/* )

      :  */}
      {/* <Route path="/Admin" element={<PrivateRoute><Admin/></PrivateRoute>}> */}
      <Route path="/Admin" element={<Admin/>}>
          <Route path="/Admin/dashboard" Component={<Dashboard/>}></Route>
          <Route path="/Admin/setting" Component={<Setting/>}></Route>
      </Route>
      
    {/* // } */}
    </Routes>
  );
}

export default App;
