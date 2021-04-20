import React, { useContext } from 'react';
import BudgetItem from '../Budget_Item/BudgetItem';
import { GlobalContext } from '../../contex/GlobalState'

const BudgetList = ({ category }) => {
	const isExpense = category === "expenses" ? true : false;

	const { transactions } = useContext(GlobalContext)
	const transactionsList = transactions[category];
	console.log(transactionsList);

	return (
		<div className={category}>
			<h2 className={`${category}_title`}>{category} History</h2>

			<ul className={`${category}-list`} id={`${category}-list`}>
				{transactionsList.map((transaction, id) => (

					<BudgetItem
						key={id}
						item = {transaction}
						isExpense={isExpense}
					/>
				)
				)}
			</ul>

		</div >
	);
};

export default BudgetList;
