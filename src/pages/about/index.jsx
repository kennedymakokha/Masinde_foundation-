import React from 'react'
import BreadCrump from './../../components/breadcrump'
import TitleContainer, { Title_bare } from '../../components/titleContainer'


import { ListItem, MissionVisionHeader } from './components'
import Brief from './history'
import Team from './team'
import Sponsors from './sponsesr'
function index() {
  return (
    <div className='w-full '>
      <BreadCrump title="about Us" name="about-us" path={[{ title: "home", path: '/' }, { title: "about us", path: 'about-us' }]} />
      <div className="flex w-full flex-col sm:flex-row sm:px-20 px-2 dark:bg-slate-300 py-2">
        <div className="w-full h-full ">
       <TitleContainer title="about us" />
        <Title_bare text="font-semibold text-slate-300 dark:text-blackmode-300 sm:text-2xl text-xl" title="We are  a Non Profitable Organization" />
       <Brief />
         <Team />
         {/* <Sponsors /> */}
        </div>
      </div>
    </div>
  )
}

export default index