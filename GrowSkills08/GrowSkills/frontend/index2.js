document.querySelector('.searchBar').addEventListener('keypress',(event)=>{
    if(event.key =='Enter'){
        var searchInput = document.querySelector('.searchBar').value;
        // alert(searchInput)
         window.location.href=`./products.html?id=${searchInput}`;

    }
})