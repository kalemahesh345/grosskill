fetch('http://localhost:3000/courses')
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);

    var allcards = document.querySelector('.allcard');
    data.forEach(elem => {
     var card=document.createElement('div')
     card.className="cards";
    //  allcards.appendChild(card)
    // console.log("log")

    var Imgcard=document.createElement('div');
    Imgcard.className="Imgcard";
    Imgcard.style.background=`url(${elem.courseImg})`;
    Imgcard.style.backgroundSize="cover";
    card.appendChild(Imgcard)

    var price=document.createElement('div');
    price.className="price";
// console.log("hello")
    card.appendChild(price)

    var pri=document.createElement('p');
    pri.className="price";
    price.innerText= `₹. ${elem.price}`;
    price.appendChild(pri)

 var name=document.createElement('h3');
    name.className="name";
    name.innerText=elem.courseName;
    price.appendChild(name)
    
    var add=document.createElement('div')
    add.className="add";
    add.innerText=`Add to Cart`;
    price.appendChild(add)

    var buy=document.createElement('div')
    buy.className="buy";
    buy.innerText=`Buy Now`;
    price.appendChild(buy)
    

    allcards.appendChild(card)
})
});
