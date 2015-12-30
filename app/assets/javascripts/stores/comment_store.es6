import AppDispatcher from '/app_dispatcher'
import Constants from '/constants'

class CommentStore extends EventEmitter {
	constructor() {
		super()
		this._comments = []

		AppDispatcher.register((payload) => {
			switch(payload.actionType) {
				case Constants.ADD_COMMENT:
					this.addComment(payload.comment)
					this.emitChange()
					break
				default:
					// NO-OP
			}
		})
	}

	// Add a comment
	addComment (comment) {
		this._comments[comment.id] = comment;
	}

	// List comments
	comments () {
		return this._comments;
	}

	// These 3 methods (addChangeListener, removeChangeListener, emitChange)
	// are required by the flux framework
	addChangeListener (callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	}

	removeChangeListener (callback) {
		this.remove(Constants.CHANGE_EVENT, callback);
	}

	emitChange () {
		this.emit(Constants.CHANGE_EVENT);
	}
}

export default CommentStore;
