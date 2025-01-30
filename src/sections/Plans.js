import { plans } from "../data/plans"
import PlanColumn from "../components/PlanColumn";
import CustomPlanColumn from "../components/CustomPlanColumn";

const Plans = () => {
    return (
        <section>
            <div className="grid grid-cols-4">
                {plans.map((el) => (
                    <PlanColumn data={el} />
                ))}
                <CustomPlanColumn />
            </div>
        </section>
    )
};

export default Plans;