// import React, { useContext ,useState } from 'react';
// import BudgetItem from '../Budget_Item/BudgetItem';
// import { GlobalContext } from '../../contex/GlobalState'

// const BudgetList = ({ category }) => {
// 	const [type, setType] = useState(category)
// 	const isExpense = category === "expenses" ? true : false;
// 	// const items = [{ name: "Coins", value: 555 }, { name: "Grossries", value: 1555 }, { name: "Coins", value: 555 }, { name: "Coins", value: 555 }, { name: "Coins", value: 855 }
// 	// ];

// 	const { transactions } = useContext(GlobalContext)
// 	const transactionsList = transactions[type];
// 	console.log(transactionsList);

// 	return (
// 		<div className={category}>
// 			<h2 className={`${category}_title`}>{category} History</h2>

// 			<ul className={`${category}-list`} id={`${category}-list`}>
// 				{transactionsList.map((transaction, id) => (

// 					<BudgetItem
// 						key={id}
// 						item = {transaction}
// 						isExpense={isExpense}
// 					/>
// 				)
// 				)}
// 			</ul>

// 		</div >
// 	);
// };

// export default BudgetList;
