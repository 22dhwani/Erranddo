import DetailHero from "../../../assets/detail-hero.png";
import ServiceImageOne from "../../../assets/service-image-one.png";
import ServiceImageTwo from "../../../assets/service-image-two.png";
import ServiceImageThree from "../../../assets/service-image-three.png";

import Button from "../../UI/Button";
import Navigation from "../../UI/Navigation";
import AnswersSections from "./AnswersSections";
import FilterSection from "./FilterSection";
import ServiceItemsSection from "./ServiceItemsSection";
import ServiceTitle from "./ServiceTitle";

function SeviceDetailMainPage() {
  const array = [
    { question: "How big is your TV", answer: "51-65 inches" },
    { question: "Have you got a bracket ?", answer: "Yes, I have a Bracket" },
    { question: "Wall Type ?", answer: "Brick Wall" },
    { question: "Location", answer: "SE4 2PT" },
    {
      question: "Cable Concealing Options",
      answer: "I do not need cable concealing",
    },
    { question: "Comments", answer: "None" },
  ];
  const services = [
    {
      icon: ServiceImageOne,
      title: "TV Guru Limited",
      subTitle: "TV Installation, TV Wall Mounting, CCTV Installation",
      description:
        "We are a family business running for over 20 years and specialize in TV Installation in London.",
      location: 5,
      ratingCount: 4,
      isInterested: true,
    },
    {
      icon: ServiceImageTwo,
      title: "TV Experts",
      subTitle: "TV Installation, TV Wall Mounting, CCTV Installation",
      description:
        "We are a family business running for over 20 years and specialize in TV Installation in London.",
      location: 12,
      ratingCount: 4,
      isInterested: false,
    },
    {
      icon: ServiceImageThree,
      title: "Shepards Bush TV",
      subTitle: "TV Installation, TV Wall Mounting, CCTV Installation",
      description:
        "We are a family business running for over 20 years and specialize in TV Installation in London.",
      location: 8,
      ratingCount: 3,
      isInterested:false
    },
  ];
  return (
    <div className="">
      <img
        src={DetailHero}
        className="w-full h-[24.80965147453083vh] object-cover xs:object-center "
      />
      <div className="lg:mx-20 xl:mx-36 xs:mx-5">
        <Navigation isButton={true} />
        <ServiceTitle />
        <AnswersSections array={array} />
        <div>
          <Button
            variant="filled"
            color="secondary"
            size="normal"
            children="Close Request"
            centerClassName="flex items-center justify-center"
            buttonClassName="!px-4 py-2 text-sm tracking-wide md:hidden  w-full "
          />
          <FilterSection />
          <ServiceItemsSection services={services} />
        </div>
      </div>
    </div>
  );
}

export default SeviceDetailMainPage;
