import React from 'react'


const ProjectCashItem = ({ amount, title }) => {
    return (
        <div className="flex w-1/3 p-2 h-20 shadow-3xl ">
            <div className=" w-full  flex-col h-full rounded-md flex items-center justify-center  bg-gradient-to-r from-blackmode-100  to-black">
                <p className="text-[12px] font-bold text-orange-400">{title}:</p>
                <p className="text-white">{amount}</p>
            </div>
        </div>
    )
}
function ProjectItem(props) {
    return (
        <div className="flex flex-col shrink-0 p-2 sm:w-1/4 w-full h-[450px]">
            <div className="flex flex-col h-full w-full bg-blackmode-400 rounded-md shadow-3xl">
                {/* <div className="flex w-full h-[50%] bg-red-100 rounded-md">
            <img src={Food} alt="" className=" w-full h-full object-cover rounded-t-md hover:scale-90 scale-10 transition duration-500 cursor-pointer" />
          </div> */}
                <div class="tile relative h-[50%] overflow-hidden rounded-t-md">
                    <img
                        src={props.image}
                        class="transition-transform  h-full duration-300 transform hover:scale-125 peer rounded-t-md"
                    />
                    <div class="absolute inset-0 bg-black opacity-65 transition-opacity rounded-t-md duration-300 peer-hover:opacity-0 pointer-events-none"></div>
                    <div class="absolute bottom-0 left-0 p-4 text-white uppercase">
                        <h2 class="text-lg font-semibold">{props.title}</h2>
                    </div>
                </div>
                <div className="flex w-full  ">
                    <ProjectCashItem title="Goal" amount={props.goal} />
                    <ProjectCashItem title="Raised" amount={props.attained} />
                    <ProjectCashItem title="To Go" amount={props.attained} />

                </div>
            </div>
        </div>
    )
}

export default ProjectItem