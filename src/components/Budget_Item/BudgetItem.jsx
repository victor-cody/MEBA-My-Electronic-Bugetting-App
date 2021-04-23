import { useContext } from 'react';
import { GlobalContext } from '../../contex/GlobalState';
import { CalcPercentages } from '../Abstracts/BudgetController';
import { formatNumber } from '../Abstracts/ViewController';

const BudgetItem = ({ item: { description, value, id, }, isExpense }) => {

	const DISPATCH = isExpense ? 'DELETE_EXPENSES' : 'DELETE_INCOME';

	const { deleteTransaction } = useContext(GlobalContext);
	const isExpPercent = isExpense &&
		<div className="item_percentage" style={{
			margin: '0 .2rem',
			transform: ' translateX(-1rem)'
		}}>
		{ CalcPercentages()[id] > 0 ? CalcPercentages()[id]+'%' : '-' }
	</div>;
	
	return (
		<div className="item clearfix" id={isExpense ? `expense-${id}` : `income-${id}`}>
			<div className="item_description">{description}</div>
			<div className="right clearfix">
				<div className="item_value">
					{isExpense ? '-' : '+'}${formatNumber(value)}
				</div>
				{isExpPercent}
				<div className="item_delete">
					<button
						onClick={() => deleteTransaction(DISPATCH, id)}
						className="item_delete-btn"
						title="delete item">
						<i className="ion-ios-close-outline"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BudgetItem;
