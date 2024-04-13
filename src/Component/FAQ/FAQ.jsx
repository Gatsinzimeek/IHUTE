import Faq from '../../Assets/FAQ.jpeg'
import bg from '../../Assets/bg.JPG'
import FaqBox from '../FaqBox/FaqBox'
import {motion} from 'framer-motion';
const FAQ = () => {
    const FaqData = [
        {
            Question: 'What is IHUTE?',
            Answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae, doloremque, vero excepturi eligendi et fuga atque.'
        },
        {
            Question: 'How Does it work',
            Answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae, doloremque, vero excepturi eligendi et fuga atque.'
        },
        {
            Question: 'How it will solve waste of Time on Bus Station',
            Answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae, doloremque, vero excepturi eligendi et fuga atque.'
        },
        {
            Question: 'What it Take to reach Out Station',
            Answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae, doloremque, vero excepturi eligendi et fuga atque.'
        }
    ]
  return (
    <section className='text-center mt-[20px] pt-12 pb-12' style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'none', backgroundSize: 'cover'}}  id='FAQ'>
        <h1 className='text-yellow-400 mb-[10px] font-bold text-[23px]'> FAQ</h1>
        <h2 className='text-[45px] font-extrabold'>Learn About Features form FAQ <span className='block m-auto border-b border-b-px w-[180px] border-yellow-400'></span></h2>
        <p className='w-[35%] max-sm:w-[70%] mb-[40px] mt-[20px] m-auto'>All information submitted through the client intake form is stored securely and protected by industry-standard Encryption measures to ensure confidentially.</p>
        <div className='flex  justify-around gap-4 pl-[100px] pr-[20px] items-start max-md:grid'>
            <div className='w-[50%] max-md:w-[100%] max-md:items-center'>
                {
                    FaqData.map( (data, index) => {
                        return (
                            <FaqBox key={index} FaqInfo={data} id={index} />)
                    })
                }
            </div>
            <div >
                <img src={Faq} className='rounded-[50px] w-[75%]' alt="FAQ" />
            </div>
        </div>
       
    </section>
  )
}

export default FAQ
