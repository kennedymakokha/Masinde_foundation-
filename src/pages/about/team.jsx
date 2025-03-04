import React from 'react'
import About from './../../assets/about.jpg'
import { Paraggraph, Title_bare } from '../../components/titleContainer'
import { Logo, back, teamPlayer } from '../../utils/images'
import { ListItem, MissionItem, TeamAd, TeamItem } from './components'
function Team() {
    return (
        <div className="flex w-full h-auto my-2">

            <div className="w-full overflow-y-hidden  ">
                <Title_bare text="font-semibold text-slate-300 dark:text-blackmode-300 text-3xl " title="The Team" />
                <div className="flex w-full sm:flex-row mt-10 overflow-y-hidden flex-col  h-[250px]  rounded-md">
                    <TeamItem title="Kennedy makokha" role="Founder/CEO" avatar={teamPlayer} />
                    <TeamItem title="James Maina" role="Co Founder" avatar={teamPlayer} />
                    <TeamItem title="Kennedy makokha" role="CTO" avatar={teamPlayer} />
                    <TeamItem title="Kennedy makokha" role="HR" avatar={teamPlayer} />
                    <TeamItem title="Kennedy makokha" role="Admin" avatar={teamPlayer} />
                </div>

            </div>
            {/* <div className="sm:w-1/3 item-center justify-center px-10 sm:flex hidden shadow-3xl rounded-tl-[100px] rounded-br-[100px] ">
                <TeamAd title="The Team"
                    content={<div>
                        <Paraggraph p=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis aliquam praesentium illo inventore nemo commodi repellat nulla architecto. Distinctio libero nam voluptatum? Qui, nobis quis dolore quibusdam mollitia esse" />
                      
                    </div>}
                />

            </div> */}
        </div >
    )
}

export default Team 