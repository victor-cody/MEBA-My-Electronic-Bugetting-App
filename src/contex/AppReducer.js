export default function AppReducer (state,action)  {
	console.log(`this is the ${state}`);
	switch (action.type) {
		case 'DELETE_EXPENSES':
			console.log(action.itemID);
			return {
				...state,
				expenses: state.expenses.filter( item => item.id !== action.itemID)
			}

		case 'DELETE_INCOME':
			console.log(action.itemID);
			return {
				...state,
				incomes: state.incomes.filter(item => item.id !== action.itemID)
			}
	
		default:
			return state;
	}
}
