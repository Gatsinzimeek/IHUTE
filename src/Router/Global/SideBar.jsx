import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLocationDot,
  faBus,
  faUser,
  faCircleInfo,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../Utility/firebase";
const SideBar = () => {
  const Navbar = [
    {
      Icon: faHome,
      Title: "Dashboard",
      path: "/dashboard/home",
    },
    {
      Icon: faBus,
      Title: "Active Bus",
      path: "/dashboard/Buses",
    },

    {
      Icon: faLocationDot,
      Title: "Direction",
      path: "/dashboard/Map",
    },

    {
      Icon: faCircleInfo,
      Title: "Details",
      path: "/dashboard/Info",
    },
    {
      Icon: faUser,
      Title: "Profile",
      path: "/dashboard/setting",
    },
  ];

  const redict = useNavigate();
  const handleclick = async () => {
    await Logout();
    redict("/login");
  };

  return (
    <div className=" bg-[#fff] rounded-2xl  pt-3 h-fitcontent">
      <img src={logo} className="w-[40%] m-auto" alt="logo" />
      <div className="mt-2">
        <ul className="list-none mt-[40px]">
          {Navbar.map((nav, index) => (
            <li
              key={index}
              className="p-[10px] mb-3 text-[20px] cursor-pointer hover:bg-[#3e61ac] hover:text-white rounded-xl mx-2"
            >
              <Link to={nav.path}>
                <FontAwesomeIcon
                  icon={nav.Icon}
                  className="pl-[10px] pr-[10px]"
                />
                {nav.Title}
              </Link>
            </li>
          ))}
          <button
            className="mt-[70px] mx-[20px] p-[14px] text-[18px] hover:bg-[#3e61ac] hover:text-white rounded-xl"
            onClick={handleclick}
          >
            <FontAwesomeIcon
              icon={faArrowRightToBracket}
              className="pr-[10px] "
            />
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
