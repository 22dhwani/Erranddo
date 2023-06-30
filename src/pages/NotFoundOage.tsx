import NotFoundImage from "../assets/NotFoundPage.png";
import Heading from "../components/UI/Heading";

function NotFoundOage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10 bg-slate-300">
      <img src={NotFoundImage} className="w-3/6" />
      <div className="flex items-center gap-7">
        <Heading
          variant="headingTitle"
          text="404 Page Not Found"
          headingclassName="text-red-600 !font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor !text-3xl"
        />
      </div>
    </div>
  );
}

export default NotFoundOage;
