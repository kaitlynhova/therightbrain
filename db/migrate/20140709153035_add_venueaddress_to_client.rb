class AddVenueaddressToClient < ActiveRecord::Migration
  def change
    add_column :clients, :Venu_Adress, :string
  end
end
