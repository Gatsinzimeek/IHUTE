import Logo from '../../Assets/logo.png'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='bg-[#fff]'>
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
      <div>
        <h1> Give Us FeedBack</h1>
        <p>
          We are ready to hear what you think about us, feedBack or recommendations.
        </p>
        <textarea name="Enter you feedback here..." id="" cols="35" rows="4"></textarea><br />
        <Button>Send Feedback</Button>
      </div>
    </div>
    <div style={{content: '', }} className='flex justify-center justify-items-center'>
      <div>
        <p> &copy; gutwara.com All Rights Reserved. Developed by Gatsinzi Meek</p>
      </div>
      <div>
        <Link to='#'>Terms & Condition</Link> 
        <Link to='#'>Privacy Policy</Link> 
      </div>
    </div>
    </div>
  )
}

export default Footer
