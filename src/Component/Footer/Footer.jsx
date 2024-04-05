import Logo from '../../Assets/logo.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <footer className='bg-[#fff]'>
    <div className='flex justify-center  gap-3'>
      <div>
        <img src={Logo} className='w-[120px]' alt="logo"/>
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
      <div className='flex-5'>
        <h1>Company</h1>
        
        <Link to='#'>About</Link> 
        <Link to='#'>Testimonial</Link> 
        <Link to='#'>FAQ</Link> 
        <Link to='#'>Contact Us</Link> 
      </div>
      <div>
        <h1> Give Us FeedBack</h1>
        <p>
          We are ready to hear what you think about us, feedBack or recommendations.
        </p>
        <textarea name="Enter you feedback here..." className='border-3' cols="35" rows="4"></textarea><br />
        <Button>Send Feedback</Button>
      </div>
    </div>
    <div className='flex justify-center justify-items-center border-t border-[#ccc] p-7 mt-3'>
      <div>
        <p> &copy; Ihute All Rights Reserved. Developed by Gatsinzi Meek</p>
      </div>
    </div>
    </footer>
  )
}

export default Footer
