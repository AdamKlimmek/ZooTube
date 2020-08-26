class Api::VideosController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def create
        if params[:video][:video] == 'null'
            render json: ['No video attached'], status: 422
            return nil
        end
        
        @video = Video.new(video_params)
        @video.uploader_id = current_user.id

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = Video.find(params[:id])

        if params[:video][:thumbnail] == 'null'
            params[:video].delete('thumbnail')
        end

        if @video.update_attributes(video_params_edit)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update_views
        @video = Video.find(params[:id])

        if @video.update_attributes(video_params_update_views)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id])

        if @video && @video.uploader_id == current_user.id
            @video.destroy
            render json: {}
        else
            render json: ["Not authorized to delete this video"], status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:title, :description, :views, :uploader_id, :video, :thumbnail)
    end
    
    def video_params_edit
        params.require(:video).permit(:title, :description, :views, :uploader_id, :thumbnail)
    end

    def video_params_update_views
        params.require(:video).permit(:views)
    end
    
end
