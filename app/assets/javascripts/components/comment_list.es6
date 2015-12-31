class CommentList extends React.Component {
	
	constructor() {
		super();
	}

	//component constructor
	componentDidMount() {
		this.props.store.addChangeListener(this._onChange.bind(this));
	}

	//component destructor
	componentWillUnmount() {
		this.props.store.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		return(
			<div>
				{this.props.store.comments().map((comment) => {
					return( 
						<Comment key={comment.id} {... comment} />
					);
				})}
			</div>
		);
	}

	_onChange() {
		this.forceUpdate();
	}

}

window.CommentList = CommentList;
export default CommentList;