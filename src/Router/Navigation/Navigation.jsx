import { Fragment, useEffect, useState } from 'react';
import Logo from '../../Assets/logo.png'
import {Link, Outlet} from 'react-router-dom';
import Button from '../../Component/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
  const [IsOpen, setIsopen] = useState(false);
  const [addclass, setClassName] = useState('');
  const [isSticky, setSticky] = useState(false);
  const handleEvent = () => {
    setIsopen(true);
    setClassName('navblock');
  }

  const handlescroll = () =>{
    setSticky(window.scrollY > 0);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handlescroll);

    return () =>{
      window.removeEventListener('scroll', handlescroll);
    }
  },[])

  return (
    <Fragment>
      {
          IsOpen &&
            <div className='bg-[#b2c1ce] opacity-[0.4] w-full h-[100vh]  md:hidden fixed'></div>
          
        }
        <nav className={`flex justify-between my-0 py-3  px-[39px] items-center  ${isSticky ? 'stick shadow-lg' : ''}`}>
            <Link to='/'>
                <img src={Logo} alt="logo" className='w-[100px]'/>
            </Link>
            <div className={`flex items-center gap-12 ${ IsOpen ?  'max-md:fixed bottom-2 max-md:right-0 max-md:flex max-md:flex-col max-md:fixed max-md:bottom-0 max-md:p-[40px] max-md:top-[100px] max-md:bg-white max-md:items-center z-[1000]' : 'max-md:hidden'}`}>
              <ul className='max-md:flex max-md:flex-col max-md:items-center'>
                <Link to='/' className='mx-[20px]  hover:border-b-[2px] py-[4px] border-yellow-400'>Home</Link>
                <Link to='/About' className='mx-[20px] hover:border-b-[2px] py-[4px] border-yellow-400'>About Us</Link>
                <Link to='/Testimonial' className='mx-[20px] hover:border-b-[2px] py-[4px] border-yellow-400'>Testimonial</Link>
              </ul>
              <div className='max-md:flex max-md:flex-col max-md:items-center'>
                  <Link to='/Login'><Button>Login</Button></Link>
                  <Link to='/Registration'><Button >Get Access</Button></Link>
              </div>
            </div>
            {
              IsOpen ? (  
                <span onClick={() => setIsopen(false)} className='hidden max-md:inline-block z-20'><FontAwesomeIcon icon={faXmark} className=' hover:text-yellow-400 text-[40px] cursor-pointer'/></span>
              ) : 
              (
                <span onClick={handleEvent} className='hidden max-md:inline-block'><FontAwesomeIcon icon={faBarsStaggered}  className=' hover:text-yellow-400 text-[40px]  cursor-pointer'/></span>
              )
            }
            
                   </nav>
        
        
        
        <Outlet/>

    </Fragment>
  )
}

export default Navigation;
