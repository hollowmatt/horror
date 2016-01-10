class CommentForm extends React.Component {
	
	static get contextTypes() {
		return {
			actions: React.PropTypes.func.isRequired
		}
	}

	constructor() {
		super();
		this.defaultState = { body:'', author:''};
		this.state = this.defaultState;
	}

	onFieldChange(event) {
		let prop = {};
		prop[event.target.name] = event.target.value; 
		this.setState(prop);
	}

	submitComment(event) {
		event.preventDefault();
		console.log(this.props);
		this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id}));
		this.setState(this.defaultState);
	}

	render() {
		return(
			<div className='form'>
				<form className={this.props.isReplying ? '' : 'hide'} >
					<label>Author</label>
					<input type='text' name="author" value={this.state.author} onChange={this.onFieldChange.bind(this)}/>
					<label>Comment</label>
					<textarea name="body" value={this.state.body} onChange={this.onFieldChange.bind(this)}/>
					
					<button onClick={this.submitComment.bind(this)} type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default CommentForm;