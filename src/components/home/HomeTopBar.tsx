import React from 'react'
import ErranddoLogo from '../../assets/Group 1@3x.png'

function HomeTopBar() {
  return (

    <nav className="bg-white dark:bg-gray-900 fixed w-screen z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen flex flex-wrap items-center justify-between p-4">
        <div className='2xl:pl-56 xl:pl-36 lg:pl-32'>
          <img src={ErranddoLogo} className="xl:h-8 lg:h-6 xs:h-5" alt="Erranddo Logo" />
        </div>
        <div className='md:flex items-center xl:pr-56 md:pr-36 xs:hidden'>
          <div className="pr-5">
            <ul className="flex gap-3 flex-col mt-4 xl:text-lg md:text-sm border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="text-[#707070]" aria-current="page">Sign Up</a>
              </li>
              <div
                className=" xl:h-6 md:h-5 min-h-[1em] w-0.5 bg-[#707070] opacity-40"></div>
              <li>
                <a href="#" className="text-[#707070]">Sign In</a>
              </li>
            </ul>
          </div>
          <div className="">
            <button type="button" className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register as a Pro</button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default HomeTopBar