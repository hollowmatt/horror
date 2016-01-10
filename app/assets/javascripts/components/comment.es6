import CommentForm from './comment_form';
import CommentList from './comment_list';

class Comment extends React.Component {
	static get propTypes() {
		return {
			id: React.PropTypes.number,
			author: React.PropTypes.string,
			body: React.PropTypes.string,
			rank: React.PropTypes.number
		}
	}
	
	render() {
		return (
			<li>
				<p>{this.props.body}</p>
				<p className="right"> by: {this.props.author}</p>
				<CommentForm parent_id={this.props.id}/>
				<ul>
					<CommentList parent_id={this.props.id}/>
				</ul>
			</li>
		);
	}
}

export default Comment;