import AppDispatcher from '/app_dispatcher'
import Constants from '/constants'
import Api from '/api'

class Actions {

	constructor(restId) {
		this.restaurantId = restId;
		this.watchInterval = setInterval(this.watch.bind(this), 1000);
	}
	
	upvoteComment(comment) {
		Api.put(`/restaurants/${this.restaurantId}/comments/${comment.id}/upvote`).then(resp => {
			return resp;
		}).then ( comment => {
			AppDispatcher.dispatch({
				actionType: Constants.UPVOTE_COMMENT,
				comment: comment
			});
		});		
	}

	addComment(params) {

		Api.post(`/restaurants/${this.restaurantId}/comments`, {
			comment: params
		}).then(resp => {
			return resp;
		}).then ( comment => {
			AppDispatcher.dispatch({
				actionType: Constants.ADD_COMMENT,
				comment: params
			});
		});
	}

	setComments(params) {
		AppDispatcher.dispatch({
			actionType: Constants.SET_COMMENTS,
			comments: params
		})
	}

	watch() {
		Api.get(`/restaurants/${this.restaurantId}/comments`).then ( comments => {
			this.setComments(comments)
		});
	}
}

export default Actions