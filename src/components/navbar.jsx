import { useState } from "react";
import { Link } from "react-router-dom";
import { UseLastPathname } from "../utils/urlhandler";

import brush from './../assets/brush.webp'
import { Logo } from "../utils/images";
// import { close, logo, menu } from "../assets";

export const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "projects",
        title: "projects",
    },
    {
        id: "about-us",
        title: "about Us",
    },
    {
        id: "contact-us",
        title: "Contact Us",
    },
];


function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        //add class=dark in html element
        document.documentElement.classList.add("dark");
    } else {
        //remove class=dark in html element
        document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    } else {
        localStorage.theme = "dark";
    }
}
const Navbar = ({ isDark, handleDarkToggle }) => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    let path = UseLastPathname(1)
    let path2 = UseLastPathname(2)
    console.log(path2)
    return (
        <nav className="w-full  bg-black  z-10 dark:bg-slate-200 shadow-3xl fixed top-0 left-0 right-0 px-10 flex py-1 justify-between  items-center navbar">
            {/* Logo */}
            <img src={Logo} alt="" className="sm:h-full h-1/4 sm:w-auto w-10" />
            <div className="sm:flex hidden flex-col ">
                <span className="font-bold text-3xl text-orange-400 dark:text-blackmode-400">JG Foundation</span>
                {/* <span className="">Foundation</span> */}
            </div>
            {/* Desktop Navigation */}

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <div className="h-10 w-[120px] relative z-0">
                        {path === nav.id && <img src={brush} alt="" className=" h-10 w-[120px]" />}
                        {path2 === nav.id && path2 !== '' && <img src={brush} alt="" className=" h-10 w-[120px]" />}
                        <div className="absolute inset-0 flex justify-center items-center z-10">
                            <li
                                key={nav.id}
                                className={`font-poppins  px-2 font-normal cursor-pointer text-[16px] ${path === nav.id ? "text-red" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-1"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link to={`/${nav.id}`} className={`font-semibold capitalize  ${path === nav.id ? "text-white  " : "text-slate-400 dark:text-black hover:text-orange-400"}  `}>{nav.title} </Link>
                                {/* {path === nav.id && <div className="w-auto h-1 bg-blue-600"></div>} */}
                            </li>
                        </div>
                    </div>


                ))}
            </ul>
            <div className="bg-orange-600 px-4 rounded-full sm:flex hidden items-center justify-center shadow-3xl text-white  sm:text-[18px] text-sm ">Donate</div>
            {/* <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

            </div> */}
            {/* Mobile Navigation */}
            <div className="sm:hidden  static flex flex-1 justify-end items-center">
                <div

                    className="w-[28px] h-[28px] "
                    onClick={() => setToggle(!toggle)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6 text-orange-600 dark:text-black">
                        <path stroke-linecap="round" stroke-linejoin="round" d={toggle ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                    </svg>

                </div>

                {/* Sidebar */}
                <div
                    className={`${!toggle ? "hidden" : "flex flex-col"
                        } p-6 bg-black  dark:bg-slate-200 absolute   top-11 right-0 mx-1 my-2 min-w-[140px] rounded-b-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] 
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-0"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link className={`${path === nav.id ? "text-orange-800 dark:text-blue-600" : "text-red-100 dark:text-slate-500"} capitalize`} to={`/${nav.id}`}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="  bg-orange-600  px-4 rounded-md flex items-center justify-center shadow-3xl text-blue-600  text-sm ">Donate</div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;