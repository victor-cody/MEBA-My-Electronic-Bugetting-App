// import {useState} from 'react';
import React from 'react';
import Budget from '../Budget_Balance/Balance';
import BudgetTotal from '../Budget_Total/Budget_Total';
import BudgetForm from '../Budget_Form/BudgetForm';
import { GetBudget } from '../Abstracts/BudgetController';

const Header = () => {

	//Displays the current month and year
	const displayTime = () => {
		let date = new Date();
		const months = ['January', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
		let month = date.getMonth();
		return (
		<>
			<span>
				{months[month]}
			</span> of <span>
				 {date.getFullYear()}
			</span>
		</>
		);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="budget_title">
					<h1> Available Funds for,  
						<span className="budget_title_month">{displayTime()}
						</span>
					</h1>
				</div>
				{/* total budget balance */}
				<Budget balance={GetBudget()} />
				{/* Total Income and expenses field container */}
				<BudgetTotal />
				<p className="err_msg"></p>
				<BudgetForm />
			</div>
		</header >
	);
};

export default Header;
