import React from 'react'
import About from './../../assets/about.jpg'
function Brief() {
    return (
        <div className="flex w-full h-auto my-2">
            <div className="sm:w-2/3 w-full  sm:text-[16px] text-[14px]">
                <h2 className="sm:text-3xl text-xl text-slate-500">Masinde Foundation is The Non Profitable Organization</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae accusamus, aut mollitia explicabo dolorem nihil blanditiis, eius non eos hic. Vero, rerum? Dolorum voluptatem labore natus perferendis mollitia consequatur.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium architecto, eos expedita odit nostrum numquam ut error atque quo repellat ducimus, maiores quas dignissimos eius alias accusantium inventore, unde enim.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi libero est repellat porro, culpa dolorum! Incidunt voluptatem blanditiis ea illo omnis aperiam quod temporibus iusto deleniti ipsam. Aliquid, nostrum amet.
            </div>
            <div className="sm:w-1/3 px-10 sm:flex hidden shadow-3xl rounded-tl-[100px] rounded-br-[100px] ">
                <img src={About} alt="" className="h-full shadow-3xl  w-full rounded-tl-[100px] rounded-br-[100px] object-cover " />
            </div>
        </div>
    )
}

export default Brief 