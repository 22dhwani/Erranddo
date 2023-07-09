import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../styles/Dropdown.css";
import Sort from "../../assets/Sort.svg";

function DropdownCompoenet(props: {
  options: any;
  className?: string;
  placeholder: string;
  placeholderClassName?: string;
  isImage?: boolean;
  onChange: (newValue: any) => void;
}) {
  const [value, setValue] = useState(props.options[0]);
  return (
    <div className={` ${props.className}`}>
      {props.isImage ? "" : (<img src={Sort} className="w-5 h-5 absolute  z-[10] mt-2.5 mx-2" />)}
      <Dropdown
        className="border-[0.7px] border-black  rounded-md"
        arrowClassName="mt-1"
        placeholder={props.placeholder}
        placeholderClassName={`text-md text-textColor !font-semibold font-poppins ${props.isImage ? "ml-0" : "ml-7"}`}
        options={props.options}
        onChange={(newValue) => {
          setValue(newValue);
          props.onChange(newValue);
        }}
      />
    </div>
  );
}

export default DropdownCompoenet;
