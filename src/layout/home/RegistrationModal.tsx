import React from 'react'
import Modal from './Modal'
import FoundImage from '../../assets/Group 70@3x.png'
import Close from '../../assets/close.svg'

function RegistrationModal(props: { onCancel: () => void }) {
    const list = [
        "Upto 50 In.",
        "51 - 65 In.",
        "66 - 86 In.",
        "51 - 65 In.",
        "66 - 86 In.",
        "Above 86 In.",
    ]
    return (
        <Modal className="bg-slate-100 opacity-90 rounded-lg xl:w-[570px] md:w-[470px]">

            <button className=' absolute top-5 right-5' onClick={() => {
                props.onCancel();
            }}><img src={Close} alt="" className='md:h-5 md:w-5 xs:h-4 xs:w-4' /></button>
            <div className='flex flex-col items-center xl:w-[550px] md:w-[450px] xl:mt-1 md:mt-2 p-3 gap-2'>
                <div className="text-center">
                    <h1 className="text-black xl:text-xl md:text-lg xs:text-lg font-bold">
                        Lets get those quotes in from Pro’s near you
                    </h1>
                </div>
            </div>
            <div className="mb-9">
                <h1 className=" xl:text-lg  md:text-md xs:text-sm font-medium p-2">
                    Email Address
                </h1>
                <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 xl:w-[550px] md:w-[450px] xs:w-full outline-none pl-3 text-[#707070]' type='text' placeholder="Email Address" />
                <h1 className=" xl:text-lg  md:text-md xs:text-sm font-medium p-2 ">
                    Enter Mobile Number
                </h1>
                <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 xl:w-[550px] md:w-[450px] xs:w-full outline-none pl-3 text-[#707070]' type='text' placeholder="Mobile Number" />
            </div>
            <div className='flex gap-5 xl:w-[550px] md:w-[450px] justify-center'>
                <button type="button" className="text-black w-32 border-[#707070] border  xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 ">Back</button>
                <button type="button" className="text-white w-32 bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
            </div>
        </Modal>
    )
}

export default RegistrationModal