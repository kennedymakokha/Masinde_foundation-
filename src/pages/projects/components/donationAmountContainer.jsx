import React from 'react'

function DonationAmountContainer({ custome, amount }) {
    return (
        <div className={`flex items-center justify-center h-full ${custome ? "w-[40%] " : "w-[20%]"} h-full px-2`}>
            <div className="flex items-center justify-center w-full border border-1 h-full border-slate-300 dark:border-slate-400 hover:border-orange-600 ">
                {custome ? <input className='w-full h-full bg-transparent focus:outline-none px-2' placeholder='Custom Value' /> : <span className="sm:text-[18px] text-[12px] font-bold text-orange-600 0 flex item-center justify-center">Ksh {amount}</span>}
            </div>
        </div>
    )
}

export default DonationAmountContainer

