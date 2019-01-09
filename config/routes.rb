Rails.application.routes.draw do
	root "home#index"

	get "traditional" => "home#traditional"
	get "clone" => "home#clone"
	get "parallax" => "home#parallax"
	get "modified" => "home#modified"
	get "css" => "home#css"

end
