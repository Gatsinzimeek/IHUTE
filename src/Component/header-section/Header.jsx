import Button from "../../Component/button/Button";
import {Link} from 'react-router-dom';
import Bus from '../../Assets/blob.jpg';
import HeaderBg from '../../Assets/blob3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';

const Header = () => {
  return (
  <header className="flex justify-center h-fit items-center max-md:grid" style={{backgroundImage: `${HeaderBg}`}}>
    <div className="text-center w-[50%] max-md:w-full my-4 ">
        <h4 className="text-[19px]">Welcome to Ihute</h4>
        <motion.h1 animate={{y: 0}} initial={{y: '100vh'}} className="text-[75px] leading-[1.0] p-5">On Time Saver Bus Tracking System</motion.h1>
        <p className="text-[20px] my-5">Bus Tracking System is the Online System That comes to  solve issue of wasting time to public Station</p>
        
        <Link to='/login'><Button>Login <span><FontAwesomeIcon icon={faArrowRight} /></span></Button></Link>
    </div>
    <div>
        <img src={Bus} alt="bus" className="w-[90%] mx-auto bg-black"/>
    </div>
  </header>
  )
}

export default Header;
