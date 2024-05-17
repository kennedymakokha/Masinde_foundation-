
import { useState, useRef, useEffect } from "react";
export default function ImageSlider({ images }) {
    const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const sliderCurrent = sliderRef.current;

        if (!sliderCurrent) {
            return;
        }

        const slides = sliderCurrent.querySelectorAll("div");
        const slidesArray = Array.from(slides);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = slidesArray.indexOf(entry.target);
                        setCurrentSlideIndex(index);
                    }
                });
            },
            {
                root: sliderCurrent,
                threshold: 0.5,
            }
        );
        slides.forEach((slide) => observer.observe(slide));

        return () => slides.forEach((slide) => observer.unobserve(slide));
    }, []);
    return (
        <div className="w-full   ">
            <div ref={sliderRef}
                className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory"
                style={{
                    paddingBottom: "1px",
                    clipPath: "inset(0 0 15px 0)",
                }}
            >
                  {images.map((url) => {
                    return (
                        <div key={url} className="w-full flex-shrink-0 snap-start">
                            <img src={url} className="w-full object-cover"/>
                        </div>
                    );
                })}
            </div>
          
            <div className="w-full h-0.5 relative bg-gray-300">
                <div
                    className="h-0.5 absolute top-0 left-0 bg-gray-500"
                    style={{
                        width: `${indicatorWidthPercent}%`,
                        left: `${indicatorWidthPercent * currentSlideIndex}%`,
                        transition: "left 150ms ease-in-out",
                    }}
                />
            </div>
        </div>
    );
}