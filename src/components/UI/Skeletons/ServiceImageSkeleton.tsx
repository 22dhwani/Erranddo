import React from 'react'
import Skeleton from './Skeleton'

const ServiceImageSkeleton = () => {
    return (
        <div className='flex 2xl:gap-48 gap-8  mt-5 w-screen'>
            <div>
                <Skeleton variant="rectangular" className="2xl:h-48 xl:h-40 lg:h-32 xs:h-32 rounded-xl 2xl:w-72 xl:w-64 lg:w-48" />
            </div>
            <div>
                <Skeleton variant="rectangular" className="2xl:h-48 xl:h-40 lg:h-32 xs:h-32 rounded-xl 2xl:w-72 xl:w-64 lg:w-48" />
            </div>
            <div>
                <Skeleton variant="rectangular" className="2xl:h-48 xl:h-40 lg:h-32 xs:h-32 rounded-xl 2xl:w-72 xl:w-64 lg:w-48" />
            </div>
            <div>
                <Skeleton variant="rectangular" className="2xl:h-48 xl:h-40 lg:h-32 xs:h-32 rounded-xl 2xl:w-72 xl:w-64 lg:w-48" />
            </div>
        </div>
    )
}

export default ServiceImageSkeleton