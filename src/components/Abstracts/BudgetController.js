import { useContext } from 'react';
import { GlobalContext } from '../../contex/GlobalState';

// Function to calculate the total income.
export const GetTotalIncome = () => {
	const {  totals , incomes } = useContext(GlobalContext);
	totals.income = incomes.reduce((init, data) => init + data.value, 0)
	return totals.income;
}

// Function to calculate the total expenses.
export const GetTotalExpense = () => {
	const { totals, expenses } = useContext(GlobalContext);
	totals.expenses = expenses.reduce((init, data) => init + data.value, 0)
	return totals.expenses;
}

//our function to calculate the Budget
export const GetBudget = () => {
	let { budget, totals } = useContext(GlobalContext);
	//calculate the total expenses and income
	totals.income = GetTotalIncome();
	totals.expenses = GetTotalExpense();
	//Calculate the budget: income - expeses
	budget = totals.income - totals.expenses;
	return budget;
}

export const GetPercentage = () => {
	let { totals, percentage } = useContext(GlobalContext);
	//calculate the total percentage of the income spent on expenses
	if (totals.income > 0) percentage = Math.floor((totals.expenses / totals.income) * 100);
	else percentage = -1;
	return percentage;
}

export const CalcPercentages = () => {
	let { expenses, totals, percentages } = useContext(GlobalContext)
	
		percentages = expenses.map(expense => {
			let value = Math.floor((expense.value / totals.income) * 100);
			return value
		});
		console.log(percentages);
		return percentages;
	}
