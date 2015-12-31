import CommentStore from '/stores/comment_store';
import Actions from '/actions';
import CommentList from '/components/comment_list';

class CommentSection extends React.Component {

	constructor() {
		super();
		this.store = new CommentStore();
	}
	
	render() {
		return (
			<div>
				<CommentList store={this.store} />
			</div>
		);
	}
}

window.Actions = Actions;
window.CommentSection = CommentSection;
export default CommentSection;
