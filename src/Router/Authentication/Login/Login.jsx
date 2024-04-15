import { useState } from "react";
import {
  LoginWithGoogle,
  LoginWithFacebook,
  LoginWithEmailAndPassword,
} from "../../../Utility/firebase";
import { Link, useNavigate } from "react-router-dom";
import BG from "../../../Assets/LoginBg.jpg";
import Input from "../../../Component/Input/Input";
import Button from "../../../Component/button/Button";
import Goglicon from "../../../Assets/google.png";
import FacebookIcon from "../../../Assets/facebook.png";
const Login = () => {
  const SingwithGoogle = async () => {
    await LoginWithGoogle();
    Redirect("/dashboard/home");
  };
  const SingwithFacebook = async () => {
    await LoginWithFacebook();
  };

  const [Email, SetEmail] = useState("");
  const [Pin, SetPassword] = useState("");
  const Redirect = useNavigate();

  const handleInputEmail = (e) => {
    SetEmail(e.target.value);
  };
  const handleInputPin = (e) => {
    SetPassword(e.target.value);
  };
  const HandleSubmittion = (e) => {
    e.preventDefault();
    if (Email === "" || Pin === "") {
      alert("Fill all fields please");
    } else {
      try {
        LoginWithEmailAndPassword(Email, Pin);
        Redirect("/dashboard/home");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("cannot create user, email already in use");
        } else {
          console.log("user creation encountered an error", error);
        }
      }
      SetEmail("");
      SetPassword("");
    }
  };

  return (
    <div
      className="bg-cover bg-center min-xl:h-fit py-6"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <h1 className="text-white text-[40px] max-md:mx-[70px] font-bold mx-[180px] my-5">
        Login Here
      </h1>
      <div className="flex mx-[60px] max-md:block">
        <Button classdata="flex" clicked={SingwithGoogle}>
          <i>
            <img src={Goglicon} alt="google" style={{ width: "50%" }} />
          </i>{" "}
          Signin with Google
        </Button>
        <Button classdata="flex" clicked={SingwithFacebook}>
          <i>
            <img src={FacebookIcon} alt="facebook" style={{ width: "50%" }} />
          </i>{" "}
          Signin with Facebook
        </Button>
      </div>
      <p className="mx-[80px] text-white text-lg px-[130px] max-md:px-[30px] text-[24px]">
        <span>--</span>Or <span>--</span>
      </p>
      <form
        onSubmit={HandleSubmittion}
        className="flex flex-col gap-8 m-[22px] w-[30%] mx-[80px] max-md:w-[50%]"
      >
        <Input
          types="email"
          values={Email}
          placeholder="Enter your Username"
          changed={handleInputEmail}
        ></Input>
        <Input
          types="password"
          values={Pin}
          placeholder="Enter your Password"
          changed={handleInputPin}
        ></Input>
        <Button>Sign In</Button>
      </form>
      <p className="mx-[120px] text-lg">
        Not has an Account Yet?{" "}
        <Link to="/Registration" className="text-white">
          Create Account
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
