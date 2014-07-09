class LoginsController < ApplicationController

  def new
  end
  
  def create
    @client = Client.find_by_email(params[:email])
    
    if @client && @client.authenticate(params[:password])
      session[:user_id] =  @client.id
      session[:username] = @client.name
      redirect_to("/clients/#{@client.id}")
    else
      redirect_to("/logins/new?invalid_password=true&email=#{params[:email]}")
    end
  end
  
  def index
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to(:root)
  end
end