import CommentStore from '/stores/comment_store'
import Actions from '/actions'

class CommentSection extends React.Component {

	render() {
		console.log("rendering");
		return (
			<div>
				<CommentList />
			</div>
		);
	}
}

window.Store = new CommentStore()
window.Actions = Actions
window.CommentSection = CommentSection;
export default CommentSection;
