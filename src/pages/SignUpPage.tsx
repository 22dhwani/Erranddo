import SignUpTopBar from '../components/home/SignUpTopBar'
import Heading from '../components/UI/Heading'

const SignUpPage = () => {
    return (
        <div className=' overflow-hidden  h-screen  dark:xs:mt-0 xs:mt-0'>
            <SignUpTopBar />
            <div className="lg:bg-[url('assets/SignUpBackground.png')] dark:lg:bg-[url('assets/SignUpBackGroundDark.png')] xs:bg-hidden bg-cover bg-center bg-no-repeat h-full w-full  flex items-center xl:mt-[3.651474530831099vh]  lg:mt-[4.651474530831099vh] xs:mt-[4.051474530831099vh]" >
                <div className='lg:bg-gray-100 dark:lg:bg-dimGray dark:lg:bg-opacity-90 md:w-[30rem] xs:w-[40rem] lg:bg-opacity-90 h-max pb-16 ml-auto xl:mr-16 xs:mr-0 rounded-lg'>
                    <div className='flex flex-col items-center gap-5 p-9'>

                        <Heading
                            variant="bigTitle"
                            text="Sign Up as Pro"
                            headingclassName="!font-extrabold !font-poppins-bold tracking-wide dark:text-darktextColor  mt-7"
                        />
                        <Heading
                            variant="headingTitle"
                            text="Welcome to Erranddo. DashBoard"
                            headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor "
                        />
                        <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 bg-white dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ' type='text' placeholder="Name" />
                        <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 bg-white dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ' type='text' placeholder="Email Address" />
                        <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 bg-white dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ' type='password' placeholder="Password" />
                        <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 bg-white dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ' type='password' placeholder="Confirm password" />
                    </div>
                    <div className='flex items-center gap-5 ml-9'>
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <div className='flex gap-1'>
                            <Heading
                                variant="smallTitle"
                                text="I agree to the"
                                headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor "
                            />
                            <Heading
                                variant="smallTitle"
                                text="Terms & Conditions"
                                headingclassName="!font-bold !font-poppins-bold tracking-wide dark:text-darktextColor "
                            />
                        </div>
                    </div>
                    <div className='px-10 mt-4 w-full'>
                        <button className='bg-primaryBlue text-white hover:bg-primaryBlue/80 hover:text-white dark:border-primaryBlue w-full p-3 rounded-xl'>Sign Up</button>
                    </div>
                    <Heading
                        variant="smallTitle"
                        text="Already have an account? Sign In"
                        headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor px-12 mt-4 w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUpPage