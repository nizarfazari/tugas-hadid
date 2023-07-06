// ini adalah input login
// testing dari sini masbroo
const InputLogin = ({ type = "text", placeholder }) => {
  return <input type={type} className="w-[462px] rounded-[30px] pl-[20px] h-[50px] outline-none" placeholder={placeholder} />;
};

export default InputLogin;
