json.extract! video, :id, :title, :description, :views, :uploader_id

json.thumbnail url_for(video.thumbnail)
json.videoURL url_for(video.video)
