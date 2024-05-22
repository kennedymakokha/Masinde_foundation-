

import { Link } from 'react-router-dom';
import { Logo, teamPlayer } from '../../utils/images';
import { Title_bare } from '../../components/titleContainer';


const statistics = [
    {
        id: 1,
        imgSrc: Logo,
        title: 'Richard Maina',
        style: "top-[0%] sm:left-[3%]",
        desc: 'Rated 5 Masinde Foundation is a home for the homeless',
    },
    {
        id: 2,
        imgSrc: teamPlayer,
        title: 'James Ng\'ang\'a',
        style: "top-[5%] sm:flex hidden left-[27%]",
        desc: 'Am a product of Masinde Foundation and may God Bless you',
    },
    {
        id: 3,
        imgSrc: "",
        title: 'Charles Olung\'a',
        style: "top-[10%] sm:flex hidden left-[51%]",
        desc: "God Bless Masinde Foundation",
    },
    {
        id: 4,
        imgSrc: "",
        title: 'Christine Makokha',
        style: "top-[15%] sm:flex hidden left-[75%]",
        desc: 'You helped My children and May God Bless you ',
    },
];

const StateItem = ({ data }) => {
    return (
        <div class={`absolute border shadow-3xl ${data.style} h-[250px] bg-white rounded-md sm:w-[20%] w-full   flex justify-center items-center z-20`}>
            <div class="absolute border p-2 bg-white shadow-3xl h-[100px] w-[100px] rounded-full left-5 -top-[17%]  flex justify-center items-center z-10">
                <img src={data.imgSrc} alt="" className='h-full w-full  rounded-full' />
            </div>
            <div class="absolute  w-full flex-col px-2 pb-2   top-[34%]  flex justify-center items-center z-10">
                <h2 className="text-slate-600 font-semibold text-center">{data.title}</h2>
                <h1 className="text-[18px] text-center">{data.desc}</h1>
            </div>
            {data.style !== "top-[15%] left-[75%]" && <div class="absolute sm:flex hidden  h-[10px] w-[50px] bg-orange-600  -right-[21.5%] top-[40%]  flex justify-center items-center z-10">
            </div>}

        </div>
    )
}
const Statistics = ({ links, setLinks, onDeleteLink }) => {
    return (
        <>
            <Title_bare text="font-semibold text-slate-300 dark:text-blackmode-300 text-3xl " title="Testimonies" />
            <div class=" w-full h-[300px]  relative z-0 mt-20">

                <div class="absolute inset-0 flex justify-center items-center z-10">

                </div>
                {statistics.map((stat) => (
                    <StateItem key={stat.id} data={stat} />
                ))}


            </div>
        </>


        //  <div
        //             className='px-6 relative bg-white w-[400px] shadow-sm pb-8 rounded-md lg:pb-10 stats'

        //         >
        //             <div className='absolute left-1/2 -top-1/2 translate-y-[90%] translate-x-[-50%] bg-darkViolet p-5 rounded-full lg:left-1/4 lg:translate-y-[110%]'>
        //                 <img
        //                     src=""
        //                     className=''
        //                     alt='Brand icon'
        //                 />
        //             </div>

        //             <p className='text-2xl font-semibold text-veryDarkBlue mt-16 text-center lg:text-left'>
        //                 Kennedy
        //             </p>

        //             <p className='body-text text-center mt-4 lg:text-left'>
        //                 awesome
        //             </p>
        //         </div>
    );
};

export default Statistics;
