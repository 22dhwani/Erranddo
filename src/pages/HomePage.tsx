import React, { useState } from 'react'
import HomeTopBar from '../components/home/HomeTopBar'
import Plumber from '../assets/plumber@3x.png'
import Card from '../components/home/Card'
import image1 from '../assets/man-decorating-wall-with-picture.png'
import image2 from '../assets/online-web-design.png'
import image3 from '../assets/cheerful-asian-male-janitor-walking-into-hotel-room-carrying-supplies-bucket.png'
import image4 from '../assets/beautiful-athletic-sportswear-girl-training-gym-with-her-boyfriend.png'
import SearchBar from '../components/home/SearchBar'
import PostCodeModal from '../layout/home/PostCodeModal'
import NotFoundModal from '../layout/home/NotFoundModal'
import QuestionsModal from '../layout/home/QuestionsModal'
import RegistrationModal from '../layout/home/RegistrationModal'

function HomePage() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSeach, setOpenSearch] = useState(false);
    const list = [
        "TV Setup ",
        "TV Wall Mounting ",
        "TV Installation ",
        "TV Repair ",
        "TV Disposal ",
        "CCTV Installation",
    ]
    console.log(openMenu);

    return (
        <div>
            <HomeTopBar />
            <div className='overflow-y-hidden md:pt-16 xs:pt-0 w-screen bg-[#E7F0F9] 2xl:h-[45rem] xl:h-[40rem] md:h-[29rem]'>
                {openMenu && (
                    <PostCodeModal //change to PostCodeModal
                        onCancel={() => {
                            setOpenMenu(false);
                        }}
                    />
                )}
                <div className='flex pt-16 h-full'>
                    <div className='2xl:pt-36 xl:pt-24 md:pt-10 2xl:pl-48 xl:pl-48 lg:pl-20 md:pl-32 xs:pl-5'>
                        <p className='p-2 2xl:text-7xl xl:text-6xl md:text-5xl xs:text-3xl font-bold 2xl:w-[520px] xl:w-[430px] md:w-[345px]'>Get Stuff Done</p>
                        <p className='p-2 2xl:text-3xl xl:text-2xl md:text-xl xs:text-md font-medium 2xl:w-[450px] xl:w-[370px]'>We’ll match you with the perfect Pro for <span className='text-[#DF994F] font-bold'>FREE</span></p>
                        <div className='flex gap-2 items-center'>
                            <SearchBar onChange={(key) => console.log(key)} />
                            <button type="button" onClick={() => setOpenSearch(true)} className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                        {list.length > 0 && openSeach && <div className='bg-white md:w-96 lg:w-80 xl:w-96 xs:w-64 xl:h-48 lg:h-36  z-[100] absolute overflow-y-auto rounded-xl '>
                            {list.map(d => {
                                return (
                                    <ul className='xl:text-lg lg:text-md xs:text-sm text-[#707070]'>
                                        <button className='w-full' onClick={() => setOpenMenu(true)}><li className='px-6 py-1 text-left'>{d}</li></button><hr />
                                    </ul>
                                )
                            })}
                        </div>}
                    </div>
                    <div className='place-self-end'>
                        <img src={Plumber} alt="" className='lg:flex xs:hidden' />
                    </div>
                </div>
            </div>
            <div className='flex md:hidden pt-4 items-center justify-between'>
                <p className=' pl-4 font-semibold text-md'>Services</p>
                <button className='text-[#0003FF] pr-4'>view more</button>
            </div>
            <div className='2xl:px-40 xl:px-36 md:px-28 2xl:mt-[-90px] xl:mt-[-60px] lg:mt-[-50px] lg:flex xs:grid xs:grid-cols-2'>
                <Card image={image1} desc='TV Wall Mounting' />
                <Card image={image2} desc='Web Design' />
                <Card image={image3} desc='House Cleaning' />
                <Card image={image4} desc='Personal Training' />
            </div>
        </div>
    )
}

export default HomePage;
