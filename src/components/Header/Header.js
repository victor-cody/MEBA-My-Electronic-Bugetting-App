import Budget from '../Budget_Balance/Balance';
import BudgetTotal from '../Budget_Total/Budget_Total';
import BudgetForm from '../Budget_Form/BudgetForm';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="budget_title">
					<h1>Available Funds for , <span className="budget_title_month">%Month%</span></h1>
				</div>
				{/* total budget balance */}
				<Budget />
				{/* Total Income and expenses field container */}
				<BudgetTotal />
				<p className="err_msg"></p>
				<BudgetForm />
			</div>
		</header >
	);
};

export default Header;
