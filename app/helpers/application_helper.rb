module ApplicationHelper
	
	def title
		base_title = "Plural.cc"
		if @title.nil?
			base_title
		else
			"#{base_title} - #{@title}"
		end
	end

	
	def heading
		base_heading = "I aint afraid of no ghost"
		if @heading.nil?
			base_heading
		else
			@heading
		end
	end
	
end
