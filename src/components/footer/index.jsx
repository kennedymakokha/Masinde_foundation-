import React from 'react'
import { Logo, galary1, galary2, teamPlayer } from '../../utils/images'
import TitleContainer, { Paraggraph } from '../titleContainer'
import { Link } from 'react-router-dom'

function index() {
  let images = [galary1, galary2, galary1, galary2, galary1, galary2]
  const links = [
    { title: "about us", url: 'about-us' },
    { title: "Careers", url: 'careers' },
    { title: "our sponsers", url: 'sponsors' },
    { title: "Contact us", url: 'contact-us' },
    { title: "donate", url: 'donate' },
    { title: "Lets Talk", url: 'lets-talk' },

  ]
  return (<>
    <div className='h-[300px] w-full py-3 bg-white dark:bg-black flex   sm:px-20 px-2  py-2 '>
      <div className="flex w-1/3 flex-col px-2">
        <div className="flex pb-3 ">
          <img src={Logo} alt="" className="h-10 " />
          <div className="sm:flex hidden flex-col ">
            <span className="font-bold text-3xl text-orange-400 ">JG Foundation</span>
            {/* <span className="">Foundation</span> */}
          </div>
        </div>
        <div className="flex  px-2">
          <Paraggraph black p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore facere minus impedit," />

        </div>
      </div>
      <div className="flex w-1/3 flex-col">
        <div className="flex flex-col pb-3 ">
          <TitleContainer title="Gallery" />
          <div className="sm:flex hidden w-full gap-2 flex-wrap ">
            {images.map((image, i) => (
              <div className="group w-[100px] h-[100px] relative -z-2">
                <img src={image} alt="" className=" w-full h-full object-cover " />
                <div className="absolute inset-0 group-hover:flex hidden flex  bg-gradient-to-b via-transparent from-orange-600  to-orange-600  opacity-50 justify-center items-center z-10">

                </div>

              </div>

            ))}
          </div>
        </div>
      </div>
      <div className="flex w-1/3 flex-col">
        <div className="flex flex-col ">
          <TitleContainer title="Quick Links" />
          <div className="sm:flex hidden w-full gap-x-2 flex-wrap ">
            <div className="flex w-1/2 flex-col">
              {links.map((link, i) => (
                <Link to={`${link.url}`} className=" text-slate-500 dark:text-slate-300 hover:underline hover:text-orange-300 sm:text-[18px] capitalize font-bold text-[12px]">{link.title}</Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div >
    <div className="flex h-6 w-full bg-orange-600"></div>
  </>

  )
}

export default index