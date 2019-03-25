Rails.application.routes.draw do
	root "home#index"

	get "traditional" => "home#traditional"
	get "modern" => "home#modern"
        get "modern_red" => "home#modern_red"
	get "visual" => "home#visual"
	get "services" => "home#services"
	get "about" => "home#about"
	get "css" => "home#css"

end
