 fetch('http://localhost:3000/courses')

.then(responce=>{
    return responce.json()
})
.then(data=>{
    console.log(data);

    var allcards=document.querySelector('.cards');


    data.forEach(element => {
        var card=document.createElement('div');
        card.className="card";


        var image=document.createElement('div');
        image.className="image";
        card.appendChild(image);
        image.style.background=`url(${element.courseImg})`;
        image.style.backgroundSize="cover";

        card.appendChild(image);

        var courseName=document.createElement('h5');
        courseName.className='courseName';
        courseName.innerText=element.courseName;
        
        card.appendChild(courseName);


        var price=document.createElement('p');
        price.className="price";
        price.innerText=`Rs. ${element.price}`;
        card.appendChild(price);

        var date=document.createElement('p');
        date.innerHTML=`<span class="sdate">${element.start_date}</span><span class="edate">${element.end_date}</span`;
        card.appendChild(date);



        allcards.appendChild(card);
    });



})





