// registry of messages the app supports

class Store extends EventEmitter {
	constructor() {
		super()
		this._comments = []
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

let commentStore = new Store()

//Actions
class Actions {
	addComment(params) {
		AppDispatcher.dispatch({
			actionType: Constants.ADD_COMMENT,
			comment: params
		})
	}
}

let commentActions = new Actions()

// There should only be one dispatcher - declare it here
// Bridge between store and actions 
let AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register((payload) => {
	switch(payload.actionType) {
		case Constants.ADD_COMMENT:
			commentStore.addComment(payload.comment)
			commentStore.emitChange()
			break
		default:
			// NO-OP
	}
});
