import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial State
const initialState = {
		incomes: [
			// { id: 0, description: "Salary", value: 50_000 },
			// { id: 1, description: "Technical Writing", value: 20_000 },
			// { id: 2, description: "AFL", value: 50_000 },
			// { id: 3, description: "Side Hustle", value: 90_000 }
		],
		expenses: [
			// { id: 0, description: "Rent", value: 40_000 },
			// { id: 1, description: "Data", value: 20_000 },
			// { id: 2, description: "Charity", value: 80_000 },
			// { id: 3, description: "Gods Work", value: 50_000 },
		]
,
	totals: {
		income: 0,
		expenses: 0,
	},
	budget: 0,
	percentages: [],
	percentage: -1,
}

console.log(initialState);

//Create Contex
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Function to calculate the total of either expenses or income
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
			itemID:id,
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
