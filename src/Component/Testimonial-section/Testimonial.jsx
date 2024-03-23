import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile1 from '../../Assets/profile1.jpg';
import profile2 from '../../Assets/profile2.jpg'
import PersonDetail from '../Person-details/PersonDetail';
import Button from '../button/Button';
const Testimonial = () => {
  return (
    <section id='Testimonial' className='text-center m-12 relative'>
       <h1 className='text-[30px] mb-[30px]'>What Our Customer say</h1>
       <div className='flex justify-center'>
          <PersonDetail image={profile1} name='Igihozo Audrey' />
          <PersonDetail image={profile2} name='Gatsinzi Ernest' />
          {/* <PersonDetail image={profile1} name='Igihozo Audrey' />
          
          <PersonDetail image={profile1} name='Igihozo Audrey' />
          <PersonDetail image={profile1} name='Igihozo Audrey' /> */}
       </div>
       <Button classdata='fixed bg-white text-black shadow-xl hover:text-white absolute bottom-[120px] right-[170px] max-md:right-[1px]'>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
      <Button classdata='fixed bg-white text-black shadow-xl hover:text-white absolute bottom-[120px] left-[170px] max-md:left-[1px]'>
         <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </section>
  )
}

export default Testimonial
