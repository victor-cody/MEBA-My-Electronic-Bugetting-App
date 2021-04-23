const BudgetType = ({ type, updateValue }) => {

	return (
		<div className="add_container">
			<select name="add_type" id="add_type" className=" green-focus" title=" select type"
				value={type}
				onChange={(e) =>
					updateValue('type', e.target.value)
				}
			>
				<option
					style={{ color: 'var(--green)' }}
					value="inc"
					defaultValue
					title="income">
					Income
				</option>
				<option
					style={{ color: 'var(--red)' }}
					value="exp"
					title="expenses">
					Expenses
				</option>
			</select>
		</div>
	);
};

export default BudgetType;
