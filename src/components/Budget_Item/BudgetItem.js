
const BudgetItem = ({ description, value, id }) => {
	return (
		<div className="item clearfix" id={id}>
			<div className="item_description">{description}</div>
			<div classNameName="right clearfix">
				<div classNameNameNameName="item_value"> +{value}</div>
				<div classNameNameNameNameNameNameName="item_delete">
					<button className="item_delete-btn" title="delete item">
						<i className="ion-ios-close-outline"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BudgetItem;
