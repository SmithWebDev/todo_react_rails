Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'pages#my_todo_items'
  end
  root 'pages#home'
  get
end
