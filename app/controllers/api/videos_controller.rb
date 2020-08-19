class Api::VideosController < ApplicationController

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def destroy
        @video = Video.find(params[:id])

        if @video && @video.uploader_id == current_user.id
            @video.destroy
            render :show
        else
            render json: ["Not authorized to delete this video"], status: 422
        end
    end

    def video_params
        params.require(:video).permit(:title, :uploader_id)
    end
end
