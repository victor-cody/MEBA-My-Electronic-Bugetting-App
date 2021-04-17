import { formatNumber } from '../Abstracts/ViewController';

const Budget = ({ balance = 0, currency = "$" }) => {
	return (
		<div className="budget_value">
			<span className="sign">{balance >= 0 ? '+' : '-'}</span>
			<span className="currency">{currency}</span>
			<span className="available_funds">{formatNumber(balance)}</span>
		</div>
	);
};

export default Budget;
