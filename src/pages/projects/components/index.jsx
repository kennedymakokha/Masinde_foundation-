import React, { useState } from 'react'
import { abbrNum } from '../../../utils/abriviateNUmbers'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/button'
import DonnationModal from './donateModal'


export const ProjectCashItem = ({ amount, title }) => {
    return (
        <div className="flex w-1/3 p-1  shadow-3xl ">
            <div className=" w-full  flex-col h-full rounded-md flex items-center justify-center dark:bg-gradient-to-r dark:from-slate-200 dark:to-slate-200  bg-gradient-to-r from-slate-700 to-slate-700">

                <p className="text-orange-400 dark:text-orange-600 font-bold">  {abbrNum(amount)}</p>
                <p className="text-[12px] font-bold  text-slate-300 dark:text-blue-600">{title}</p>
            </div>
        </div>
    )
}

function ProjectItem(props) {

    const [showModal, setShowModal] = useState(false)
    return (
        <div
            // to={props.data.title.toLowerCase().replace(/\s/g, '',)}

            className="flex  flex-col shrink-0 p-2 sm:w-1/4 w-full h-[450px]">
            <div className="flex flex-col h-full w-full bg-blackmode-400 dark:bg-slate-300 rounded-md shadow-3xl">

                <div className="tile relative h-[40%] shrink-0 overflow-hidden rounded-t-md">
                    <img
                        src={props.data.image}
                        className="transition-transform w-full  h-full duration-300 transform hover:scale-125 peer rounded-t-md object-cover "
                    />
                    <div className="absolute inset-0 dark:bg-black bg-white opacity-10 dark:opacity-10 transition-opacity rounded-t-md duration-300 peer-hover:opacity-0 pointer-events-none"></div>
                    <div className="absolute  px-2 rounded-sm  bottom-1 left-20 p-1  text-white uppercase">
                        <h2 className="text-lg dark:text-orange-600 text-slate-100 font-semibold">{props.data.title}</h2>
                    </div>
                </div>
                <div className="flex w-full  ">
                    <ProjectCashItem title="Goal" amount={props.data.goal} />
                    <ProjectCashItem title="Raised" amount={props.data.attained} />
                    <ProjectCashItem title="Balance" amount={props.data.goal - props.data.attained} />
                </div>
                <div className="flex flex-col  w-full px-2 ">
                    <h2 className=" text-[18px] font-bold text-slate-200 dark:text-slate-600">{props.data.tagline}</h2>
                    <p className="text-[14px] text-slate-200 dark:text-slate-600">{props.data.description}</p>
                </div>
                <div className="flex  w-full   px-2 ">

                    <div className="flex  w-1/2 group  items-center justify-center px-2  ">

                        <Button title="Donate" onClick={() => setShowModal(true)} inline icon />
                    </div>
                    <Link to={`/projects/${props.data.title?.toLowerCase().replace(/\s+/g, '')
                        }`} state={{ details: props.data }}
                        className="flex  w-1/2 group  items-center justify-center px-2  ">
                        <Button title="Read more" />
                    </Link>
                </div>

            </div>
            <DonnationModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default ProjectItem