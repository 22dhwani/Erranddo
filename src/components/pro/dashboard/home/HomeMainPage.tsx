import NavigateSettingsModal from "../../../../layout/pro-models/NavigateSettingsModal";
import BusinessSection from "./BusinessSection";
import ServiceSection from "./ServicesSection";
import WelcomeSection from "./WelcomeSection";

function HomeMainPage() {
  const user = localStorage.getItem('data')
  const data = JSON.parse(user ?? '')

  return (
    <div>
      {
        data?.address && data?.city && data?.postcode_id ? (
          <>
            <WelcomeSection />
            <BusinessSection />
            <ServiceSection />
          </>
        ) : (
          <>
            {
              <NavigateSettingsModal />
            }
            <WelcomeSection />
            <BusinessSection />
            <ServiceSection />
          </>
        )
      }

    </div>
  );
}

export default HomeMainPage;
