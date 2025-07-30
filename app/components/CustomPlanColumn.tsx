'use client'
import React, { useState } from "react";
import { prices } from "../data/prices";

const CustomPlanColumn = () => {
    const [total, setTotal] = useState(1250);

    const selectService = (
      e: React.ChangeEvent<HTMLInputElement>,
      value: number,
    ) => {
        const checked = e.target.checked;

        const newTotal = checked ? total + value : total - value;

        newTotal <= 1250 ? setTotal(1250) : setTotal(newTotal);
    }

    return (
        <div className="flex flex-col p-4 bg-white rounded-lg bg-opacity-90 md:mt-18">
            <div className="mb-12">
                <h2 className="text-left text-4xl text-center">Custom</h2>
                <p className="text-xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">${total}</p>
            </div>
            <div>
                {prices.map((el, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="border-b-2 border-solid py-2 mb-3">
                                <h3 className="text-left lg:text-md text-xl text-stone-900">{el.name}</h3>
                            </div>
                            {el.items.map((item, index2) => {
                                return (
                                    <div className="flex flex-start items-center" key={index2}>
                                        <input
                                          disabled={item.required}
                                          checked={item.required}
                                          type="checkbox"
                                          className="mb-2 mr-3"
                                          onChange={(e) => selectService(e, item.value)}
                                        />
                                        <p className={`lg:text-xs text-left mb-2 text-stone-900`}>{item.name}</p>
                                    </div>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
};

export default CustomPlanColumn;