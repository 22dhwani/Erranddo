import BusinessSection from "./BusinessSection";
import ServiceSection from "./ServicesSection";
import WelcomeSection from "./WelcomeSection";

function HomeMainPage() {
  return (
    <div>
      <WelcomeSection />
      <BusinessSection />
      <ServiceSection />
    </div>
  );
}

export default HomeMainPage;
