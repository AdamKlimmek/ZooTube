class AddUserColor < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :color, :string, null: false
  end
end
