import { useContext } from 'react';
import { GlobalContext } from '../../contex/GlobalState';

//Function to calculate the total of either expenses or income
export const GetTotals = (type) => {
	const { transactions, totals } = useContext(GlobalContext);
	totals[type] = transactions[type].reduce((init, data) => init + data.value, 0)
	return totals[type];
}

//our function to calculate the Budget
export const GetBudget = () => {
	let { budget, totals } = useContext(GlobalContext);
	//calculate the total expenses and income
	totals.income = GetTotals('income');
	totals.expenses = GetTotals('expenses');
	//Calculate the budget: income - expeses
	budget = totals.income - totals.expenses;
	return budget;
}

export const GetPercentage = () => {
	let { totals, percentage } = useContext(GlobalContext);
	//calculate the total percentage of the income spent on expenses
	if (totals.income > 0) percentage = Math.round((totals.expenses / totals.income) * 100);
	else percentage = -1;
	return percentage;
}
