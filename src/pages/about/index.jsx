import React from 'react'
import BreadCrump from './../../components/breadcrump'
import TitleContainer from '../../components/titleContainer'


import { ListItem, MissionVisionHeader } from './components'
import Brief from './history'
function index() {
  return (
    <div className='w-full overflow-hidden'>
      <BreadCrump title="about Us" name="about-us" path={[{ title: "home", path: '/' }, { title: "about us", path: 'about-us' }]} />
      <div className="py-2 px-10 w-full h-auto flex">
        <div className="w-full h-full ">
          <TitleContainer title="about us" />
          <Brief />
          <div className=" flex w-full ">
            <div className="flex shrink-0 sm:w-1/3 w-full justify-center px-2 flex-col">
              <MissionVisionHeader title="Our vision" />
              <div className="flex text-justify sm:text-[16px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam, laboriosam fugiat deserunt dicta rem facere vitae. Cumque perspiciatis nemo cum earum, labore laboriosam alias mollitia, eveniet reprehenderit ipsum nostrum!
              </div>
            </div>
           
            <div className="flex sm:w-1/3 w-full justify-center flex-col px-2">
              <MissionVisionHeader title="Our Mission" />
              <div className="flex text-justify sm:text-[16px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam, laboriosam fugiat deserunt dicta rem facere vitae. Cumque perspiciatis nemo cum earum, labore laboriosam alias mollitia, eveniet reprehenderit ipsum nostrum!
              </div>
            </div>
            <div className="flex sm:w-1/3 w-full justify-center flex-col">
              <MissionVisionHeader title="Our Values" />
              <div className="flex flex-col items-center justify-center">
                <ListItem title="Books" />
                <ListItem title="Books" />
                <ListItem title="Books" />
                <ListItem title="Books" />
              </div>
            </div>
          </div>
          {/* <div className="flex   sm:flex-row flex-col  sm:h-[300px] h-auto border border-blackmode-300 p-2"> */}
          {/* <div className="flex shrink-0 sm:w-1/3 w-full justify-center px-2 flex-col">
              <MissionVisionHeader title="Our vision" />
              <div className="flex text-justify sm:text-[16px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam, laboriosam fugiat deserunt dicta rem facere vitae. Cumque perspiciatis nemo cum earum, labore laboriosam alias mollitia, eveniet reprehenderit ipsum nostrum!
              </div>
            </div> */}
          {/* <div className="flex sm:w-1/3 w-full justify-center flex-col px-2">
              <MissionVisionHeader title="Our Mission" />
              <div className="flex text-justify sm:text-[16px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam, laboriosam fugiat deserunt dicta rem facere vitae. Cumque perspiciatis nemo cum earum, labore laboriosam alias mollitia, eveniet reprehenderit ipsum nostrum!
              </div>
            </div>
            <div className="flex sm:w-1/3 w-full justify-center flex-col">
              <MissionVisionHeader title="Our Values" />
              <div className="flex flex-col items-center justify-center">
                <ListItem title="Books" />
                <ListItem title="Books" />
                <ListItem title="Books" />
                <ListItem title="Books" />
              </div>
            </div> */}
          {/* </div> */}


        </div>
      </div>
    </div>
  )
}

export default index