import SeviceDetailMainPage from "../../components/customer/services/service-detail/SeviceDetailMainPage";
import CloseRequestProvider from "../../store/customer/close-request-context";
import ReviewContextProvider from "../../store/customer/review-context";
import ServiceContextProvider from "../../store/customer/service-context";

function ServiceDetail() {
  return (
    // <ServiceContextProvider>
      <CloseRequestProvider>
        <ReviewContextProvider>
          <div className="w-screen">
            <SeviceDetailMainPage />
          </div>
        </ReviewContextProvider>
      </CloseRequestProvider>
    // </ServiceContextProvider>
  );
}

export default ServiceDetail;
