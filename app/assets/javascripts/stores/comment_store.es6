import AppDispatcher from '/app_dispatcher'
import Constants from '/constants'

class CommentStore extends EventEmitter {
	constructor() {
		super()
		this._comments = []

		AppDispatcher.register((payload) => {
			switch(payload.actionType) {
				case Constants.ADD_COMMENT:
					this.addComment(payload.comment);
					this.emitChange();
					break;
				case Constants.UPVOTE_COMMENT:
					this.upvote(payload.comment);
					this.emitChange();
					break;
				case Constants.SET_COMMENTS:
					this.setComments(payload.comments);
					this.emitChange();
					break;
				default:
					// NO-OP
			}
		})
	}

	// Add a comment
	addComment (comment) {
		this._comments[comment.id || this._comments.length] = comment;
	}

	upvote(comment) {
		this._comments[comment.id].rank++;
	}

	setComments (comments) {
		comments.forEach(comment => {
			this.addComment(comment);
		})
	}
	// List comments
	comments (parentId) {
		// use lodash for filters and sorts
		return _.chain(this._comments.filter(comment => {return comment && comment.parent_id === parentId; }))
						.sortBy('rank').reverse().value();
	}

	// These 3 methods (addChangeListener, removeChangeListener, emitChange)
	// are required by the flux framework
	addChangeListener (callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	}

	removeChangeListener (callback) {
		this.removeListener(Constants.CHANGE_EVENT, callback);
	}

	emitChange () {
		this.emit(Constants.CHANGE_EVENT);
	}
}

export default CommentStore;
