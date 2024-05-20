import React from 'react'
import About from './../../assets/about.jpg'
import { Paraggraph } from '../../components/titleContainer'
import { Logo, back } from '../../utils/images'
import { ListItem, MissionItem } from './components'
function Brief() {
    return (
        <div className="flex w-full h-auto my-2">
            <div className="sm:w-1/3  px-10 sm:flex hidden shadow-3xl rounded-tl-[100px] rounded-br-[100px] ">
                <img src={Logo} alt="" className=" h-[200px] shadow-3xl  w-full rounded-tl-[100px] rounded-br-[100px] object-contain " />
            </div>
            <div className="sm:w-2/3 w-full  sm:text-[16px] text-[14px]">
                <div className="flex  px-2 flex-col">
                    <div className="flex border-orange-600 border-l border-l-8 h-auto px-2">
                        <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />
                    </div>
                    <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />
                    <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />

                </div>
                <div className="flex w-full sm:flex-row flex-col gap-2 h-[400px] rounded-md">
                    <MissionItem title="Vision"
                        content={<div>
                            <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />
                            {/* <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" /> */}

                        </div>}
                    />
                    <MissionItem title="Mission"
                        content={<div>
                            <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />
                            {/* <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" /> */}

                        </div>} />
                    <MissionItem title="Values"
                        content={<div className=' w-full flex-col items-start flex justify-start'>
                            <ListItem title="Books" />
                            <ListItem title="Books" />
                            <ListItem title="Books" />
                            <ListItem title="Books" />
                        </div>}
                    />

                </div>

            </div>

        </div >
    )
}

export default Brief 