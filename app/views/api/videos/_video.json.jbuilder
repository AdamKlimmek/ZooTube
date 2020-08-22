json.extract! video, :id, :title, :description, :views, :uploader_id

json.creationDate video.created_at.strftime("%b %d, %Y")
json.uploader video.user.username

json.thumbnail url_for(video.thumbnail)
json.videoURL url_for(video.video)
