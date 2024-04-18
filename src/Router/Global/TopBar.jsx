import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
const TopBar = () => {
  return (
    <div className="flex items-center ">
      <span className=" max-md:inline-block">
        <FontAwesomeIcon
          icon={faBars}
          className=" hover:text-yellow-400 text-[40px]  cursor-pointer"
        />
      </span>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-2xl"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute top-0" />
      </div>
    </div>
  );
};

export default TopBar;
