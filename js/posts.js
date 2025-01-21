let posts = [];
const deletePost = (postId) => {
    posts = posts.filter(post => post.id !== postId);
    renderPosts();
};
const createPost = (title, description) => {
    const post = {
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleString(),
        comments: []
    };
    posts.push(post);
    return post;
};
const renderPosts = () => {
    const postsContainer = $('#posts');
    postsContainer.html('<h2>Publicaciones</h2>');
    posts.forEach(post => {
        const postElement = $(`
            <div class="post" id="post-${post.id}">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <small>Creado el: ${post.date}</small>
                <form class="comment-form" data-post-id="${post.id}">
                    <input type="text" class="comment-text" placeholder="Escribe un comentario..." required>
                    <button type="submit">Añadir Comentario</button>
                </form>
                <div class="comments"></div>
                <button class="delete-post">Eliminar Post</button>
            </div>
        `);
        postElement.find('.delete-post').on('click', () => deletePost(post.id));
        postsContainer.append(postElement);
        renderComments(post.id);
    });
};
