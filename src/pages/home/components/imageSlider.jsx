
import { useState, useRef, useEffect } from "react";
import "./style.css"
import { slider1 } from "../../../utils/images";
export default function ImageSlider(data) {

    let { image, title } = data

    const [isVisible, setIsVisible] = useState({ slider1: false, slider2: false, slider3: false });
    useEffect(() => {
        setIsVisible(false); // Set isVisible to true when the component mounts
    }, [])
    return (
        <div className="w-full h-[75vh]  flex justify-center items-center">
            <div className="bg-gray-400 w-full h-full relative z-0">
                <img src={slider1} alt="" className="w-full h-full object-cover" />
                {isVisible.slider1 && <div className="absolute bottom-0 left-[6%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
                </div>}
                {isVisible.slider2 && <div className="absolute bottom-0 left-[36%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
                </div>}
                {isVisible.slider3 && <div className="absolute bottom-0 left-[66%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
                </div>}
                <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => setIsVisible((prev) => ({ ...prev, slider1: !prev.slider1 }))} className="absolute -bottom-12 left-[14%] h-[100px]  w-[100px] bg-transparent border border-2 rounded-full flex justify-center items-center z-10">
                </div>
                <div onMouseEnter={() => setIsVisible((prev) => ({ ...prev, slider2: !prev.slider2 }))} className="absolute -bottom-12 left-[45%] h-[100px] w-[100px] bg-transparent border border-2 rounded-full  flex justify-center items-center z-10">
                </div>
                <div onMouseEnter={() => setIsVisible((prev) => ({ ...prev, slider3: !prev.slider3 }))} className="absolute -bottom-12 left-[75%] h-[100px] w-[100px] bg-transparent border border-2 rounded-full  flex justify-center items-center z-10">
                </div>
                <div className="absolute bottom-10 ease-in slide-in right-[10%]  h-20 rounded-md  text-white font-bold text-[28px] flex justify-center items-center z-20">
                    {title}
                </div>
                <div className="absolute inset-0 bg-black opacity-60 flex justify-center items-center z-10">

                </div>
            </div>
        </div>
    );
}


