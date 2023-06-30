import React, { useState } from "react";
import HomeTopBar from "../components/home/HomeTopBar";
import Plumber from "../assets/plumber.png";
import SignInTopBar from "../components/home/SignInTopBar";
import Heading from "../components/UI/Heading";

const SignInPage = () => {
    return (
        <div>
            <div className="overflow-x-hidden">
                <SignInTopBar />
                <div className="overflow-y-hidden md:pt-16 xs:pt-0 w-screen bg-[#E7F0F9] lg:dark:bg-dimGray xs:dark:bg-black lg:h-screen md:h-[29rem] ">
                    <div className="flex xl:pt-5 xs:pt-20 h-full">
                        <div className="2xl:pt-36 xl:pt-24 md:pt-10 2xl:pl-48 xl:pl-24 lg:pl-20 md:pl-32 xs:pl-10 ">
                            <p className="font-poppins-bold p-2 2xl:text-7xl xl:text-6xl md:text-5xl xs:text-3xl font-bold 2xl:w-[540px] xl:w-[450px] md:w-[370px] dark:text-darktextColor flex justify-center">
                                Get Started
                            </p>
                            <p className="p-2 2xl:text-2xl xl:text-xl md:text-xl xs:text-md font-medium 2xl:w-[540px] xl:w-[450px] md:w-[370px] dark:text-slate-400 font-poppins flex justify-center">
                                Welcome back you've been missed!
                            </p>
                            <div className="w-full flex flex-col gap-5 mt-12">
                                <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 bg-white dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ' type='email' placeholder="Email Id" />
                                <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 bg-white dark:bg-mediumGray shadow-md xs:w-full outline-none pl-3 ' type='password' placeholder="Password" />
                            </div>
                            <div className=' mt-4 w-full'>
                                <button className='bg-primaryBlue !font-bold !font-poppins-bold text-white xl:h-12 lg:h-10 xs:h-10 hover:bg-primaryBlue/80 hover:text-white dark:border-primaryBlue w-full rounded-xl'>Sign Up</button>
                            </div>
                            <Heading
                                variant="subHeader"
                                text="Don't have an account? "
                                headingclassName="!font-medium !font-poppins-bold tracking-wide dark:text-darktextColor mt-7 w-full flex justify-center"
                            />
                        </div>
                        <div className="place-self-end h-[90%] mx-auto">
                            <img
                                src={Plumber}
                                alt=""
                                className="lg:flex h-full  !w-full xs:hidden mt-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage