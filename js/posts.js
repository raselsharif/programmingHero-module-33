
function postLoad() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h3>ID: ${post.id}</h3>
        <h5>Title: ${post.title}</h5>
        <p>Details: ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }
}

postLoad();