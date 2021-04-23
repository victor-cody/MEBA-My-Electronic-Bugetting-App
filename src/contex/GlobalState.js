import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial State
const initialState = {
	incomes: [
		// { id: 1, description: "Salary", value: 50_000 },
		// { id: 2, description: "Technical Writing", value: 20_000 },
		// { id: 3, description: "AFL", value: 50_000 },
		// { id: 4, description: "Side Hustle", value: 90_000 }
	],
	expenses: [
		// { id: 1, description: "Rent", value: 40_000 },
		// { id: 2, description: "Data", value: 20_000 },
		// { id: 3, description: "Charity", value: 80_000 },
		// { id: 4, description: "Gods Work", value: 50_000 },
	]
	,
	totals: {
		income: 0,
		expenses: 0,
	},
	budget: 0,
	percentages:[],
	percentage: -1,
}

console.log(initialState);

//Create Contex
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

//ACTIONS

	// calcPercentages() {
	// 	let percentage = DataStructure.allItem.exp.map(exp => {
	// 		let value = Math.round((exp.value / DataStructure.totals.inc) * 100);
	// 		return value
	// 	});
	// 	DataStructure.percentages = percentage;
	// }

	function addTransaction(category, transaction) {
		dispatch({
			type: category,
			newItem: transaction
		})
	};
	//deleting an item from the budget and the initialState
	function deleteTransaction(category, id) {
		//retriving the id of each element in our array income or expeses
		dispatch({
			type: category,
			itemID: id,
		})
	};


	return (
		<GlobalContext.Provider value={{
			incomes: state.incomes,
			expenses: state.expenses,
			totals: state.totals,
			budget: state.budget,
			// STATE ACTIONS
			deleteTransaction,
			addTransaction
		}}>
			{children}
		</GlobalContext.Provider>
	)

}
