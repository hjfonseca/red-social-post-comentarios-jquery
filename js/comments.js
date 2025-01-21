const addComment = (postId, commentText) => {
    const post = posts.find(post => post.id === postId);
    if (post) {
        const comment = {
            id: Date.now(),
            text: commentText
        };
        post.comments.push(comment);
        renderComments(postId);
    }
};
const deleteComment = (postId, commentId) => {
    const post = posts.find(post => post.id === postId);
    if (post) {
        post.comments = post.comments.filter(comment => comment.id !== commentId);
        renderComments(postId);
    }
};
const renderComments = (postId) => {
    const post = posts.find(post => post.id === postId);
    if (post) {
        const commentsContainer = $(`#post-${postId} .comments`);
        commentsContainer.html('');
        post.comments.forEach(comment => {
            const commentElement = $(`
                <div class="comment" id="comment-${comment.id}">
                    <p>${comment.text}</p>
                    <button class="edit-comment">Editar</button>
                    <button class="delete-comment">Eliminar Comentario</button>
                </div>
            `);
            commentElement.find('.edit-comment').on('click', () => {
                const newText = prompt("Editar comentario:", comment.text);
                if (newText) {
                    comment.text = newText;
                    renderComments(postId);
                }
            });
            commentElement.find('.delete-comment').on('click', () => deleteComment(postId, comment.id));
            commentsContainer.append(commentElement);
        });
    }
};
