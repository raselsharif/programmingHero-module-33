
function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        console.log(comment);
        const commentsDiv = document.createElement('div');
        commentsDiv.innerHTML = `
        <h2>ID: ${comment.id}</h2>
        <h3>Name: ${comment.name}</h3>
        <a  href="mailto:${comment.email}">Email: ${comment.email}</a>
        <p>Comments: ${comment.body}</p>
        `
        commentsContainer.appendChild(commentsDiv)
    }
}

loadComments();