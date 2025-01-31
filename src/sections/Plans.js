import { plans } from "../data/plans"
import PlanColumn from "../components/PlanColumn";
import CustomPlanColumn from "../components/CustomPlanColumn";

const Plans = () => {
    return (
        <section>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                {plans.map((el) => (
                    <PlanColumn data={el} />
                ))}
                <CustomPlanColumn />
            </div>
        </section>
    )
};

export default Plans;