class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :videos,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :Video

    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Comment

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    private
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end