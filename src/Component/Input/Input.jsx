const Input = ({...otherProps}) => {
  const {placeholder, values, types, changed} = otherProps;
  return (
      <input value={values} type={types} onChange={changed} className="p-[10px] outline-none rounded-md shadow-md" placeholder={placeholder} />
  )
}

export default Input
