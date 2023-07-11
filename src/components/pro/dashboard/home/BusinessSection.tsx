import Heading from "../../../UI/Heading";
import HomeCard from "./HomeCard";
import BussinessImageOne from "../../../../assets/service-image-one.png";
import BussinessImageTwo from "../../../../assets/service-image-one.png";
import BusinessItem from "./BusinessItem";
import Add from "../../../../assets/Add.tsx";
import BusinessSkeleton from "../../skeleton/BusinessSkeleton";
import { useTheme } from "../../../../store/theme-context";
import { useBusiness } from "../../../../store/pro/dashboard-context.tsx";

function BusinessSection() {
  const { theme } = useTheme();
  const { data, isLoading } = useBusiness();
  return (
    <div className="my-7">
      <Heading
        text="My Business / es"
        variant="headingTitle"
        headingclassName="!font-bold mx-1 tracking-wide dark:text-white"
      />
      <div>
        {isLoading ? (
          <BusinessSkeleton limit={3} />
        ) : (
          <div className="grid lg:grid-cols-3 my-5 gap-5 xs:grid-cols-1 ">
            {data &&
              data?.length > 0 &&
              data.map((item) => {
                return (
                  <BusinessItem
                    image={item.image}
                    title={item.name}
                    subTitle={item.services}
                    description={item.description}
                    ratingCount={item.reviews_avg_rating}
                    progress="60%"
                  />
                );
              })}
            {/* <BusinessItem
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
            /> */}
            <HomeCard
              children={
                <div className="xs:py-10 lg:py-16 border border-dashed rounded !border-[#707070] h-full flex justify-center items-center flex-col gap-5">
                  <div>
                    {theme === "light" && (
                      <div children={<Add color="black" />} />
                    )}

                    {theme === "dark" && (
                      <div children={<Add color="white" />} />
                    )}
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
        )}
      </div>
    </div>
  );
}

export default BusinessSection;
