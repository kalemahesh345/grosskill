var urlparams = new URLSearchParams(window.location.search);

var id=urlparams.get('id');

var searchResultHeading = document.querySelector('.searchResultHeading');
searchResultHeading.innerText = `Search Results for "${id}`