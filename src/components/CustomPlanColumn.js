import { useState } from "react";
import { prices } from "../data/prices";

const CustomPlanColumn = () => {
    const [total, setTotal] = useState(0);

    const selectService = (value) => {
        console.log(value)
    }

    return (
        <div className="flex flex-col p-4">
            <h2 className="text-left text-4xl">Custom</h2>
            <div>
                {prices.map((el, index) => {
                    return (
                        <>
                            <div className="border-b-2 border-solid py-2">
                                <h3 className="text-left text-md">{el.name}</h3>
                            </div>
                            {el.items.map((item) => {
                                return (
                                    <div className="flex flex-start items-center">
                                        <input type="checkbox" className="mb-2 mr-3" onChange={() => selectService(item)}/>
                                        <p className={`text-xs text-left mb-2`}>{item.name}</p>
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
