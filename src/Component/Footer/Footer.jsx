import Logo from '../../Assets/logo.png'
import Button from '../button/Button'
const Footer = () => {
  return (
    <div className='bg-[#f5f6f7] flex justify-center gap-3'>
      <div>
        <img src={Logo} alt="logo"/>
        <p>We are here for you to help you to Save time</p>
        <div>
          <p>Kigali, Rwanda</p>
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
  )
}

export default Footer
