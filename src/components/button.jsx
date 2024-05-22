

export const Button = ({ amount, onClick, inline, icon, title }) => {
    return (
        // <div className="flex  w-1/2 group  items-center justify-center px-2  ">
        <div onClick={onClick} className={`flex ${inline ? "border-[0.4px] border-orange-600 bg-traspatrent dark:border-orange-600" : "bg-gradient-to-r from-orange-100  to-orange-600 group-hover:text-slate-500 group-hover:bg-slate-50 text-slate-50"} w-full group-hover:text-slate-500  rounded-md ${!icon ? "group-hover:justify-between" : "justify-center"}  text-orange-600 dark:text-blackmode-300 items-center font-bold  capitalize sm:text-[18px] text-[12px]  px-2 `}>
            {icon && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 hidden text-orange-600 group-hover:flex">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>}
            {title}
        </div>
        // </div>
    )
}

