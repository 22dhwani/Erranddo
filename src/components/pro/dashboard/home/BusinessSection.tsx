import Heading from "../../../UI/Heading";
import HomeCard from "./HomeCard";
import BussinessImageOne from "../../../../assets/service-image-one.png";
import BussinessImageTwo from "../../../../assets/service-image-one.png";
import BusinessItem from "./BusinessItem";
import Add from "../../../../assets/Add.svg";

function BusinessSection() {
  return (
    <div className="my-7">
      <Heading
        text="My Business / es"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide dark:text-white"
      />

      <div className="grid lg:grid-cols-3 my-5 gap-5 xs:grid-cols-1 ">
        <BusinessItem
          image={BussinessImageOne}
          title="TV Guru Limited"
          subTitle="TV Installation, TV Wall Mounting CCTV Installation"
          description="We are a family business running for over 20 years and specialize in TV Installation in London."
          ratingCount={4}
          progress="60%"
        />

        <BusinessItem
          image={BussinessImageTwo}
          title="TV Guru Limited"
          subTitle="TV Installation, TV Wall Mounting CCTV Installation"
          description="We are a family business running for over 20 years and specialize in TV Installation in London."
          ratingCount={4}
          progress="30%"
        />
        <HomeCard
          children={
            <div className="xs:py-10 dark:bg-primaryYellow   lg:py-0 border border-dashed rounded !border-[#707070] h-full flex justify-center items-center flex-col gap-5">
              <div>
                <img src={Add} />
              </div>
              <Heading
                text={"Add Business"}
                variant="subHeader"
                headingclassName={` !font-semibold tracking-wide !text-lg text-slate-700  dark:text-slate-400`}
              />
            </div>
          }
          className="!bg-transparent "
        />
      </div>
    </div>
  );
}

export default BusinessSection;
