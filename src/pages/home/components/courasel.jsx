import React from 'react'
import ImageSlider from './imageSlider'

function Courasel() {
    return (
        <ImageSlider
            images={[
                "https://picsum.photos/id/10/960/540",
                "https://picsum.photos/id/11/960/540",
                "https://picsum.photos/id/12/960/540",
            ]}
        />
    )
}

export default Courasel