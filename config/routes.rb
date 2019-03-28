Rails.application.routes.draw do
	root "home#index"

	get "traditional" => "home#traditional"
	get "modern" => "home#modern"
        get "modern_red" => "home#modern_red"
	get "visual" => "home#visual"
	get "services" => "home#services"
	get "about" => "home#about"
        get "kostin" => "home#kostin"
	get "about_gold" => "home#about_gold"
        get "about_gold_horiz" => "home#about_gold_horiz"
        get "kostin_gold" => "home#kostin_gold"
	get "css" => "home#css"

end
