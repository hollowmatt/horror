class Comment < ActiveRecord::Base
	belongs_to :restaurant
	validates :restaurant, presence: true
	has_ancestry

	def self.upvote(id)
		comment = find(id)
		if comment.rank
			comment.update_attributes(rank: comment.rank + 1)
		else
			comment.update_attributes(rank: 1)
		end
	end

end
