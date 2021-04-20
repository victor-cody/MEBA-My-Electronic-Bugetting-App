import { useContext } from 'react';
import  BudgetIncome  from "../Budget_Income/Budget_Income";
import  BudgetExpenses  from "../Budget_Expenses/Budget_Expenses";
import { GlobalContext } from '../../contex/GlobalState';

const BudgetTotal = () => {

	const { GetTotals, GetPercentage } = useContext(GlobalContext)

	return (
		<div className="budget_items_container">
			{/* budget income */}
			<BudgetIncome totalIncome={GetTotals('income')} />
			{/* budget Expenses */}
			<BudgetExpenses
				totalExpenses={GetTotals('expenses')}
				expensesPercentage={GetPercentage()}
			/>
		</div>
	);
};

export default BudgetTotal;
