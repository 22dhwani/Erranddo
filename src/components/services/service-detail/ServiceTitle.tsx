import Button from "../../UI/Button";
import Heading from "../../UI/Heading";

function ServiceTitle() {
  return (
    <div className="flex justify-between lg:py-5 xs:py-4 items-center">
      <div>
        <Heading
          variant="headingTitle"
          text="TV Wall Mounting - 05/05/2023"
          headingclassName="text-primaryBlue !font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor "
        />
      </div>
      <div>
        <Button
          variant="filled"
          color="secondary"
          size="normal"
          children="Close Request"
          buttonClassName="!px-4 py-2 text-sm tracking-wide md:flex xs:hidden"
        />
      </div>
    </div>
  );
}

export default ServiceTitle;
