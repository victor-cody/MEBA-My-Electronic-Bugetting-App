import React, { useState } from 'react';

import BudgetType from './BudgetType';
import InputFields from "./InputsFields";

const BudgetForm = () => {
	const [type, setType] = useState('inc');
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState(0);

	const updateField = (field, newValue) => {
		if (field === "des") setDescription(newValue);
		else if (field === "val") setAmount(newValue);
		else if (field === "type") setType(newValue);
		else return;
	}

	return (
		<aside className="add">
			<form action="#" className="add_field" autoComplete="on" method="POST">

				{/* add type field */}
				< BudgetType type={type} updateValue={updateField} />
				{/* input fields component */}
				<InputFields
					description={description}
					amount={amount}
					updateValue={updateField}
				/>
				{/*submit button  */}
				<button className="add_btn green" id="add_btn" title="add new budget entry">
					<i className="ion-android-checkmark-circle"></i>
				</button>

			</form >
		</aside >
	);
};

export default BudgetForm;
