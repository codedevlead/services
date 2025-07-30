'use client'

import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { prices } from "../data/prices";
import { PlansType } from "../data/plans";
import React from "react";
import { motion } from 'framer-motion';
import TooltipContent from "./Tooltip";

type PlanColumnType = {
  data: PlansType;
}

const PlanColumn = ({ data }: PlanColumnType) => {
  const paymentValue = data.monthlyPayment
    ? `$${data.value} + ${data.monthlyPayment}/month`
    : `$${data.value}`;
  
  return (
    <div
      className={`flex flex-col p-4 shadow-lg rounded-lg bg-white bg-opacity-90 ${data.best ? "" : "md:mt-[73px]"}`}
    >
      <div className="mb-12">
        <h2 className="text-left text-4xl text-center">{data.name}</h2>
        <p
          className="text-xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          {paymentValue}
        </p>
      </div>
      <div>
        {prices.map((el, index) => {
          if (data.name === "Required" && index > 1) return null;
          return (
            <React.Fragment key={index}>
              <motion.div
                className="border-b-2 border-solid py-2 mb-3"
              >
                <h3 className="text-left lg:text-md text-xl text-stone-900">{el.name}</h3>
              </motion.div>
              {el.items.map((item, index2) => {
                const includedInPlan = item.planIncluded.includes(data.id)
                return (
                  <motion.div
                    className="flex flex-start items-start mb-2" key={index2}
                  >
                    {data.id === "3" && (
                      <TooltipContent data={item.info} />
                    )}
                    {includedInPlan
                      ? <FaCheck className="pr-2 mt-0" size={20} color="#00d492" />
                      : <IoCloseSharp className="pr-2 mt-0" size={20} color="#fb2c36" />
                    }
                    <p className={`lg:text-xs text-left mb-0 ${!includedInPlan ? 'line-through font-light text-gray-500' : 'text-stone-900'}`}>{item.name}</p>
                  </motion.div>
                )
              })}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
};

export default PlanColumn;