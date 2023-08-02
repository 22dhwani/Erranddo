import SeviceDetailMainPage from "../../components/customer/services/service-detail/SeviceDetailMainPage";
import ServiceContextProvider from "../../store/customer/service-context";

function ServiceDetail() {
  return (
    <ServiceContextProvider>
      <div className="w-screen">
        <SeviceDetailMainPage />
      </div>
    </ServiceContextProvider>
  );
}

export default ServiceDetail;
