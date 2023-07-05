import HomeTopBar from "../../components/customer/home/HomeTopBar";
import { useAuth } from "../../store/auth-context";
import TopBar from "../../components/customer/services/top-bar/TopBar";
import 'swiper/css';
import HomePageDetails from "../../components/customer/home/HomePageDetails";
import HomeServiceContextProvider from "../../store/home-context";

function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="overflow-x-hidden">
      {isLoggedIn ? <TopBar /> : <HomeTopBar />}
      <HomePageDetails />
    </div>
  );
}

export default HomePage;
