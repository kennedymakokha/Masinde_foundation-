import React from 'react'
import World from './../../assets/world.png'
import { Link, useLocation } from 'react-router-dom';
function index({ title, path, img }) {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    let pathname = pathSegments[pathSegments.length - 1];
    return (
        <div className="w-full h-[150px] sm:flex hidden overflow-x-hidden  relative z-0 ">
            <img src={img ? img : World} alt="" className="overflow-x-hidden w-full h-full object-cover" />
            <div className="absolute left-12 w-1/4  top-[40%] overflow-x-hidden  text-white flex justify-center items-center z-10">
                <p className="text-2xl font-bold text-blue-600 dark:text-white uppercase text-xl">{title}</p>
            </div>
            <div className="absolute right-12 overflow-x-hidden bottom-1 flex justify-center items-center z-10">
                {path.map((pat, i) => (<Link key={i} to={`/${pat.path}`} className={`${pat.path === pathname ? "text-slate-200  underline italic " : "text-blue-600 dark:text-orange-600 cursor-pointer"} text-sm px-1`}>{pat.title}</Link>))}
            </div>
            <div className="absolute inset-0 opacity-70 dark:opacity-60 flex justify-center items-center z-14  dark:bg-gradient-to-r dark:from-slate-600 dark:via-black dark:to-slate-600 bg-gradient-to-r from-orange-600 via-white to-orange-600 ">
            </div>
        </div>
    )
}

export default index