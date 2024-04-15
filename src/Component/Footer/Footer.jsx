import Logo from "../../Assets/logo.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-[#fff] w-[100%]">
      <div className="flex justify-around  max-md:grid max-sm:items-center  gap-3">
        <div>
          <img src={Logo} className="w-[120px]" alt="logo" />
          <p>We are here for you to help you to Save time</p>
          <div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} /> hackergastinzi@gmial.com
            </div>
            <div>
              <FontAwesomeIcon icon={faPhoneVolume} /> +250 781 987 858
            </div>
          </div>
        </div>
        <div className="flex-5">
          <h1 className="my-4 text-[20px]">
            Company{" "}
            <span className="block border-b border-b-px w-[40px] border-[#3e61ac]"></span>
          </h1>
          <div>
            <ul className="leading-[2em]">
              <li>
                <Link
                  to="#"
                  className="hover:border-b-[2px] py-[4px] border-yellow-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:border-b-[2px] py-[4px] border-yellow-400"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:border-b-[2px] py-[4px] border-yellow-400"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:border-b-[2px] py-[4px] border-yellow-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="my-4 text-[20px]">
            {" "}
            Give Us FeedBack{" "}
            <span className="block border-b border-b-px w-[80px] border-[#3e61ac]"></span>
          </h1>
          <p>
            We are ready to hear what you think about us,
            <br /> feedBack or recommendations.
          </p>
          <textarea
            name="Enter you feedback here..."
            placeholder="Prodive your Insight of Improvement ...."
            className="p-3 outline-none border-[1px] border-solid border-[#ccc] rounded-lg"
            cols="35"
            rows="4"
          ></textarea>
          <br />
          <Button>Send Feedback</Button>
        </div>
      </div>
      <div className="flex justify-center justify-items-center border-t border-[#ccc] p-7 mt-3">
        <p> &copy; Ihute All Rights Reserved. Developed by Gatsinzi Meek</p>
      </div>
    </footer>
  );
};

export default Footer;
