import React, { useContext } from 'react';
import BudgetItem from '../Budget_Item/BudgetItem';
import { GlobalContext } from '../../contex/GlobalState'

const IncomesList = ({ category }) => {
	const isExpense = category === "expenses" ? true : false;

	const { incomes } = useContext(GlobalContext)
	console.log(incomes);

	return (
		<div className={category}>
			<h2 className={`${category}_title`}>{category} History</h2>

			<ul className={`${category}-list`} id={`${category}-list`}>
				{incomes.map((transaction, id) => (

					<BudgetItem
						key={id}
						item={transaction}
						isExpense={isExpense}
					/>
				)
				)}
			</ul>

		</div >
	);
};

export default IncomesList;
