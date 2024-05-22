/* eslint-disable react/prop-types */

import { Button } from "../../../components/button";
import { InputContainer, TextAreaContainer } from "../../../components/input";
import TitleContainer, { Title_bare } from "../../../components/titleContainer";
import { pay1 } from "../../../utils/images";
import DonationAmountContainer from "./donationAmountContainer";



const DonnationModal = ({ showModal, setShowModal, }) => {

    const InputC = ({ name }) => {
        return (
            <div className="flex w-[48%]  ">
                <InputContainer label={name} />
            </div>
        )
    }

    return (
        <>

            {showModal ? (
                <>
                    <div className="flex  overflow-x-hidden sm:px-2 fixed sm:top-[10%] top-10 sm:left-[20%] left-2 right-2 sm:right-[10%] z-20 outline-none focus:outline-none">
                        <div className="relative  sm:w-3/4 w-[96%] z-50  my-2 sm:mx-auto mx-2 ">
                            <div className="border-0 rounded-lg  relative flex flex-col  bg-blackmode-200 dark:bg-slate-200 outline-none focus:outline-none">
                                <div className="flex items-start justify-between px-5 pt-2 border-b border-solid border-gray-300 rounded-t ">
                                    <TitleContainer title="Make a donation" />
                                    <div onClick={() => setShowModal(false)} className="h-6 w-6 p-0  border flex items-center justify-center rounded-full text-center text-2xl font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="hover:text-orange-600 dark:text-orange-600  text-primary-100 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                                <div className="relative px-1 bg-blackmode-100  sm:h-[430px] h-[370px] dark:bg-slate-300 flex-auto">
                                    <div className=" flex flex-col sm:px-8 px-1 sm:py-1 py-0 w-full">
                                        <Title_bare text="font-semibold text-slate-300 dark:text-blackmode-300 " title="Donate Now" />
                                        <div className="flex   w-full sm:h-10 mt-8 h-8  my-2  ">
                                            <DonationAmountContainer amount={100} />
                                            <DonationAmountContainer amount={500} />
                                            <DonationAmountContainer amount={1000} />
                                            <DonationAmountContainer amount={100} custome />
                                        </div>
                                        <Title_bare text="font-semibold px-2  text-slate-300 dark:text-blackmode-300 sm:text-2xl text-xl" title="Payment Method:" />
                                        <div className="flex w-full gap-y-2 mt-6 sm:flex-row flex-col px-2">
                                            <div className="flex sm:w-1/2   w-full ">
                                                <div className="flex w-1/2 gap-x-2  ">
                                                    <input type="checkbox" name="crt" id="" />
                                                    <span className="sm:text-[18px] text-slate-400 dark:text-blackmode-300 text-[12px]">Online</span>
                                                </div>
                                                <div className="flex w-1/2  gap-x-2  ">
                                                    <input type="checkbox" name="crt" id="" />
                                                    <span className="sm:text-[18px] text-slate-400 dark:text-blackmode-300 text-[12px]">Credit Card</span>

                                                </div>
                                            </div>
                                            <div className="flex sm:w-1/2  w-full ">
                                                <img src={pay1} alt="" className=" w-full object-contain h-full" />
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-col gap-y-2 px-2">
                                            <Title_bare text="font-semibold text-slate-300 dark:text-blackmode-300 sm:text-2xl text-xl" title="Personal Information" />
                                            <div className="flex mt-4"></div>
                                            <div className="flex w-full gap-3 flex-wrap  ">
                                                <InputC name="name" />
                                                <InputC name="email" />
                                                <InputC name="phone" />
                                                <InputC name="address" />

                                            </div>
                                            <div className="flex w-full  ">
                                                <TextAreaContainer label="address" />

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <div className="sm:w-2/3 w-1/2"></div>
                                    <div className="sm:w-1/3 w-1/2 gap-x-2 flex px-2">
                                        <Button onClick={() => setShowModal(false)} inline title="cancel" />
                                        <Button title="Submit" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
        </>
    );
};

export default DonnationModal;

