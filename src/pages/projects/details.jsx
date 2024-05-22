import React, { useState } from 'react'
import BreadCrump from './../../components/breadcrump'
import { useLocation } from 'react-router-dom'
import TitleContainer, { Donar, DownloadBTn, Paraggraph, Title_bare } from '../../components/titleContainer'
import Sidebar from './sidebar'
import { ProjectCashItem } from './components'
import DonnationModal from './components/donateModal'
import { Button } from '../../components/button'

function details() {
    const location = useLocation()
    const { details } = location.state
    const [count, setCount] = useState(details?.donners?.length - 7)
    const [limit, setLimit] = useState(6)
    const [showModal, setShowModal] = useState(false)
    let per = details.attained / details.goal * 100

    return (
        <div className='flex flex-wrap w-full'>
            <BreadCrump img={details.image} title={details.title} path={[{ title: "home", path: '/' }, { title: "projects", path: 'projects' }, { path: `${details.title?.toLowerCase().replace(/\s+/g, '')}`, title: `${details.title.toLowerCase()}` }]} />
            <div className="flex w-full flex-col sm:flex-row sm:px-20 px-2 dark:bg-slate-300 py-2">
                <div className="flex flex-col sm:w-[70%] w-full ">
                    <div className="w-full px-5 pb-3">
                        <TitleContainer title={details.title} />
                    </div>

                    <img src={details.image} alt="" className="flex w-full h-[400px] object-cover  rounded-md" />
                    <div className="flex py-4">
                        <h2 className="capitalize text-3xl font-semibold text-slate-300 dark:text-blackmode-300">{details.tagline}</h2>
                    </div>

                    <div className="flex my-2  border-blackmode-400 dark:border-slate-400   h-20 w-full">
                        <div className="flex w-2/3">
                            <ProjectCashItem title="Goal" amount={details.goal} />
                            <ProjectCashItem title="Raised" amount={details.attained} />
                            <ProjectCashItem title="Balance" amount={details.goal - details.attained} />
                        </div>
                        <div className="flex w-1/3  items-center">
                            <div className="flex w-full   h-[85%]  justify-center   ">
                                {per > 10 ? <div style={{ width: `${per}%` }} className={`${per >= 75 && "bg-gradient-to-r from-orange-400 via-orange-600 to-green-600 "}${per === 100 && "bg-gradient-to-r from-orange-400 via-orange-600 to-green-600 rounded-r-none "} bg-gradient-to-r from-blackmode-100 via-orange-600 to-orange-600   rounded-r-full  relative z-0`}>
                                    <div style={{ left: `${per - 10}%` }} className={`absolute sm:top-4  top-6 rounded-full flex justify-center text-white items-center z-10`}>
                                        {per > 10 && <span className="sm:text-[18px] text-[12px]">{per}%</span>}
                                    </div>
                                </div> : <span className='text-slate-400 sm:text-[18px] text-[12px]'>Contibution Ongoing</span>}
                            </div>
                        </div>
                    </div>
                    <Paraggraph p={details.description} />
                    <Title_bare title="Cause Challenge" />
                    <div className="flex pt-4 pb-2">
                        <Paraggraph p={details.cause} />
                    </div>
                    <Title_bare title="Summery And Documents" />
                    <div className="flex w-full py-2 gap-x-4 mt-4 h-20">
                        <DownloadBTn title="research" />
                        <DownloadBTn title="research" />
                        <DownloadBTn title="research" />
                    </div>
                    <Title_bare title="Great Donners" />
                    <div className="flex w-full gap-2 my-10 flex-wrap">
                        {details?.donners?.slice(0, limit)?.map((don, i) => (
                            <Donar key={i} item={don} />
                        ))}
                        {details?.donners?.length > 7 && < Donar last count={count} setLimit={setLimit} />}
                        < Donar last count={count} setLimit={setLimit} />
                        {/* <div className="flex items-center justify-center sm:w-full  mt-10">
                            <div className="flex sm:w-1/4 ">
                                <Button icon title="Donate" onClick={() => setShowModal(true)} inline />
                            </div>
                        </div> */}
                    </div>
                </div>

                <Sidebar />
                <DonnationModal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </div >
    )
}

export default details