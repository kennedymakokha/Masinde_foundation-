import React, { useState } from 'react'
import { Paraggraph, Title_bare } from '../../components/titleContainer'

function Sidebar({ }) {
    const [items, setItems] = useState([
        {
            i: 1, title: "clean Water", show: false,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga ipsam perspiciatis eaque reiciendis eius magni quod voluptas voluptate, reprehenderit laborum, dolores doloribus autem nihil omnis, sint fugiat explicabo rerum!"
        },
        {
            i: 2, title: "children education", show: false,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga ipsam perspiciatis eaque reiciendis eius magni quod voluptas voluptate, reprehenderit laborum, dolores doloribus autem nihil omnis, sint fugiat explicabo rerum!"
        },
        {
            i: 3, title: "Healthy Food", show: false,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga ipsam perspiciatis eaque reiciendis eius magni quod voluptas voluptate, reprehenderit laborum, dolores doloribus autem nihil omnis, sint fugiat explicabo rerum!"
        },
        {
            i: 3, title: "Medication ", show: false,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga ipsam perspiciatis eaque reiciendis eius magni quod voluptas voluptate, reprehenderit laborum, dolores doloribus autem nihil omnis, sint fugiat explicabo rerum!"
        },
        {
            i: 3, title: "Nutritions", show: false,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga ipsam perspiciatis eaque reiciendis eius magni quod voluptas voluptate, reprehenderit laborum, dolores doloribus autem nihil omnis, sint fugiat explicabo rerum!"
        },
        {
            i: 3, title: "National Charity drive", show: false,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga ipsam perspiciatis eaque reiciendis eius magni quod voluptas voluptate, reprehenderit laborum, dolores doloribus autem nihil omnis, sint fugiat explicabo rerum!"
        },
    ])
    const handleAcre = (i) => {
        let newArr = [...items]
        let newItem = newArr[i]
        newItem.show = !newItem.show
        setItems(newArr)
        // arrayvar: [...prevState.arrayvar, newelement]
    }
    return (
        <div className="flex sm:w-[30%]  w-full mt-0 sm:px-5 px-2">
            <div className="flex w-full  sm:p-2 flex-col">
                <Title_bare title="Causes Categories" />
                <div className="flex w-full sm:mt-3 bg-orange-600 rounded-md flex-col">
                    {items.map((item, i) => (
                        <div key={i} className='mb-1 rounded-md '>
                            <div onClick={() => handleAcre(i)} className={`flex w-full h-8 p-5 items-center rounded-md rounded-sm ${item.show === true ? "bg-orange-500  text-slate-50" : "bg-orange-600 text-white"} justify-between`}>
                                <span className="text-[18px] capitalize dark:text-blackmode-200">{item.title}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 dark:text-blackmode-200">
                                    <path stroke-linecap="round" stroke-linejoin="round" d={!item.show ? "m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" : "m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"} />
                                </svg>
                            </div>
                            {item.show && <div className="flex w-full p-2 text-justify  dark:bg-blackmode-400 text-slate-200 bg-blackmode-300 h-auto">
                               <Paraggraph p={item.desc} />
                            </div>}
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Sidebar