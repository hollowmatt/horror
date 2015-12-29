var CommentList = React.createClass({
	
	//component constructor
	componentDidMount: function() {
		Store.addChangeListener(this._onChange);
	},

	//component destructor
	componentWillUnmount: function() {
		Store.removeChangeListener(this._onChange);
	},

	render: function() {
		Console.log("hello");
		return (
			<div>
				{[].map(function(comment) {
					return (
						<Comment key={comment.id} {... comment} />
					);
				})}
			</div>
		);
	},

	_onChange: function() {
		this.forceUpdate();
	}

});