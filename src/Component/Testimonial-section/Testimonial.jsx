import profile1 from '../../Assets/profile1.jpg';
import profile2 from '../../Assets/profile2.jpg'
import PersonDetail from '../Person-details/PersonDetail';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section id='Testimonial' className='text-center m-12 relative'>
       <h1 className='text-[30px] mb-[20px]'>What Our Customer say</h1>
       <p className='w-[50%] m-auto text-center'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      <Carousel responsive={responsive} className='w-[80%] m-auto p-10 '>
       
          <PersonDetail image={profile1} name='Igihozo Audrey' />
          <PersonDetail image={profile2} name='Gatsinzi Ernest' />
          <PersonDetail image={profile1} name='Igihozo Audrey' />
          
          <PersonDetail image={profile1} name='Igihozo Audrey' />
          <PersonDetail image={profile1} name='Igihozo Audrey' />
    </Carousel>
    </section>
  )
}

export default Testimonial
