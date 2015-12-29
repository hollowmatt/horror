class RestaurantsController < ApplicationController

	def index
		@restaurants = Restaurant.all
	end

	def show
		puts params[:id]
		@restaurant = Restaurant.find(params[:id])
	end
end
