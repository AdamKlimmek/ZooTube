![alt text](https://github.com/AdamKlimmek/ZooTube/blob/master/app/assets/images/zootube_logo.png "ZooTube Logo")

[ZooTube Live](https://zootube.herokuapp.com/#/)

ZooTube is a social media website that allows users to upload and share videos with one another. In addition, users can like, dislike, comment on, and search for videos within the site. It was built with a Rails backend and a React/Redux frontend.

## Features
* User authentication from frontend to backend
* Signed in users can upload videos with attached thumbnails
  * If they choose, users can later edit the titles, descriptions, and thumbnails of their videos
* Each video has a view count and a tally of user likes and dislikes
* Signed in users can like or dislike videos and see their like/dislike status
  * If they choose, users can later modify their like status on any given video or remove a like/dislike altogether
* Each video has a list of comments below the video player and video description
* Signed in users can comment on videos
  * If they choose, users can later edit or delete their comments
* Users can search for videos by title
* A navbar and side menu helps users and guests navigate the site

## Video Upload
Once signed in, users can access a video upload form with a clear, minimalist layout.

![alt text](https://github.com/AdamKlimmek/ZooTube/blob/master/app/assets/images/video_upload.png "Video Upload Form")

The form's video and image boxes use Dropzone, a React hook that allows for HTML5-compliant drag-and-drop functionality. Meanwhile, the default click option to find and select a video/image for upload has been preserved, allowing users some flexibility in how they choose to complete the form. Some basic CSS styling provides visual cues indicating to the user that they can interact with these boxes and, later, that a video/image has successfully uploaded. If there are any problems with a submission attempt, error messages will display at the bottom of the form.

## Search
A search field within the navbar allows users and guests of the site to quickly search for videos. The integration of search functionality was possible with only minor tweaks to the video controller's index action.

```ruby
def index(query = "")
    query = params['query'] || ""
    @videos = Video.where("lower(videos.title) like '%#{query.downcase}%'")
    render :index
end
```

When a search is made, whatever text is in the input field is passed into the index action as an argument. From there, Rails will fire an SQL query to select all videos whose lowercased titles include the lowercased query. This helps get around issues with differing capitalization between video titles and search requests. For example, if a user simply searched for 'penguin', or if they accidentally had their caps-lock on, their search results would still include a video with the title 'Penguin Party'. 

![alt text](https://github.com/AdamKlimmek/ZooTube/blob/master/app/assets/images/search_func.png "Search Functionality")

By default, when no query is present, the controller's index action will behave as expected and simply serve up all videos (e.g., when navigating to the video index page).

## Upcoming Features
The following is a list of additional features I would like to add to the site in the future:
* A queue feature that users can add videos to, allowing them to better manage their viewing experience
* Liking comments and replying to comments
* Dynamic search functionality that allows users to search by video length, upload date, view count, and more
