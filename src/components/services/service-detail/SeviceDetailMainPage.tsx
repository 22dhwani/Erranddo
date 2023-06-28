import DetailHero from "../../../assets/detail-hero.png";
import Navigation from "../../UI/Navigation";

function SeviceDetailMainPage() {
  return (
    <div className="">
      <img
        src={DetailHero}
        className="w-full h-[26.80965147453083vh] object-cover xs:object-center "
      />
      <Navigation />
    </div>
  );
}

export default SeviceDetailMainPage;
