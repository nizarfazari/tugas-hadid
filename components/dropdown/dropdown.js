import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Dropdown = ({ title, placeholder, data }) => {
  return (
    <div>
      <h1 className="font-semibold text-[14px] leading-[18px] text-[#666666] mb-2">{title}</h1>
      <Select
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#0e8388",
            primary: "#0e8388",
          },
        })}
        options={data}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Dropdown;
