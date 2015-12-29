// registry of messages the app supports
//= require flux
var Constants = {
	CHANGE_EVENT: 'change',
	ADD_COMMENT: 'comments.add'
};

var Store = new _.extend([], EventEmitter.prototype, {
	_comments: [],

	// Add a comment
	addComment: function(comment) {
		this._comments[comment.id] = comment;
	},

	// List comments
	comments: function() {
		return this._comments;
	},

	// These 3 methods (addChangeListener, removeChangeListener, emitChange)
	// are required by the flux framework
	addChangeListener: function(callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.remove(Constants.CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(Constants.CHANGE_EVENT);
	}

});

// There should only be one dispatcher - declare it here
// Bridge between store and actions 
var AppDispatcher = new FluxDispatcher();

AppDispatcher.register(function(payload) {
	
	var action = payload.actionType;
	switch(action) {
		case Constants.ADD_COMMENT:
			Store.addComment(payload.comment);
			break;
		default:
			// NO-OP
	}
});

