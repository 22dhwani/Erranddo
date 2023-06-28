import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../styles/Dropdown.css";

function DropdownCompoenet(props: {
  options: any;
  className?: string;
  onChange: (newValue: any) => void;
}) {
  const [value, setValue] = useState(props.options[0]);
  return (
    <div className={` ${props.className}`}>
      <Dropdown
        className="rounded-md"
        arrowClassName="mt-1"
        placeholderClassName="text-sm font-sans text-slate-600"
        options={props.options}
        onChange={(newValue) => {
          setValue(newValue);
          props.onChange(newValue);
        }}
        value={value}
        placeholder="Select an option"
      />
    </div>
  );
}

export default DropdownCompoenet;
