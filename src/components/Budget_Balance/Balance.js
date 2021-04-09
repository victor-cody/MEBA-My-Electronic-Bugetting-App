
const Budget = ({ balance = 0, currency = "$" }) => {
	return (
		<div className="budget_value">
			<span className="sign"></span>
			<span className="currency">{currency}</span>
			<span className="available_funds">{balance}</span>
		</div>
	);
};

export default Budget;
