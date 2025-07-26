var urlparms = new URLSearchParams(window.location.search);
var id = urlparms.get('id');
// var id =1;

var searchResultHeading = document.querySelector('.searchResultHeading');
searchResultHeading.innerText = `Search Results for "${id}"`;

var resultHeading = document.querySelector('.resultHeading');
resultHeading.innerText = `Results for "${id}"`;

async function course() {
    try {
        const responce = await fetch(`http://localhost:3000/courses/${id}`);
        const data = await responce.json();
        console.log(data);
    } catch (error) {
        console.log('Invalid Course id');
    }
}



window.addEventListener('DOMContentLoaded', course);


