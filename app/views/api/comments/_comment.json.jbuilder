json.extract! comment, :id, :user_id, :video_id, :body

json.commenterUsername comment.user.username
json.commenterColor comment.user.color