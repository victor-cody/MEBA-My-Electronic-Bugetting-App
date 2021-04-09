
const BudgetIncome = ({ totalIncome = 0 }) => {
	return (
		<div className="budget_income clearfix viewer">
			<div className="budget_income-text">Total Income:</div>
			<div className="right">
				<div className="budget_income-value"> {totalIncome} </div>
				<div className="budget_income-percentage">&nbsp;</div>
			</div>
		</div>
	);
};

export default BudgetIncome;
