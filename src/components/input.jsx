export function InputContainer({ custome, placeholder, label }) {
    return (
        <div className={`flex flex-col   justify-center h-full  w-full h-full `}>
            <div className="flex items-center justify-center w-full px-2 border border-1 h-full border-slate-300 dark:border-slate-400 hover:border-orange-600 ">
                <span className=" text-slate-500 font-bold capitalize sm:text-[18px] text-[12px]">{label}</span> <input className='w-full h-full bg-transparent focus:outline-none px-2' placeholder={placeholder} />
            </div>
        </div>
    )
}
export function TextAreaContainer({ custome, placeholder, label }) {
    return (
        <div className={`flex flex-col   justify-center h-full  w-full h-full `}>
            <div className="flex items-center justify-center w-full px-2 border border- h-full border-slate-300 dark:border-slate-400 hover:border-orange-600 ">
                <span className=" text-slate-500 font-bold capitalize sm:text-[18px] text-[12px]">{label}</span> <textarea className='w-full h-full bg-transparent focus:outline-none px-2' placeholder={placeholder} />
            </div>
        </div>
    )
}