import SeviceDetailMainPage from "../../components/customer/services/service-detail/SeviceDetailMainPage";
import CloseRequestProvider from "../../store/customer/close-request-context";
import ServiceContextProvider from "../../store/customer/service-context";

function ServiceDetail() {
  return (
    <ServiceContextProvider>
      <CloseRequestProvider>
        <div className="w-screen">
          <SeviceDetailMainPage />
        </div>
      </CloseRequestProvider>
    </ServiceContextProvider>
  );
}

export default ServiceDetail;
