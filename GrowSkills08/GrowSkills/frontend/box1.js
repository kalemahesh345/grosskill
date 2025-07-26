

var urlparms = new URLSearchParams(window.location.search);
var id = urlparms.get('id');

var searchResultHeading = document.querySelector('.searchResultHeading');
searchResultHeading.innerText = `Search Results for "${id}"`;

var resultHeading = document.querySelector('.resultHeading');
resultHeading.innerText = `Results for "${id}"`;
