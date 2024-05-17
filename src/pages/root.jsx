import { Outlet, useLocation } from "react-router-dom";
import Header from "./../components/navbar";
import Footer from "./../components/footer";
// import { handleurl } from "../utils/handleUrl";


export default function Root() {
    const location = useLocation();

    return (
        <div className=" w-[100vw]  overflow-hidden">
            <Header />
            <div className={`flex mt-1 bg-blackmode-100`} >
                <div className={`xl:max-w-[1280px]  sm:mt-[5.3%] mt-[10%] w-full`}>
                    <Outlet />
                    {/* {location.pathname === "/" && <Icons />} */}
                </div>
            </div>
            {/* <Footer /> */}
        </div>

    );
}

