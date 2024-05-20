import { Carousel } from "nuka-carousel";

import useMedia from "use-media";
import { slider1, slider2 } from "../../../utils/images";
import ImageSlider, { AutoSlider } from "./imageSlider";

const Testimonials = () => {
    const isWide = useMedia({ minWidth: "976px" });
    let testimonials = [{ title: "WORK HARDDISCOVER YOUR BODY", image: slider2 , },
    { title: "WORK HARDDISCOVER 2024", image: slider1 }
    ]
    const controls = {
        centerLeft: "<",
        centerRight: ">",
    };

    return (
       
            <AutoSlider slides={testimonials} />
       

        // <div className="container mx-auto flex flex-col   space-y-28 md:mb-32">

        //     <Carousel
        //         autoplay={true}
        //         autoplayInterval={5000}
        //         scrollMode={"remainder"}
        //         // slidesToShow={isWide ? 3 : 1}
        //         // withoutControls={isWide ? true : false}
        //         // wrapAround={isWide ? true : false}
        //         pauseOnHover={false}
        //         renderCenterLeftControls={controls.centerLeft}
        //         renderCenterRightControls={controls.centerRight}
        //         className="overflow-x-hidden max-w-sm lg:max-w-full"
        //     >
        //         {testimonials.map((testimony) => (
        //             <ImageSlider data={testimony} />
        //         ))}
        //     </Carousel>
        // </div>

    );
};

export default Testimonials;
