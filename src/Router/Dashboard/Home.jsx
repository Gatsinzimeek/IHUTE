import { Logout } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/button/Button";
const AdminHome = () => {
  const redict = useNavigate();
  const handleclick = async () => {
    await Logout();
    redict("/login");
  };
  return (
    <div>
      <p>admin home</p>
      <Button clicked={handleclick}>Logout</Button>
    </div>
  );
};

export default AdminHome;
