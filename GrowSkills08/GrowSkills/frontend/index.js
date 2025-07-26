document.querySelector('.ri-user-line').addEventListener('click', (e) => {
    var profileContainer = document.querySelector('.profileContainer');

    if (profileContainer.style.display == "block") {
        profileContainer.style.display = "none";
    }
    else {
        profileContainer.style.display = "block";

    }
})


document.addEventListener('click', (e) => {
    var profileContainer = document.querySelector('.profileContainer');
    var userIcon = document.querySelector('.ri-user-line');

    // Check if the clicked element is NOT inside the profileContainer or the user icon
    if (profileContainer.style.display == "block" &&
        !profileContainer.contains(e.target) &&
        !userIcon.contains(e.target)) {
        profileContainer.style.display = "none";
    }
});



document.querySelector('.categories').addEventListener('click', (e) => {
    var id;
    if (e.target.className == "categoriesList") {
        id = e.target.getAttribute("data-id");
        // alert(id);
        window.location.href = `./products.html?id=${id}`;
    }
});


document.querySelector('.faq').addEventListener('click', (event) => {
    // console.dir(event.target.nodeName);
    var elem;
    if (event.target.className == "qsn" || event.target.nodeName == "I") {
        if (event.target.nodeName == "I") {
            elem = event.target.parentElement;
        }
        else {
            elem = event.target
        }


        var arrow = elem.querySelector('.arrow');
        ans = elem.parentElement.querySelector('.ans');
        // console.dir(ans)
        if (ans.style.display == "block") {
            ans.style.display = "none"
            arrow.style.transform = "rotate(360deg)";
        }
        else {
            ans.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
        }
    }
})



document.querySelector('.searchBar').addEventListener('keypress', (event) => {

    if (event.key == 'Enter') {
        var searchInput = document.querySelector('.searchBar').value;
        window.location.href = `./products.html?id=${searchInput}`;
    }

});

fetch("http://localhost:3000/courses")
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);
});

var course = [
    {
        courseId: "1",
        courseName: "Basic to Advanced Graphic Design",
        courseImg: "https://thegrowskills.com/assets/demo%20thumbnail-uWXu5v7X.webp",
        price: 199,
        mrp: 399,
        lectures: 10,
        level: "Intermediate",
        Language: ["Marathi", "Hindi", "English"],
        points: [
            {
                title: "Introduction",
                videoLink: ""
            },
            {
                title: "Introduction",
                videoLink: ""
            },
            {
                title: "Introduction",
                videoLink: "",
                videoDuration: "10s"
            },
            {
                title: "Introduction",
                videoLink: "",
                videoDuration: "1Min"
            }
        ]




    },
    {
        courseId: "1",
        courseName: "Advance Master Course Graphic Design",
        courseImg: "https://thegrowskills.com/assets/demo%20thumbnail-uWXu5v7X.webp",
        price: 199,
        mrp: 399,
        lectures: 10,
        level: "Intermediate",
        Language: ["Marathi", "Hindi", "English"],
        points: [
            {
                title: "Introduction",
                videoLink: ""
            },
            {
                title: "Introduction",
                videoLink: ""
            },
            {
                title: "Introduction",
                videoLink: "",
                videoDuration: "10s"
            },
            {
                title: "Introduction",
                videoLink: "",
                videoDuration: "1Min"
            }
        ]




    },
    {
        courseId: "1",
        courseName: "Best of Graphic Design",
        courseImg: "https://thegrowskills.com/assets/demo%20thumbnail-uWXu5v7X.webp",
        price: 199,
        mrp: 399,
        lectures: 10,
        level: "Intermediate",
        Language: ["Marathi", "Hindi", "English"],
        points: [
            {
                title: "Introduction",
                videoLink: ""
            },
            {
                title: "Introduction",
                videoLink: ""
            },
            {
                title: "Introduction",
                videoLink: "",
                videoDuration: "10s"
            },
            {
                title: "Introduction",
                videoLink: "",
                videoDuration: "1Min"
            }
        ]




    },
    
]

var allcards = document.querySelector('.allcards');
course.forEach(elem => {


    var courseCard = document.createElement('div');
    courseCard.className = "courseCard";
    courseCard.setAttribute('data-id', 2);

    allcards.appendChild(courseCard);

    var courseImage = document.createElement('div');
    courseImage.className = "courseImage";
    courseImage.setAttribute('data-id', 2);
    courseImage.style.background = `url(${elem.courseImg})`;
    courseImage.style.backgroundSize = "cover";
    courseImage.style.backgroundPosition = "center";

    courseCard.appendChild(courseImage);


    var courseDiscription = document.createElement('div');
    courseDiscription.className = "courseDiscription";
    courseDiscription.setAttribute('data-id', 2);
    courseCard.appendChild(courseDiscription);

    var coursePrice = document.createElement('p');
    coursePrice.className = "coursePrice";
    coursePrice.setAttribute('data-id', 2);
    coursePrice.innerHTML = `₹ <span class="sellingPrice">${elem.price}</span> <s><span class="mrp">₹ ${elem.mrp}</span>
                        </s>`;

    courseDiscription.appendChild(coursePrice);


    var courseName = document.createElement('p');
    courseName.className = "courseName";
    courseName.setAttribute('data-id', 2);
    courseName.innerText = elem.courseName;

    courseDiscription.appendChild(courseName);


    var buyButton = document.createElement('div');
    buyButton.className = "buyButton";
    buyButton.setAttribute('data-id', 2);
    buyButton.innerText = "Buy Now";

    courseDiscription.appendChild(buyButton);

})