
const InputsFields = ({ description = '', amount = '', updateValue }) => {
	return (
		<div className="input_fields">

			<input type="text" className="add_description green-focus"
				id="add_description"
				placeholder="Write a description"
				aria-label="description" name="add description" required title="Write a description"
				value={description}
				onChange={(e) => updateValue("des", e.target.value)}
			/>

			<input type="text" className="add_value green-focus" id="add_value"
				placeholder="Amount"
				aria-label="amount" 
				title="please input value" required
				value={amount}
				onChange={(e) => updateValue("val", e.target.value)} />

		</div>
	);
};

export default InputsFields;
