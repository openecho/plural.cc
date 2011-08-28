module PagesHelper
	
	def content_block(text)
		raw("<div class='pad'>\r\n" + raw_textile(text) + "\r\n</div>\r\n")
	end
		
	def raw_textile(text)
		raw(RedCloth.new(text, [:no_span_caps]).to_html)
	end
end
