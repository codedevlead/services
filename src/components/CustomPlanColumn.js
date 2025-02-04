import { useState } from "react";
import { prices } from "../data/prices";

const CustomPlanColumn = () => {
    const [total, setTotal] = useState(0);

    const selectService = (e, value) => {
        const checked = e.target.checked;

        let newTotal = checked ? total + value : total - value;

        newTotal <= 0 ? setTotal(0) : setTotal(newTotal);
    }

    return (
        <div className="flex flex-col p-4 bg-white rounded-lg bg-opacity-90">
            <div className="mb-12">
                <h2 className="text-left text-4xl text-center">Custom</h2>
                <p className="text-xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">${total}/month</p>
            </div>
            <div>
                {prices.map((el, index) => {
                    return (
                        <>
                            <div className="border-b-2 border-solid py-2 mb-3">
                                <h3 className="text-left lg:text-md text-xl">{el.name}</h3>
                            </div>
                            {el.items.map((item) => {
                                return (
                                    <div className="flex flex-start items-center">
                                        <input type="checkbox" className="mb-2 mr-3" onChange={(e) => selectService(e, item.value)}/>
                                        <p className={`lg:text-xs text-left mb-2`}>{item.name}</p>
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

export default CustomPlanColumn;
