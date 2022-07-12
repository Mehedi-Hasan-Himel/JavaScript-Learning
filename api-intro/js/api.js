function loadData() {
  fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadUsers() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function loadPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function displayUsers(data) {
  console.log(data);
}
