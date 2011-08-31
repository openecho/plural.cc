class SiteController < ApplicationController
	
	def site_bar
		[
			{:page=> 'home', :url => 'http://plural.cc' },
			{:page=> 'projects', :url => 'http://projects.plural.cc' },
			{:page=> 'gallery', :url => 'http://gallery.plural.cc' },
			{:page=> 'blog', :url => 'http://blog.plural.cc' },
			{:page=> 'mail', :url => 'http://mail.plural.cc' }
		]
	end
	
	
	def bar
		respond_to do |format|
			format.html { render :json => site_bar }
			format.json { render :json => site_bar, :callback => params[:callback] }
		end
		
	end
	
end
