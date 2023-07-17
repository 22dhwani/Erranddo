import React from "react";
import DropdownCompoenet from "./Dropdown";
import { useService } from "../../store/pro/service-context";

function PostCodeDropDown(props: {
  onChange: (newValue: any) => void;
  className?: string;
}) {
  const { postcodes, isPostcodeLoading } = useService();
  const postcode_name: { value: number; label: string }[] = [];
  postcodes?.flatMap((item) =>
    postcode_name?.push({ value: item.id, label: item.name })
  );
  return (
    <DropdownCompoenet
      className={props.className}
      isImage={true}
      placeholder="Select A Postcode"
      options={
        isPostcodeLoading
          ? [{ value: "Please Wait", label: "Please wait" }]
          : postcode_name
      }
      onChange={(newValue) => {
        props.onChange(newValue);
      }}
    />
  );
}

export default PostCodeDropDown;
