import React , {createContext, useReducer} from 'react' ;
import AppReducer from './AppReducer';

//initial State
const initialState = {
		transactions: {
			income:[
				{ id: 1, description: "Salary", value: 50_000 },
				{ id: 2, description: "Technical Writing", value: 20_000 },
				{ id: 3, description: "AFL", value: 50_000 },
				{ id: 4, description: "Side Hustle", value: 90_000 }
			],
			expenses:[
				{ id: 1, description: "Rent", value: 40_000 },
				{ id: 2, description: "Data", value: 20_000 },
				{ id: 3, description: "Charity", value: 80_000 },
				{ id: 4, description: "Gods Work", value: 50_000 },
			]
		},
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
export const GlobalProvider = ({children}) => {
	const [state,dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider value={{
			transactions: state.transactions,
			totals: state.totals,
			budget:state.budget
		}}>
			{children}
		</GlobalContext.Provider>
	)

}
