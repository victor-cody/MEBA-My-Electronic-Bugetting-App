
const InputsFields = () => {
	return (
		<div className="input_fields">

			<input type="text" className="add_description green-focus" id="add_description"
				placeholder="Write a description" name="add description" required title="Write a description" />

			<input type="text" className="add_value green-focus" id="add_value" placeholder="Amount"
				title="please input value" required />

		</div>
	);
};

export default InputsFields;
