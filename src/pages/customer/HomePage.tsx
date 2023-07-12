import HomeTopBar from "../../components/customer/home/HomeTopBar";
import { useAuth } from "../../store/customer/auth-context";
import TopBar from "../../components/customer/services/top-bar/TopBar";
import "swiper/css";
import HomePageDetails from "../../components/customer/home/HomePageDetails";
import HomeServiceContextProvider from "../../store/customer/home-context";

function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="overflow-x-hidden">
      {/* {isLoggedIn ? <TopBar /> : <HomeTopBar />} */}
      <HomeTopBar />
      <HomePageDetails />
    </div>
  );
}

export default HomePage;
