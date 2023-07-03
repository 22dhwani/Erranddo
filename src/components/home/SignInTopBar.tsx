import ErranddoLogo from "../../assets/Group 1@3x.png";
import { Navigate, useNavigate } from "react-router";

function SignInTopBar() {
  const navigate = useNavigate();
  const topbarClassName =
    "bg-white dark:bg-black fixed top-0 py-4 xl:px-36 lg:px-24 xs:px-5 flex shadow-md justify-between w-screen items-center xl:h-[8.651474530831099vh] lg:h-[9.651474530831099vh] xs:h-[9.051474530831099vh] z-[100]";
  return (
    <div className={topbarClassName}>
      <div className=" my-1 xs:w-3/6 lg:w-max">
        <button onClick={() => navigate("/home")}>
          <img
            src={ErranddoLogo}
            className="lg:w-80 xs:w-full object-contain"
          />
        </button>
      </div>
      <div className="flex items-center">
        <div className="pr-5">
          <ul className="flex gap-3 flex-col mt-4 xl:text-lg md:text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:text-semibold">
            <li>
              <button
                className="text-[#707070]  dark:text-white"
                onClick={() => navigate("/signup-customer")}
              >
                <p className="font-normal font-poppins">Sign Up</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="">
          <button
            type="button"
            className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => navigate("/signup-pro")}
          >
            Register as a Pro
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInTopBar;
