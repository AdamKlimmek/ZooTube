class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def create
        @video = Video.new(video_params)

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        @video = Video.find(params[:id])

        if @video.update(video_params)
            render :show
        else
            render @video.errors.full_messages, state: 422
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
        params.require(:video).permit(:title, :uploader_id, :views, :description)
    end
end
