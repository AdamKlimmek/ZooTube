class Video < ApplicationRecord
    validates :title, :uploader_id, :views presence: true

    validate :ensure_video
    validate :ensure_thumbnail

    has_one_attached :video
    has_one_attached :thumbnail
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User
    
    def ensure_video
        unless self.video.attached?
            errors[:video] << "must be attached"
        end
    end

    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:thumbnail] << "must be attached"
        end
    end
end
