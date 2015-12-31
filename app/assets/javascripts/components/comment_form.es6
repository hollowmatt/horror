class CommentForm extends React.Component {
	
	constructor() {
		super();
		this.defaultState = { id: 1, body:'', author:''};
		this.state = this.defaultState;
	}

	onFieldChange(event) {
		let prop = {};
		prop[event.target.name] = event.target.value; 
		this.setState(prop);
	}

	submitComment(event) {
		event.preventDefault();
		Actions.addComment(this.state);
	}

	render() {
		return(
			<div className='form'>
				<form>
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