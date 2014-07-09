class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :password
      t.string :address
      t.string :phone
      t.datetime :date
      t.string :location
      t.string :songs
      t.string :payment

      t.timestamps
    end
  end
end
