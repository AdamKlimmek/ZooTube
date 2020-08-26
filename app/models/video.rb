class Video < ApplicationRecord
    validates :title, :uploader_id, :views, presence: true

    has_one_attached :video
    has_one_attached :thumbnail
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User
    
    has_many :likes,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Like
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Comment

    def likes_count
        self.likes.count { |like| like.liked }
    end

    def dislikes_count
        self.likes.count { |like| !like.liked }
    end
    
end
