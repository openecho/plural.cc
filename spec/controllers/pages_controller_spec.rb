require 'spec_helper'

describe PagesController do
	render_views   
	
	describe "GET 'home'" do
		it "should be successful" do
			get 'home'
			response.should have_selector("title",
				:content => "Plural.cc - Home")
		end
	end
end
