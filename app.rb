require 'sinatra'
require 'sinatra/json'

get '/api/v1/movies' do
  json [
    'The Iron Giant',
    'Star Wars',
    'The Social Network',
    'Casablanca',
  ]
end

get '*' do
  send_file File.expand_path('index.html', settings.public_folder)
end
