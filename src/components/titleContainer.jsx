import React from 'react'
import { Brush } from '../utils/images'

function TitleContainer({ title }) {
    return (
        <div className="flex items-center ">
            <div className="flex items-center border-t  rounded-md mr-1 border-b-4 border-b w-6 border-orange-600 mt-1"></div>
            <span className='capitalize font-semibold text-3xl text-orange-600'>{title}</span>
        </div>

    )
}
export default TitleContainer

export function Title_bare({ title, text, withBrush }) {
    return (
        <div class={`h-[10px] ${withBrush ? "pt-4 sm:pb-10 pb-6" : "py-4"} relative z-0`}>
            {withBrush && <img src={Brush} alt="" className=" sm:h-10 h-8 w-44" />}
            <div class={`absolute ${withBrush ? "sm:top-5 top-4 left-3" : "top-0"} flex justify-center items-center z-10`}>
                <h2 className={` ${withBrush ? `text-slate-200 sm:text-3xl text-2xl font-semibold` : `${text ? text : "text-slate-200 underline uppercase"} dark:text-blackmode-200 `}    font-semibold `}>{title}</h2>
            </div>
        </div>
    )
}
export function Paraggraph({ p }) {
    return (
        <div className="flex w-full h-auto text-slate-400  sm:text-[18px] text-[14px] text-justify">
            <p className="text-slate-300 dark:text-blackmode-200 sm:text-[18px] text-[14px] text-justify">{p}</p>
        </div>
    )
}
export function Donar({ p, last, count, setLimit, item }) {
    return (

        <div className={`flex sm:w-[100px] w-[70px] h-[70px] group relative z-0 sm:h-[100px] shadow-2xl  rounded-full text-slate-400 bg-slate-200 ${last && "bg-gradient-to-r from-orange-100  to-orange-600"}`}>
            <div className=" h-full w-full flex items-center justify-center rounded-full" >
                {!last ? <img src={item.img} alt="" className="w-full h-full object-fit" /> : <h2 onClick={() => setLimit(prev => (
                    prev + 7
                ))} className='font-bold text-white'>+{count}</h2>}
            </div>
            {!last && <div className="absolute inset-0  opacity-60 group-hover:flex hidden bg-gradient-to-r from-orange-100  to-orange-600 flex rounded-full justify-center items-center z-10">

            </div>}
            {!last && <div className="absolute inset-0  group-hover:flex hidden items-center justify-center flex rounded-full justify-center items-center z-20">
                <h2 className="text-slate-700 text-center font-bold text-[18px] ">
                    {item.org}
                </h2>
            </div>}
        </div>
    )
}

export function DownloadBTn({ title }) {
    return (
        <div className="flex  px-2 ">
            <div className="flex w-[100px] h-3/4 bg-gradient-to-r from-orange-100  to-orange-600 rounded-md flex justify-center items-center ">
                <div className="flex flex-col">
                    <div className="flex items-center justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </div>
                    <div className="flex text-slate-500 dark:text-slate-300 items-center justify-center ">
                        kenedt
                    </div>
                </div>
            </div>
        </div>
      

    )
}

