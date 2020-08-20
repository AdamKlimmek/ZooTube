class Changes < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :views, :integer, null: false, default: 0
    add_column :videos, :description, :text
    add_index :videos, :title
  end
end
