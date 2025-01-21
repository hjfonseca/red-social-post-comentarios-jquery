$(document).ready(() => {
    $('#postForm').on('submit', (e) => {
        e.preventDefault();
        const title = $('#titlep').val();
        const description = $('#description').val();
        if (title && description) {
            const newPost = createPost(title, description);
            renderPosts();
            $('#postForm')[0].reset();
        }
    });
    $('#posts').on('submit', '.comment-form', function (e) {
        e.preventDefault();
        const postId = $(this).data('post-id');
        const commentText = $(this).find('.comment-text').val();
        if (commentText) {
            addComment(postId, commentText);
            $(this)[0].reset();
        }
    });
    $('#searchPost').on('input', function () {
        const keyword = $(this).val().toLowerCase();
        $('.post').each(function () {
            const title = $(this).find('h3').text().toLowerCase();
            $(this).toggle(title.includes(keyword));
        });
    });
    renderPosts();
});

