
fetch('http://localhost:3000/courses')
    .then(responce => {
        return responce.json()
    })
    .then(data => {
        // console.log(data);





        var coursesCard = document.querySelector('.coursesCard');
        data.forEach((course) => {
            var card = document.createElement("div");
            card.className = "card";

            var image = document.createElement('div');
            image.className = "image";
            image.style.background = `url(${course.image})`;
            image.style.backgroundSize = "cover";
            card.appendChild(image);


            var discription = document.createElement('div');
            discription.className = "discription";
            card.appendChild(discription);

            var p1 = document.createElement('p');
            p1.className = "courseHeading";
            p1.innerText = course.coueseName;
            discription.appendChild(p1);


            var p2 = document.createElement('p');
            p2.innerText = course.price;
            discription.appendChild(p2);

            var p3 = document.createElement('p');
            p3.innerHTML = `<span class="sdate">Start Date: ${course.startDate}</span><br><span class="edate">End Date:${course.endDate}</span>`
            discription.appendChild(p3);

            coursesCard.appendChild(card);
        });


    })
