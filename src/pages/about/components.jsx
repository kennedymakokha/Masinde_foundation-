import { back, team, teamPlayer } from "../../utils/images"
import { IconsData } from "./socialData,"

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
        <div className="flex items-center justify-start  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-300 dark:text-slate-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            <span className='sm:text-[18px] text-[14px] text-slate-300 dark:text-blackmode-200'>{title}</span>
        </div>

    )
}

export const MissionItem = ({ title, content }) => {
    return (
        <div className="flex  sm:w-1/3 w-full  px-2 ">
            <div className="h-full relative rounded-md z-0">
                <img src={back} alt="" className="h-full w-full rounded-md object-cover" />
                <div className="absolute top-[8%] left-[5%] flex justify-center h-20 w-20 bg-slate-500 rounded-full  items-center z-12">

                </div>
                <div className="absolute top-[12%] left-[15%] text-[38px] text-slate-300 font-bold capitalize flex justify-center items-center z-20">
                    {title}
                </div>
                <div className="absolute top-[30%] left-4 right-4 flex justify-center items-center z-20">
                    {content}
                </div>
                <img src={back} alt="" className="absolute h-full rounded-md   dark:opacity-60 inset-0 flex justify-center items-center z-20" />
                <div className="absolute rounded-md bg-orange-600 opacity-40 dark:opacity-60 inset-0 flex justify-center items-center z-10">

                </div>
            </div>
        </div>

    )
}

export const TeamAd = ({ title, content }) => {
    return (

        <div className=" w-full h-full relative z-0">
            <div className="absolute inset-0 flex justify-center items-center z-10">
                <img src={team} alt="" className="" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center text-slate-100 dark:text-blackmode-200  font-bold z-10">
                <p className="text-[38px] text-center font-bold">{title}</p>
            </div>
        </div>
    )
}
export const Social = ({ title, mr, path, content, data }) => {
    return (
        <div className={`flex h-8 w-8 ${data.color} shadow-3xl  rounded-full items-center justify-center`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={` h-3.5 w-3.5 flex items-center  justify-center text-blue-100`}
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d={data.path}
                />
            </svg>
        </div>
    )
}
export const TeamItem = ({ title, role, avatar }) => {
    return (
        <div className="flex  sm:w-1/3 group w-full rounded-md  px-2 ">
            <div className="w-full h-full rounded-md relative z-0">
                <img src={avatar} alt="" className=" rounded-md" />

                <div className="absolute rounded-md group-hover:flex hidden inset-0 flex justify-center  bg-gradient-to-t opacity-10 from-transparent via-orange-600  to-orange-600  items-center z-10">
                </div>
                <div className="absolute group-hover:flex hidden rounded-md bottom-2  bg-gradient-to-b from-transparent via-orange-600  to-orange-600 h-18 w-full flex justify-center items-center z-10">
                    <div className="flex h-full w-full  justify-between px-10 ">
                        {IconsData.map((social, i) => (
                            < Social key={i} data={social} />
                        ))}
                    </div>
                </div>
                <div className="absolute flex group-hover:hidden rounded-b-md -bottom-[0%]  bg-gradient-to-t from-transparent to-black via-black h-14 w-full flex justify-center items-center z-10">
                    <div className="flex  items-center rounded-b-md justify-center h-full w-full flex-col   px-10 ">
                        <h2 className="text-slate-400 dark:text-blackmode-200 text-[14px] font-bold sm:text-[18px]">{title}</h2>
                        <h2 className="text-orange-400 dark:text-blackmode-200 italic text-[14px] font-normal sm:text-[18px]">{role}</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}



