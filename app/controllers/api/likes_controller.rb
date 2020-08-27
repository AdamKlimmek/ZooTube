class Api::LikesController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create 
        @like = Like.new(like_params)
        @like.user_id = current_user.id

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end
    
    def update
        @like = Like.find(params[:id])
        
        if @like.update_attributes(like_params_edit)
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])

        @like.destroy
        render json: {}
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :video_id, :liked)
    end

    def like_params_edit
        params.require(:like).permit(:liked)
    end
    
end
