

fetch('http://localhost:3000/courses1')
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);

    var allcards = document.querySelector('.allcard');
    data.forEach(elem => {
     var card=document.createElement('div')
     card.className="cards21";
    //  allcards.appendChild(
    // card)
    // console.log("log")

    var Imgcard=document.createElement('div');
    Imgcard.className="imgcard";
    Imgcard.style.background=`url(${elem.CourseImg})`;
    Imgcard.style.backgroundSize="cover";
    card.appendChild(Imgcard)

    var price=document.createElement('div');
    price.className="price";
// console.log("hello")
    card.appendChild(price)

    var pri=document.createElement('p');
    pri.className="price";
    price.innerText= `₹. ${elem.Price}`;
    price.appendChild(pri)

 var name=document.createElement('h3');
    name.className="name";
    name.innerText=elem.CourseName;
    price.appendChild(name)
    

    

    allcards.appendChild(card)
})
});

