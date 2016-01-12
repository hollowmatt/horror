import AppDispatcher from '/app_dispatcher'
import Constants from '/constants'
import Api from '/api'

class Actions {
	
	static upvoteComment(comment) {
		Api.put(`/restaurants/1/comments/${comment.id}/upvote`).then(resp => {
			return resp.json();
		}).then ( comment => {
			AppDispatcher.dispatch({
				actionType: Constants.UPVOTE_COMMENT,
				comment: comment
			});
		});		
	}

	static addComment(params) {

		Api.post('/restaurants/1/comments', {
			comment: params
		}).then(resp => {
			return resp.json();
		}).then ( comment => {
			AppDispatcher.dispatch({
				actionType: Constants.ADD_COMMENT,
				comment: params
			});
		});
	}

	static setComments(params) {
		AppDispatcher.dispatch({
			actionType: Constants.SET_COMMENTS,
			comments: params
		})
	}
}

export default Actions