export function AutoSlider({ slides }) {


    const [isVisible, setIsVisible] = useState({ slider1: false, slider2: false, slider3: false });

    const [currentSlide, setCurrentSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const [title, setTitle] = useState("");
    let sliderRef = useRef(null)
    useEffect(() => {
        if (!paused) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
                setTitle(slides[prevSlide].title)
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [slides.length, paused]);
    useEffect(() => {
        if (sliderRef?.current) {
            sliderRef.current.addEventListener("mouseover", (event) => {
                console.log("texts")
            });
        }
    }, [])
    const LowerButton = ({ left, title }) => {
        return (
            <div ref={sliderRef} onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider1: !prev.slider1 })) }} className={`absolute -bottom-5 ${left} h-[40px] slide-out  w-1/4 bg-transparent bg-orange-300  shadow-3xl rounded-md  flex justify-center items-center z-20`}>
                {title}
            </div>
        )
    }
    return (

        <div class="bg-gray-400 w-full h-[75vh] relative z-0">
            <p class="italic text-bold bd-red-100 font-serif">Map</p>
            <div class="absolute inset-0 flex justify-center items-center z-10">
                {slides.map((slide, index) => (
                    <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); }}
                        key={index}
                        className={`absolute inset-0 w-full h-full transform transition-transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {/* Slide content */}
                        <div className="w-full h-[75vh]  flex justify-center items-center">
                            <div className="bg-gray-400 w-full h-full relative z-0">
                                <img src={slide.image} alt="" className="w-full ease-in slide-in h-full object-cover" />
                                {/* {isVisible.slider1 && <div className="absolute bottom-0 left-[6%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
                            </div>}
                            {isVisible.slider2 && <div className="absolute bottom-0 left-[36%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
                            </div>}
                            {isVisible.slider3 && <div className="absolute bottom-0 left-[66%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
                            </div>}
                            <div ref={sliderRef} onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider1: !prev.slider1 })) }} className="absolute -bottom-12 left-[14%] h-[100px]  w-[100px] bg-transparent border border-2 rounded-full flex justify-center items-center z-10">
                         </div>
                            <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider2: !prev.slider2 })) }} className="absolute -bottom-12 left-[45%] h-[100px] w-[100px] bg-transparent border border-2 rounded-full  flex justify-center items-center z-10">
                            </div>
                            <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider3: !prev.slider3 })) }} className="absolute -bottom-12 left-[75%] h-[100px] w-[100px] bg-transparent border border-2 rounded-full  flex justify-center items-center z-10">
                            </div> */}
                                
                                <div className="absolute bottom-10  right-[10%]  h-20 rounded-md  text-white font-bold text-[28px] flex justify-center items-center z-20">
                                    {/* <div className="ease-in slide-in w-10 h-20 bg-green-200 "></div> */}
                                    {slide.title}
                                </div>
                                <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center z-10">

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <LowerButton left="left-[10%]" /> */}
            <LowerButton left="left-[38%]" />
            <LowerButton title={title} left="left-[66%]" />
        </div>

        // <div className="w-full h-[75vh]  flex justify-center items-center">
        //     {slides.map((slide, index) => (
        //         <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); }}
        //             key={index}
        //             className={`absolute inset-0 w-full h-full transform transition-transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
        //                 }`}
        //         >
        //             {/* Slide content */}
        //             <div className="w-full h-[75vh]  flex justify-center items-center">
        //                 <div className="bg-gray-400 w-full h-full relative z-0">
        //                     <img src={slide.image} alt="" className="w-full ease-in slide-in h-full object-cover" />
        //                     {/* {isVisible.slider1 && <div className="absolute bottom-0 left-[6%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
        //                     </div>}
        //                     {isVisible.slider2 && <div className="absolute bottom-0 left-[36%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
        //                     </div>}
        //                     {isVisible.slider3 && <div className="absolute bottom-0 left-[66%] h-[400px]  ease-in slide-in  w-1/4 bg-slate-400 rounded-md flex justify-center items-center z-20">
        //                     </div>}
        //                     <div ref={sliderRef} onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider1: !prev.slider1 })) }} className="absolute -bottom-12 left-[14%] h-[100px]  w-[100px] bg-transparent border border-2 rounded-full flex justify-center items-center z-10">
        //                  </div>
        //                     <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider2: !prev.slider2 })) }} className="absolute -bottom-12 left-[45%] h-[100px] w-[100px] bg-transparent border border-2 rounded-full  flex justify-center items-center z-10">
        //                     </div>
        //                     <div onMouseLeave={() => setPaused(false)} onMouseEnter={() => { setPaused(true); setIsVisible((prev) => ({ ...prev, slider3: !prev.slider3 })) }} className="absolute -bottom-12 left-[75%] h-[100px] w-[100px] bg-transparent border border-2 rounded-full  flex justify-center items-center z-10">
        //                     </div> */}
        //                     <LowerButton left="left-[10%]" />
        //                     <LowerButton left="left-[38%]" />
        //                     <LowerButton left="left-[66%]" />
        //                     <div className="absolute bottom-10  right-[10%]  h-20 rounded-md  text-white font-bold text-[28px] flex justify-center items-center z-20">
        //                         {/* <div className="ease-in slide-in w-10 h-20 bg-green-200 "></div> */}
        //                         {slide.title}
        //                     </div>
        //                     <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center z-10">

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    );
}



{/* <div
className="p-6 pt-0 pb-10 bg-veryLightGray mt-[40px] mr-6 ml-6"
key={testimony.id}
>
<div className="flex flex-col items-center gap-4">
    <img
        src={testimony}
        className="w-[80px] -mt-[40px]"
        alt={testimony.name}
    />
    <h3 className="text-darkBlue text-lg font-semibold text-center">
        {testimony.name}
    </h3>
    <p className="text-darkGrayishBlue text-center max-w-[20rem] lg:max-w-lg">
        {testimony.content}
    </p>
</div>
</div> */}