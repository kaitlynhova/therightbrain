class Client < ActiveRecord::Base
  attr_accessible :address, :email, :date, :location, :name, :Time, :Venu_Adress,:password, :password_confirmation, :payment, :phone, :songs
  has_secure_password
  validates_presence_of :password, :on => :create
end
