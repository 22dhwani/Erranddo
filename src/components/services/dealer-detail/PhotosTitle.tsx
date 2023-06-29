import Button from "../../UI/Button";
import Heading from "../../UI/Heading";

function PhotosTitle() {
  return (
    <div className="flex justify-between lg:py-5 xs:py-4 items-center">
      <div>
        <Heading
          variant="headingTitle"
          text="Photos"
          headingclassName="text-textColor !font-extrabold !font-poppins-bold tracking-wide"
        />
      </div>
      <div className=" gap-2 items-center  xs:hidden lg:flex">
        <Button
          variant="ghost"
          color="secondary"
          size="normal"
          children="Leave Review"
          buttonClassName="!px-4 py-2 text-sm tracking-wide lg:flex xs:hidden"
        />
        <Button
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
