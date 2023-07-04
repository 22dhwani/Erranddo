import Plumber from "../../assets/plumber.png";
import SignInTopBar from "../../components/customer/home/SignInTopBar";
import Heading from "../../components/UI/Heading";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import Error from "../../components/UI/Error";
import Input from "../../components/UI/Input";
import SignUpTopBar from "../../components/customer/home/SignUpTopBar";

const SignUpCustomer = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (values.name.length === 0) {
        errors.name = "Please include a name.";
      }
      if (values.email.length === 0) {
        errors.email = "Please include a email.";
      }
      if (values.password.length === 0) {
        errors.password = "Please include a password.";
      } else if (values.password.length < 6) {
        errors.password = "Enter password with length more than 6 characters.";
      }

      if (values.confirmPassword.length === 0) {
        errors.confirmPassword = "Please include a confirm password.";
      } else if (values.confirmPassword.length < 6) {
        errors.confirmPassword =
          "Enter confirm password with length more than 6 characters.";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="lg:mt-0 xs:pt-[9.051474530831099vh]  overflow-hidden  bg-[#E7F0F9] dark:bg-black h-screen max-h-screen ">
      <div className=" bg-[#E7F0F9] h-full overflow-hidden">
        <SignUpTopBar />
        <div className=" md:pt-16 xs:pt-0 w-screen   lg:dark:bg-dimGray xs:dark:bg-black h-full">
          <div className="flex  lg:flex-row xs:flex-col xl:pt-5  h-full items-center ">
            <div className=" mx-auto xs:my-5">
              <img
                src={Plumber}
                alt=""
                className="  !w-full lg:hidden mt-auto object-cover"
              />
            </div>
            <div className="2xl:pl-48 xl:pl-24 lg:pl-20 md:px-24 xs:px-5 xs:w-full xl:w-auto md:w-full">
              <p className="text-textColor font-poppins-bold p-2 2xl:text-7xl xl:text-6xl md:text-5xl xs:text-3xl font-bold 2xl:w-[540px] xl:w-[450px]  dark:text-darktextColor flex justify-center">
                Sign Up
              </p>
              <p className="p-2 2xl:text-2xl xl:text-xl md:text-xl xs:text-md font-medium 2xl:w-[540px] xl:w-[450px]  dark:text-slate-400 font-poppins flex justify-center">
                Welcome to Erranddo.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="w-full flex flex-col ">
                  <div className="mt-2 w-full">
                    <Input
                      className="rounded-lg bg-white dark:bg-mediumGray  dark:text-darktextColor  shadow-md xs:w-full outline-none pl-3 "
                      type="name"
                      placeholder="Name"
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <Error error={formik.errors.name} className="my-1" />
                    ) : null}
                  </div>
                  <div className="mt-2 w-full">
                    <Input
                      className="rounded-lg bg-white dark:bg-mediumGray  dark:text-darktextColor  shadow-md xs:w-full outline-none pl-3 "
                      type="email"
                      placeholder="Email Id"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <Error error={formik.errors.email} className="my-1" />
                    ) : null}
                  </div>
                  <div className="mt-2 w-full">
                    <Input
                      className="rounded-lg  bg-white dark:bg-mediumGray  dark:text-darktextColor shadow-md xs:w-full outline-none pl-3 "
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <Error error={formik.errors.password} className="my-1" />
                    ) : null}
                  </div>
                  <div className="mt-2 w-full">
                    <Input
                      className="rounded-lg  bg-white dark:bg-mediumGray  dark:text-darktextColor shadow-md xs:w-full outline-none pl-3 "
                      type="password"
                      placeholder="Confirm Password"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword ? (
                      <Error
                        error={formik.errors.confirmPassword}
                        className="my-1"
                      />
                    ) : null}
                  </div>
                </div>
                <div className=" mt-4 w-full">
                  <button
                    type="submit"
                    className="bg-primaryBlue !font-bold !font-poppins-bold text-white xl:h-12 lg:h-10 xs:h-10 hover:bg-primaryBlue/80 hover:text-white dark:border-primaryBlue w-full rounded-xl"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="flex items-center my-5 gap-3 justify-center">
                <Heading
                  variant="subHeader"
                  text="Dont have an account?"
                  headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor   flex justify-center"
                />
                <NavLink to="/signup-customer">
                  <Heading
                    variant="subHeader"
                    text="Sign Up"
                    headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor   justify-center text-primaryBlue"
                  />
                </NavLink>
              </div>
            </div>
            <div className="place-self-end mx-auto lg:flex h-full  !w-full xs:hidden">
              <img
                src={Plumber}
                alt=""
                className="lg:flex   !w-full xs:hidden mt-auto object-cover  h-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCustomer;
