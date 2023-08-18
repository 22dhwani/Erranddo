import NavigateSettingsModal from "../../../../layout/pro-models/NavigateSettingsModal";
import { useAuth } from "../../../../store/customer/auth-context";
import BusinessSection from "./BusinessSection";
import ServiceSection from "./ServicesSection";
import WelcomeSection from "./WelcomeSection";

function HomeMainPage() {
  const { userData, isDetailLoading } = useAuth();

  return (
    <div>
      {(!userData?.address || !userData?.city || !userData?.postcode_id) &&
        !isDetailLoading && <>{<NavigateSettingsModal />}</>}

      <WelcomeSection />
      <BusinessSection />
      <ServiceSection />
    </div>
  );
}

export default HomeMainPage;
