import React, { useContext, useState } from 'react';

import BudgetType from './BudgetType';
import InputFields from "./InputsFields";

import { GlobalContext } from '../../contex/GlobalState'


const BudgetForm = () => {
	// Component's States
	const [type, setType] = useState('inc');
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState(0);
	// const [display, setDisplay] = useState('incomes-focus');

	const updateField = (field, newValue) => {
		if (field === "des") setDescription(newValue);
		else if (field === "val") setAmount(newValue);
		else if (field === "type") setType(newValue);
		else return;
	}

	const {
		// Actions
		addTransaction,
		//
		incomes,
		expenses,
	} = useContext(GlobalContext);



	class Income {
		constructor(id, description, value) {
			this.id = id;
			this.description = description;
			this.value = value;
		}
	}
	
	class Expense {
		constructor(id, description, value) {
			this.id = id;
			this.description = description;
			this.value = value;
		}
	}

	const addNewItem = e => {
		e.preventDefault();
		let DISPATCH, ID, NEWITEM;

		switch (type) {
			case 'inc':
				if (incomes.length > 0) {
					ID = Number((incomes[0].id) + 1);
				} else {
					ID = 0;
				}

				DISPATCH = 'ADD_INCOME';
				NEWITEM = new Income(ID, description, parseFloat(amount));

				addTransaction(DISPATCH, NEWITEM)

				break;

			case 'exp':
				if (expenses.length > 0) {
					ID = Number((expenses[0].id) + 1);
				} else {
					ID = 0;
				}

				DISPATCH = 'ADD_EXPENSES';
				NEWITEM = new
					Expense(ID, description, parseFloat(amount));

				addTransaction(DISPATCH, NEWITEM)

				break;

			default:
				break;
		}

		updateField('des', '')
		updateField('val', '')

	}

	return (
		<aside className="add">
			<form action="#" className='add_field incomes-focus 'autoComplete="on"
				onSubmit={addNewItem}
			>

				{/* add type field */}

				<BudgetType type={type}
					updateValue={updateField} />

				{/* input fields component */}

				<InputFields
					description={description}
					amount={amount}
					updateValue={updateField}
				/>

				{/*submit button  */}
				<button className="add_btn green" id="add_btn" title="add new budget entry" onClick={addNewItem}>
					<i className="ion-android-checkmark-circle"></i>
				</button>

			</form >
		</aside >
	);
};

export default BudgetForm;
