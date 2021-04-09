import  BudgetIncome  from "../Budget_Income/Budget_Income";
import  BudgetExpenses  from "../Budget_Expenses/Budget_Expenses";

const BudgetTotal = () => {
	return (
		<div className="budget_items_container">
			{/* budget income */}
			<BudgetIncome />
			{/* budget Expenses */}
			<BudgetExpenses />
		</div>
	);
};

export default BudgetTotal;
