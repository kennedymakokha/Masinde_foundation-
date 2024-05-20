import { Outlet, useLocation } from "react-router-dom";
import Header from "./../components/navbar";
import Footer from "./../components/footer";
import { useState } from "react";
// import { handleurl } from "../utils/handleUrl";


export default function Root() {
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);
    const [setting, setSetting] = useState(false);

    return (

        <div className={` w-full ${isDark ? 'dark' : ''}  overflow-hidden`}>
            <Header dark={isDark} handleDarkToggle={() => setIsDark(!isDark)} />
            <div className={`flex mt-1 bg-blackmode-100 dark:bg-slate-200 `} >
                <div className={`  sm:mt-[5.3%] mt-[10%] min-h-[90vh] relative z-0 w-full`}>
                    <Outlet />
                    {/* {location.pathname === "/" && <Icons />} */}
                    <div onClick={() => setIsDark(!isDark)} class="absolute top-[20%]  opacity-70 flex justify-center items-center z-10 p-1  bg-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d={!isDark ? "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" : "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"} />
                        </svg>
                    </div>
                    {/* {setting && <div onClick={() => setSetting(!setting)} class="absolute top-28 w-[100px]  opacity-70 flex py-2 z-10  bg-blackmode-200 dark:bg-white ">
                        <div className="flex w-full px-2">
                            <div className=" text-[12px] pr-2 text-white dark:text-slate-500">Theme</div>
                            <div className="h-4 w-10   relative z-0 ">
                                <div className="flex items-center justify-center" onClick={() => setIsDark(!isDark)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d={!isDark ? "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" : "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"} />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>} */}

                </div>
            </div>
            <Footer />
        </div>

    );
}

