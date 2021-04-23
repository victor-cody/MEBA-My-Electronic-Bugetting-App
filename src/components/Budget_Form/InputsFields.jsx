const InputsFields = ({ description = '', amount = 0, updateValue}) => {

	return (
		<div className="input_fields">

			<input type="text" className="add_description"
				id="add_description"
				placeholder="Write a description"
				aria-label="description" name="add description" required title="Write a description"
				value={description}
				onChange={(e) => updateValue('des',e.target.value)}
			/>

			<input type="number" className="add_value" id="add_value"
				placeholder="Amount"
				aria-label="amount"
				title="please input value" required
				value={amount}
				onChange={(e) => updateValue('val',parseFloat(e.target.value))} />

		</div>
	);
};

export default InputsFields;
