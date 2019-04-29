Rails.application.routes.draw do
	root "home#index"

	get "traditional" => "home#traditional"
	get "modern" => "home#modern"
        get "modern_red" => "home#modern_red"
	get "visual" => "home#visual"
	get "services" => "home#services"
	get "about" => "home#about"
        get "kostin" => "home#kostin"
        get "beaulieu" => "home#beaulieu"
	get "about_gold" => "home#about_gold"
        get "about_gold_horiz" => "home#about_gold_horiz"
        get "kostin_gold" => "home#kostin_gold"
        get "practices" => "home#practices"
        get "attorneys" => "home#attorneys"
        get "health-care-providers" => "home#health-care-providers"
        get "families" => "home#families"
        get "new-adults" => "home#new-adults"
        get "seniors" => "home#seniors"
        get "service-members" => "home#service-members"
        get "mental-health" => "home#mental-health"
	get "css" => "home#css"

        # routing concerns
        concern :homeable do
          get "/" => "home#index"
        end

        
        namespace :partners, path: "partners" do
          concerns [:homeable]
          resources :kostin, only: [:index]
          resources :beaulieu, only: [:index]
          resources :saunders, only: [:index]
          resources :ready, only: [:index]
        end
end
