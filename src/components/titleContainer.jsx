import React from 'react'

function TitleContainer({ title }) {
    return (
        <div className="flex items-center ">
            <div className="flex items-center border-t  rounded-md mr-1 border-b-4 border-b w-6 border-orange-600 mt-1"></div>
            <span className='capitalize font-semibold text-orange-600'>{title}</span>
        </div>

    )
}

export default TitleContainer