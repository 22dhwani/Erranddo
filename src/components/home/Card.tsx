

function Card(props: { image: string, desc: string }) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img src={props.image} alt="" />
                <p className='font-medium 2xl:text-xl xl:text-lg md:text-md xs:text-sm'>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card