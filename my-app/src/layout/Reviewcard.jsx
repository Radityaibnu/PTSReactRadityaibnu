import React from 'react'

const Reviewcard = (props) => {
    return (
        <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div>
                <p className='text-lightText'>
                We loved this place because it wasn't just the typical dishes you usually find. We ended up ordering tasty food. Some of the dishes did feel a bit pricey for the size, but we enjoyed them so much, we felt they were worth it.
                </p>
            </div>
            <div className='flex flex-row justify-center items-center mt-4 gap-4'>
                <img className='rounded-full w-1/4' src={props.img} alt="img" />
                <h3 className='font-semibold'>{props.name}</h3>
            </div>
        </div>
    )
}


export default Reviewcard
