class Video < ApplicationRecord
    validates :title, :uploader_id, presence: true

    has_one_attached :video
    has_one_attached :thumbnail
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User
end
