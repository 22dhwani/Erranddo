import DropdownCompoenet from "./Dropdown";
import { useService } from "../../store/pro/service-context";
import useSWR from "swr";
import { fetcher } from "../../store/customer/home-context";
import { Postcode } from "../../models/pro/service";

function PostCodeDropDown(props: {
  onChange: (newValue: any) => void;
  className?: string;
}) {
  const postCodeUrl = `https://erranddo.kodecreators.com/api/v1/postcodes`;
  const { data: postCodeData, isLoading: isPostcodeLoading } = useSWR(
    postCodeUrl,
    fetcher
  );
  const post_code: Postcode[] = postCodeData?.data;
  const postcode_name: { value: number; label: string }[] = [];
  post_code?.flatMap((item) =>
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
