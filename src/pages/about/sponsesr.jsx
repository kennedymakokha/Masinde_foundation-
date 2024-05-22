import React from 'react'
import About from './../../assets/about.jpg'
import { Paraggraph, Title_bare } from '../../components/titleContainer'
import { Logo, Nzoia, back, teamPlayer } from '../../utils/images'
import { ListItem, MissionItem, TeamAd, TeamItem } from './components'
function Sponsors() {
    let sponsors = [1, 3, 4, 3, 4,]
    return (
        <div className="flex w-full h-auto my-2">

            <div className="w-full overflow-y-hidden  sm:text-[16px] text-[14px]">
                <Title_bare text="font-semibold text-slate-300 dark:text-blackmode-300 text-3xl " title="Sponsors" />
                <div className="flex w-full sm:flex-row min-h-[200px]  items-center overflow-y-hidden flex-col gap-2  flex-wrap rounded-md">
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