import { useNavigate } from "react-router";
import NotFoundImage from "../../assets/404.svg";
import Button from "../../components/UI/Button";
import Heading from "../../components/UI/Heading";

function NotFoundOage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10 bg-gray-200 dark:bg-simpleGray">
      <img src={NotFoundImage} className="" />
      <div className="">
        <Heading
          variant="headingTitle"
          text="Sorry we cannot find the page you are looking for"
          headingclassName="!font-poppins dark:text-darktextColor !text-2xl text-center"
        />
      </div>
      <Button
        variant="filled"
        color="primary"
        centerClassName="flex justify-center items-center"
        type="submit"
        onClick={() => navigate("/home")}
      >
        Back to home
      </Button>
    </div>
  );
}

export default NotFoundOage;
