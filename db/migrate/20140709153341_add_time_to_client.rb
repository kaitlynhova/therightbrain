class AddTimeToClient < ActiveRecord::Migration
  def change
    add_column :clients, :Time, :string
  end
end
