import { useState } from "react";
import Select from "react-select";



const Dropdown = ({ title, placeholder, data }) => {

const [selectedValue ,setSelectedValue] = useState('')
const customStyle = {
  control: (provided) => ({
    ...provided,
    height : '100%',
    cursor : 'pointer'
  })
}

  return (
    <div className="">
      <h1 className="font-semibold text-[14px] leading-[18px] text-[#666666] mb-2">{title}</h1>
      <Select
      styles={customStyle}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#0e8388",
            primary: "#0e8388",
          },
        })}
        value={selectedValue}
        onChange={setSelectedValue}
        classNamePrefix="custom-select "
        className="w-[400px] rounded-[30px] h-[50px] outline-none "
        options={data}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Dropdown;
