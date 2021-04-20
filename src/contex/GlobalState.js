import React, { createContext, useReducer , useContext} from 'react';
import AppReducer from './AppReducer';

//initial State
const initialState = {
		incomes: [
			{ id: 1, description: "Salary", value: 50_000 },
			{ id: 2, description: "Technical Writing", value: 20_000 },
			{ id: 3, description: "AFL", value: 50_000 },
			{ id: 4, description: "Side Hustle", value: 90_000 }
		],
		expenses: [
			{ id: 1, description: "Rent", value: 40_000 },
			{ id: 2, description: "Data", value: 20_000 },
			{ id: 3, description: "Charity", value: 80_000 },
			{ id: 4, description: "Gods Work", value: 50_000 },
		]
,
	totals: {
		income: 0,
		expenses: 0,
	},
	budget: 0,
	percentage: -1,
}

console.log(initialState);

//Create Contex
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Function to calculate the total of either expenses or income
	 const GetTotals = (type) => {
		const { transactions, totals } = useContext(GlobalContext);
		totals[type] = transactions[type].reduce((init, data) => init + data.value, 0)
		return totals[type];
	}

	//our function to calculate the Budget
	 const GetBudget = () => {
		let { budget, totals } = useContext(GlobalContext);
		//calculate the total expenses and income
		totals.income = GetTotals('income');
		totals.expenses = GetTotals('expenses');
		//Calculate the budget: income - expeses
		budget = totals.income - totals.expenses;
		return budget;
	}

	 const GetPercentage = () => {
		let { totals, percentage } = useContext(GlobalContext);
		//calculate the total percentage of the income spent on expenses
		if (totals.income > 0) percentage = Math.round((totals.expenses / totals.income) * 100);
		else percentage = -1;
		return percentage;
	}

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
			//DOM ACTIONS
			GetBudget,
			GetTotals,
			GetPercentage,
			// STATE ACTIONS
			deleteTransaction
		}}>
			{children}
		</GlobalContext.Provider>
	)

}
