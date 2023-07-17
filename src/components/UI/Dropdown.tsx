import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../styles/Dropdown.css";
import Sort from "../../assets/Sort.svg";

function DropdownCompoenet(props: {
  initialId?: number;
  options: any;
  className?: string;
  placeholder: string;
  placeholderClassName?: string;
  isImage?: boolean;
  onChange: (newValue: any) => void;
}) {
  const [value, setValue] = useState(props.options);

  return (
    <div className={` ${props.className}`}>
      {props.isImage ? (
        ""
      ) : (
        <img src={Sort} className="w-5 h-5 absolute  z-[10] mt-2.5 mx-2" />
      )}
      <Dropdown
        className="border-[0.7px] border-black  rounded-lg dark:bg-black text-sm w-full py-0.5 font-poppins "
        arrowClassName="mt-1"
        placeholder={props.placeholder}
        placeholderClassName={`text-base placeholder:text-slate-400 !font-normal font-poppins dark:text-slate-400 ${
          props.isImage ? "ml-0" : "ml-7"
        }`}
        // value={value}
        options={props.options}
        onChange={(newValue) => {
          console.log(newValue);
          setValue(newValue);
          props.onChange(newValue);
        }}
      />
    </div>
  );
}

export default DropdownCompoenet;
