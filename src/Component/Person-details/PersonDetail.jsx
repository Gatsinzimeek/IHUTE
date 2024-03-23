import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import rateBlack from '../../Assets/rateBlack.png';
import rateYellow from '../../Assets/rateYellow.png';

const PersonDetail = ({...otherProps}) => {
    const {image, name, description} = otherProps;
  return (
    <div className="w-[39%] h-[60%] p-10 m-auto rounded-[15%] shadow-2xl max-md:w-[80%]">
    <FontAwesomeIcon icon={faQuoteLeft} style={{float:'left', fontSize: '30px',margin:'10px', color: '#ccc'}}/>
      <p className="m-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum quisquam officia obcaecati cumque est culpa perferendis neque deserunt! Repudiandae, tempore neque! Laboriosam dolore itaque mollitia commodi numquam. In, recusandae.
      <FontAwesomeIcon icon={faQuoteRight} style={{fontSize: '30px',float:"right", margin:'5px', color: '#ccc'}}/>
      </p>
      
      <img src={image} style={{width:'70px',height: '75px',margin: 'auto', borderRadius: '50px'}} alt="Profile" />
      <h1>{name}</h1>
      <div className="flex justify-center">
        <img src={rateYellow} style={{width: '25px', height: '25px'}} alt="rate" />
        <img src={rateYellow} style={{width: '25px', height: '25px'}} alt="rate" />
        <img src={rateYellow} style={{width: '25px', height: '25px'}} alt="rate" />
        <img src={rateYellow} style={{width: '25px', height: '25px'}} alt="rate" />
        <img src={rateBlack} style={{width: '25px', height: '25px'}}  alt="rate" />  
      </div>      
    </div>
  )
}

export default PersonDetail
