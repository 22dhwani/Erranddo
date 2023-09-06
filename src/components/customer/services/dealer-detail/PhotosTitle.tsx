import { useLocation } from "react-router";
import Button from "../../../UI/Button";
import Heading from "../../../UI/Heading";

function PhotosTitle() {
  const location = useLocation();
  const state = location.state;
  console.log(state, "kjhasbdsh");

  return (
    <div className="flex justify-between lg:py-5 xs:py-4 items-center">
      <div>
        <Heading
          variant="headingTitle"
          text="Photos"
          headingclassname="text-textColor !font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor"
        />
      </div>
      <div className=" items-center  xs:hidden lg:flex">
        <Button
          disabled={
            state?.isInterested
          }
          variant="filled"
          color="primary"
          size="normal"
          children="Show interest to get Quote"
          buttonClassName="!px-4 py-2 text-sm tracking-wide lg:flex xs:hidden"
        />
      </div>
    </div>
  );
}

export default PhotosTitle;
