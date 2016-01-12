class CommentsController < ApplicationController

	def create
		@comment = Comment.create(comment_params.merge(restaurant_id: params[:restaurant_id]))
	end

	def upvote
		Comment.upvote(params[:comment_id])
		@comment = Comment.find(params[:comment_id])
		render :create
	end
	
	private

		def comment_params
			params.required(:comment).permit(:body, :author, :parent_id)
		end

end