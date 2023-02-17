const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/jokes');
xhr.send();
xhr.responseType = 'json';
xhr.onload = () => console.log(xhr.response);