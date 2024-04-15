import { Outlet } from "react-router-dom";
import TopBar from "../Global/TopBar";
import SideBar from "../Global/SideBar";
const Dashboard = () => {
  return (
    <div className="flex justify-between ">
      <SideBar />
      <main className="w-[80%] min-h-[100vh] flex flex-col">
        <TopBar></TopBar>
        <Outlet />
        <div className="mt-auto flex justify-center justify-items-center border-t border-[#ccc] p-7 ">
          <p> &copy; Ihute All Rights Reserved. Developed by Gatsinzi Meek</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
