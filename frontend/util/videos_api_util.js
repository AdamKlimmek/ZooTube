export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: `/api/videos`,
    })
);

export const fetchVideo = (videoId) => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`,
    })
);

export const postVideo = (formData) => (
    $.ajax({
        method: 'POST',
        url: `/api/videos`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const patchVideo = (formData, video) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const patchVideoViews = (video) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}/views`,
        data: { video },
    })
);

export const deleteVideo = (videoId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`,
    })
);