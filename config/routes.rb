Rails.application.routes.draw do
  namespace :api do
    resources :posts
  end

  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end
