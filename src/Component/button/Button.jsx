const Button = ({children, ...otherProps}) => {

  const { classdata, clicked } = otherProps;

  return (
    <button className={`text-center py-[15px] px-[24px] m-[10px]  rounded-[25px] text-white bg-yellow-400 hover:bg-[#3e61ac] shadow-md ${classdata}`} onClick={clicked}>{children}</button>
  )
}

export default Button;