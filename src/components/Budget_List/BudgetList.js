import React from 'react';

const BudgetList = ({ category }) => {
	return (
		<div className={category}>
			<h2 className={`${category}_title`}>{category}</h2>

			<ul className={`${category}-list`} id={`${category}-list`}>

			</ul>

		</div >
	);
};

export default BudgetList;
