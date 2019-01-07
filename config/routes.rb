Rails.application.routes.draw do
	root "home#index"

	get "traditional" => "home#traditional"
	get "clone" => "home#clone"
	get "parallax" => "home#parallax"


end
