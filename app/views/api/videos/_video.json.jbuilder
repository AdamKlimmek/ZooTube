json.extract! video, :id, :title, :description, :views, :uploader_id

json.creationDate video.created_at.strftime("%b %d, %Y")
json.uploader video.user.username

json.videoURL url_for(video.video)

if video.thumbnail.attached?
    json.thumbnail url_for(video.thumbnail)
else
    json.thumbnail ""
end

json.likesCount video.likes_count
json.dislikesCount video.dislikes_count
