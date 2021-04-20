import  BudgetIncome  from "../Budget_Income/Budget_Income";
import  BudgetExpenses  from "../Budget_Expenses/Budget_Expenses";
import {  GetPercentage, GetTotalIncome, GetTotalExpense } from '../Abstracts/BudgetController';

const BudgetTotal = () => {

	return (
		<div className="budget_items_container">
			{/* budget income */}
			<BudgetIncome totalIncome={GetTotalIncome()} />
			{/* budget Expenses */}
			<BudgetExpenses
				totalExpenses={GetTotalExpense()}
				expensesPercentage={GetPercentage()}
			/>
		</div>
	);
};

export default BudgetTotal;
