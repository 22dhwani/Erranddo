import NavigateSettingsModal from "../../../../layout/pro-models/NavigateSettingsModal";
import { useAuth } from "../../../../store/customer/auth-context";
import BusinessSection from "./BusinessSection";
import ServiceSection from "./ServicesSection";
import WelcomeSection from "./WelcomeSection";

function HomeMainPage() {
  const { userData } = useAuth()
  console.log(userData, "dkfjsbdij");


  return (
    <div>
      {
        userData?.address && userData?.city && userData?.postcode_id ? (
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
      {/* <WelcomeSection />
      <BusinessSection />
      <ServiceSection /> */}
    </div>
  );
}

export default HomeMainPage;
