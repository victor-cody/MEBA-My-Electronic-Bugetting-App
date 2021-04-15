const BudgetItem = ({ description, value, id, isExpense }) => {
	const isExpPercent = isExpense && <div className="item_percentage"> 21% </div>;
	return (
		<div className="item clearfix" id={id}>
			<div className="item_description">{description}</div>
			<div className="right clearfix">
				<div className="item_value"> {isExpense ? "-" : "+"}${Math.abs(value)}</div>
				{isExpPercent}
				<div className="item_delete">
					<button className="item_delete-btn" title="delete item">
						<i className="ion-ios-close-outline"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BudgetItem;
