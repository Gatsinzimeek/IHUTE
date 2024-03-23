import Passenger from '../../Assets/blob2.jpg'
import wave2 from '../../Assets/wave2.svg'

const About = () => {
  return (
    <section id='About' className='relative flex  px-12 py-4 max-md:grid  text-white text-[18px] ' style={{backgroundImage: `url(${wave2})`, backgroundRepeat: 'no-repeat', width: '100%', height: '100%', backgroundSize: 'cover'}}> 
        <div className='flex-1 my-10'>
            <h1 className='text-center text-[40px]'>About Us </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus exercitationem minus reiciendis corrupti commodi ducimus impedit dolorem vel. Accusamus aliquam porro ratione quibusdam expedita dolorum optio fugit tempora hic est!</p>
        </div>
        <div className='flex-1 max-md:mx-auto'>
            <img src={Passenger} alt="Passanger" className='rounded-[25%] w-[80%] h-[80%] shadow-2xl'/>
        </div>
    </section>
  )
}

export default About


