import { Route,Routes } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";
import Home from "./Router/Home/Home";
import Registration from "./Router/Authentication/Registration/Registration";
import Login from "./Router/Authentication/Login/Login";
import About from "./Component/About-section/About";
import Testimonial from "./Component/Testimonial-section/Testimonial";
import Dashboard from "./Router/Dashboard/dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index Component={Home}></Route>
        <Route path="/About"  Component={About}></Route>
        <Route path="/Testimonial" Component={Testimonial}></Route>
        <Route path="/Login" Component={Login}></Route>
        <Route path="/Registration" Component={Registration}></Route>
      </Route>
      <Route path="/Dashboard" element={<Dashboard/>}>
        <Route></Route>
      </Route>
    </Routes>
  );
}

export default App;
