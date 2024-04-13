import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {motion} from 'framer-motion';
const FaqBox = ({FaqInfo, id}) => {
    
    const [selected, setSelected] = useState(null);
    const handleClick = (i) => {
         if(selected === id) {
            setSelected(null);
         }else{
            setSelected(i)
         }
    }
  return (
        <motion.div animate={{x: 0}} initial={{x: '-100%'}} className='bg-white w-fitcontent rounded-md shadow-xl m-[14px] p-[10px]'>
                    <h1 className='flex justify-between m-1'><span className='font-bold text-[20px]'>{FaqInfo.Question}</span> <span className='border pt-[5px] pb-[6px] p-[9px] cursor-pointer  rounded-[50%] hover:bg-yellow-400 hover:text-white ' onClick={ () => handleClick(id)}><FontAwesomeIcon icon={selected === id ? faChevronDown: faChevronUp} /></span></h1>
                    {
                        selected === id && <p className='text-left'>{FaqInfo.Answer}</p>
                    }
        </motion.div>
  )
}

export default FaqBox
