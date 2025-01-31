import { prices } from "../data/prices";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const PlanColumn = ({ data }) => {
    return (
        <div className="flex flex-col p-4 shadow-lg rounded-lg bg-white bg-opacity-90">
            <div className="mb-12">
                <h2 className="text-left text-4xl text-center">{data.name}</h2>
                <p className="text-xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">${data.value}/month</p>
            </div>
            <div>
                {prices.map((el, index) => {
                    if (data.name === "Required" && index > 0) return null;
                    return (
                        <>
                            <div className="border-b-2 border-solid py-2 mb-3">
                                <h3 className="text-left lg:text-md text-xl">{el.name}</h3>
                            </div>
                            {el.items.map((item) => {
                                const includedInPlan = item.planIncluded.includes(data.id)
                                return (
                                    <div className="flex flex-start items-start">
                                        {includedInPlan
                                            ? <FaCheck className="pr-2 mt-0" size={20} color="#00d492" />
                                            : <IoCloseSharp className="pr-2 mt-0" size={20} color="#fb2c36" />
                                        }
                                        <p className={`lg:text-xs text-left mb-2 ${!includedInPlan ? 'line-through font-light text-gray-500' : ''}`}>{item.name}</p>
                                    </div>
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </div>
    )
};

export default PlanColumn;
