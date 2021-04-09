import React from 'react'
import BudgetList from '../Budget_List/BudgetList'

const Budget = () => {
	return (

		<main className="main" id="main">

			<div className="container clearfix">
			{/* income list dialog  */}
			<BudgetList category="income" />
			{/* income list dialog  */}
			<BudgetList category="expenses" />
			</div>

		</main >

	)
}

export default Budget
