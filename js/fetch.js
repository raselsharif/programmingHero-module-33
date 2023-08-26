
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data));
}

function displayData(data) {
    const ul = document.getElementById('user-list');
    ul.classList.add('py-5')
    for (const user of data) {
        const li = document.createElement('li');
        const count = ul.childElementCount;
        li.classList.add('text-2xl', 'py-2')
        li.innerText = `Serial no: ${count + 1},
        User Name: ${user.name} ,
        Email: ${user.email}`;
        ul.appendChild(li);
    }
}