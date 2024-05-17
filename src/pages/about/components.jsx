export const MissionVisionHeader = ({ title }) => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="sm:px-4 px-1 flex items-center justify-center  w-uto sm:h-8 h-6 border rounded-md border-orange-600 text-blue-600">
                {title}
            </div>
        </div>
    )
}

export const ListItem = ({ title }) => {
    return (
        <div className="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            <span className='sm:text-[18px] text-[14px]'>{title}</span>
        </div>

    )
}

