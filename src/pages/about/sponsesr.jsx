import React from 'react'
import About from './../../assets/about.jpg'
import { Paraggraph } from '../../components/titleContainer'
import { Logo, Nzoia, back, teamPlayer } from '../../utils/images'
import { ListItem, MissionItem, TeamAd, TeamItem } from './components'
function Sponsors() {
    let sponsors = [1, 3, 4, 3, 4,]
    return (
        <div className="flex w-full h-auto my-2">
            <div className="sm:w-1/4 item-center justify-center px-10 sm:flex hidden shadow-3xl rounded-tl-[100px] rounded-br-[100px] ">
                <TeamAd title="Our Current Sponsors."
                    content={<div>
                        <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />
                        {/* <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" /> */}

                    </div>}
                />

            </div>
            <div className="sm:w-3/4 w-full overflow-y-hidden  sm:text-[16px] text-[14px]">

                <div className="flex w-full sm:flex-row min-h-[200px] justify-center items-center overflow-y-hidden flex-col gap-2  flex-wrap rounded-md">
                    {sponsors.map((spons, i) => (
                        <div className="flex w-1/6 p-2  shrink-0 flex-col items-center  justify-center">
                            <img src={Nzoia} alt="" className=" rounded-full h-[100px] w-[100px] object-fit" />
                            <span className="text-[18px] text-center font-semibold text-slate-100 dark:text-blackmode-200">T.N.C</span>
                        </div>
                    ))}

                </div>

            </div>

        </div >
    )
}

export default Sponsors 