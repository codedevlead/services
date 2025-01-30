import { prices } from "../data/prices";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const PlanColumn = ({ data }) => {
    return (
        <div className="flex flex-col">
            <h2 className="text-left text-4xl">{data.name}</h2>
            <div>
                {prices.map((el, index) => {
                    if (data.name === "Required" && index > 0) return null;
                    return (
                        <>
                            <div className="border-b-2 border-solid py-2">
                                <h3 className="text-left text-lg">{el.name}</h3>
                            </div>
                            {el.items.map((item) => {
                                const includedInPlan = item.planIncluded.includes(data.id)
                                return (
                                    <div className="flex flex-start items-start">
                                        {includedInPlan
                                            ? <FaCheck className="pr-2 mt-0" size={20} color="#00d492" />
                                            : <IoCloseSharp className="pr-2 mt-0" size={20} color="#fb2c36" />
                                        }
                                        <p className={`text-sm text-left mb-2 ${!includedInPlan ? 'line-through font-light text-gray-500' : ''}`}>{item.name}</p>
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
