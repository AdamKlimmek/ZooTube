class Api::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :require_logged_in, only: [:show, :create, :update, :destroy]

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end
    
    def update
        @comment = Comment.find(params[:id])
        
        if @comment.update_attributes(comment_params_edit)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        
        @comment.destroy
        render json: {}
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :video_id, :body)
    end

    def comment_params_edit
        params.require(:comment).permit(:body)
    end

end
