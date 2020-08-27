export const fetchComment = (commentId) => (
    $.ajax({
        method: 'GET',
        url: `/api/comments/${commentId}`,
    })
);

export const postComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: { comment },
    })
);

export const patchComment = (formData, comment) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: formData,
        contentType: false,
        processData: false,
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`,
    })
);