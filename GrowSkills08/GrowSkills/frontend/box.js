document.querySelector('.card').addEventListener('click', (e) => {
    var id;
    if (e.target.className =="box") {
        id = e.target.getAttribute("data-id");


      
        window.location.href = `./box1.html?id=${id}`;
    }
});