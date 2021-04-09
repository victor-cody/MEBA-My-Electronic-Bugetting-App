
import BudgetType from './BudgetType';
import  InputFields  from "./InputsFields";

const BudgetForm = () => {
	return (
		<aside className="add">
			<form action="index.html" className="add_field" autoComplete="on" method="POST">

				{/* add type field */}
				< BudgetType />
				{/* input fields */}
				<InputFields />
				<button className="add_btn green" id="add_btn" title="add new budget entry">
					<i className="ion-android-checkmark-circle"></i>
				</button>

			</form >
		</aside >
	);
};

export default BudgetForm;
