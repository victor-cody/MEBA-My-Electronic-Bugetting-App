export default function AppReducer (state,action)  {
	switch (action.type) {
		case 'DELETE':
			console.log(action.itemType)
			console.log(action.itemID);
			return {
				...state,
				transactions: state.transactions[action.itemType].filter( item => item.id !== action.itemID)
			}
	
		default:
			return state;
	}
}
