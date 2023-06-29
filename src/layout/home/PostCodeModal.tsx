import React from 'react'
import Modal from './Modal'
import SearchBar from '../../components/home/SearchBar'
import Close from '../../assets/close.svg'

function PostCodeModal(props: { onCancel: () => void }) {
    return (
        <Modal className="bg-slate-100 opacity-90 rounded-lg">

            <button className=' absolute top-5 right-5' onClick={() => {
                props.onCancel();
            }}><img src={Close} alt="" className='md:h-5 md:w-5 xs:h-4 xs:w-4' /></button>
            <div className='flex flex-col '>
                <div className="flex xl:mt-1 md:mt-2">
                    <h1 className="text-black xl:text-lg md:text-md font-medium p-2">
                        Enter Post Code
                    </h1>
                </div>
                <form>
                    <div className="flex gap-2 items-center ">
                        <input className='rounded-lg xl:h-12 lg:h-10 xs:h-10 w-full outline-none pl-3 text-[#707070]' type='text' placeholder="Post Code" />
                        <button type="button" className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default PostCodeModal