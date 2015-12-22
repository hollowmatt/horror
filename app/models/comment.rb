class Comment < ActiveRecord::Base
	belongs_to :restaurant
	has_ancestry
end
