import IncomesList from '../Budget_List/IncomeList';
import ExpensesList from '../Budget_List/ExpensesList';

const Budget = () => {
	return (

		<main className="main" id="main">

			<div className="container clearfix">
				{/* incomes list dialog  */}
				<IncomesList category="income" />
				{/* Expenses list dialog  */}
				<ExpensesList category="expenses" />
			</div>

		</main >

	)
}

export default Budget
