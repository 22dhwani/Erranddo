import React from "react";
import ErranddoLogo from "../../assets/Group 1@3x.png";
import { Navigate, useNavigate } from "react-router";
import SignUpPage from "../../pages/SignUpPage";

function SignUpTopBar() {
    const navigate = useNavigate();
    // return (
    //     <nav className="bg-white dark:bg-black fixed w-screen top-0 left-0 border-b border-gray-200 dark:border-gray-600 lg:h-[9.651474530831099vh] xs:h-[9.051474530831099vh] z-[100]">
    //         <div className="max-w-screen flex flex-wrap items-center justify-between p-4">
    //             <div className="2xl:pl-56 xl:pl-36 lg:pl-32">
    //                 <img
    //                     src={ErranddoLogo}
    //                     className="xl:h-8 lg:h-6 xs:h-5"
    //                     alt="Erranddo Logo"
    //                 />
    //             </div>
    //             <div className="md:flex items-center xl:pr-56 md:pr-36 xs:hidden">
    //                 <div className="pr-5">
    //                     <ul className="flex gap-3 flex-col mt-4 xl:text-lg md:text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:text-semibold">
    //                         <li>
    //                             <button className="text-[#707070]  dark:text-white">
    //                                 Sign In
    //                             </button>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </nav>
    // );
    // const { theme, changeTheme } = useTheme();
    // console.log(theme);
    const topbarClassName =
        "bg-white dark:bg-black fixed top-0 py-4 xl:px-36 lg:px-24 xs:px-5 flex shadow-md justify-between w-screen items-center lg:h-[9.651474530831099vh] xs:h-[9.051474530831099vh] z-[100]";
    return (
        <div className={topbarClassName}>
            <div className=" my-1 xs:w-3/6 lg:w-max">
                <button onClick={() => navigate('/home')}><img src={ErranddoLogo} className="lg:w-80 xs:w-full object-contain" /></button>
            </div>
            <div className="md:flex items-center xl:pr-56 md:pr-36 xs:hidden">
                <div className="pr-5">
                    <ul className="flex gap-3 flex-col mt-4 xl:text-lg md:text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black dark:text-semibold">
                        <li>
                            <button
                                className="text-[#707070]  dark:text-white"
                                onClick={() => navigate('/signup')}
                            >
                                <p className="font-bold">Sign In</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SignUpTopBar;
