import { useState } from 'react'
import { RegisterWithEmailAndPassword } from '../../../Utility/firebase';
import { Link, useNavigate } from 'react-router-dom'
import RegistBG from '../../../Assets/RegistB.jpg'
import Input from '../../../Component/Input/Input'
import Button from '../../../Component/button/Button'
import Goglicon from '../../../Assets/google.png'
import FacebookIcon from '../../../Assets/facebook.png'
import { LoginWithFacebook,LoginWithGoogle } from '../../../Utility/firebase'
const Registration = () => {
  const SingwithGoogle = async () => {
      const response = await LoginWithGoogle();
    };

  const [Email, SetEmail] = useState('');
  const [Pin, SetPassword] = useState('');
  const Redirect = useNavigate();

    const handleInputEmail = (e) =>{
      SetEmail(e.target.value);
    }
    const handleInputPin = (e) => {
      SetPassword(e.target.value);
    }
    const HandleSubmittion = async (e) => {
      e.preventDefault();
      if(Email === '' || Pin === '' ){
         alert('Fill all fields please');
      } else{

        try{
          RegisterWithEmailAndPassword(Email,Pin);
          Redirect('/login');
        }catch(error){
          if(error.code === 'auth/email-already-in-use'){
              alert('cannot create user, email already in use');
          }else{
              console.log('user creation encountered an error', error);
          }
        }
        SetEmail('');
        SetPassword('');
      }
    }
    
  const SingwithFacebook = async () => {
    await LoginWithFacebook()
  };
  return (
    <div className='bg-cover bg-center py-5' style={{backgroundImage: `url(${RegistBG})`}}>
        <h1 className='text-white max-md:mx-[70px] text-[40px] font-bold mx-[180px] my-5'>Create Account</h1>
      <div className='flex mx-[60px] max-md:block'>
        <Button classdata='flex' clicked={SingwithGoogle}><i><img src={Goglicon} alt="google" style={{width: '50%'}}/></i> Signin with Google</Button> 
        <Button classdata='flex' clicked={SingwithFacebook}><i><img src={FacebookIcon} alt="facebook" style={{width: '50%'}} /></i> Signin with Facebook</Button> 
      </div>
      <p className='mx-[80px] text-white text-lg px-[130px] max-md:px-[30px] text-[24px]'><span>--</span>Or <span>--</span></p>
      <form onSubmit ={HandleSubmittion} className='flex flex-col gap-8 m-[20px] my-[10px] w-[30%] mx-[80px] max-md:w-[50%]'>
      <Input types="email" values={Email}  placeholder='Enter your Username' changed={handleInputEmail}></Input>
      <Input types="password" values={Pin} placeholder='your Password' changed={handleInputPin}></Input>
      <Button>Create Account</Button>
      </form>
      
      <p className='mx-[120px] text-lg my-5'>Already have an Account? <Link to='/Login'className='text-white'>Log in</Link> </p>
    </div>
  )
}

export default Registration;
