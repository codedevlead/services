'use client'

import { plans } from "../data/plans"
import PlanColumn from "../components/PlanColumn";
import CustomPlanColumn from "../components/CustomPlanColumn";
import { motion, useAnimate, Variants } from 'framer-motion';

const parentVariant: Variants = {
  initial: { y: 400, opacity: 0 },
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5 + index*0.2,
      type: "spring",
      stiffness: 50 + index*5,
      damping: 8
    },
  })
}

const childVariant = {
  initial: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.5,
    }
  }
}

const Plans = () => {
  const [scope, animate] = useAnimate();

  const animateOffer = () => {
    animate(
      scope.current,
      { opacity: 1 },
      {
        duration: 0.7,
        delay: 0.2
      }
    )
  }

  return (
    <section>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
        {plans.map((el, index) => (
          <motion.div
            key={el.id}
            variants={parentVariant}
            custom={index}
            initial={"initial"}
            animate={"visible"}
            onAnimationComplete={() => animateOffer()}
          >
            <motion.div
              ref={scope}
              initial={{opacity: 0}}
              className={`${!el.best ? 'hidden' : ''} flex-col items-center justify-center w-full p-2 bg-purple-500 border border-2 border-purple-400 border-b-0 rounded-lg rounded-b-none`}
            >
              <p className="text-center uppercase font-bold text-lg italic text-white">Best offer</p>
              <p className="text-center uppercase font-bold text-lg italic text-white">12% Saving!!</p>
            </motion.div>
            <PlanColumn data={el} />
          </motion.div>
        ))}
        <motion.div
            variants={parentVariant}
            custom={1.1}
            initial={"initial"}
            animate={"visible"}
        >
          <CustomPlanColumn />
        </motion.div>
      </div>
    </section>
  )
};

export default Plans;