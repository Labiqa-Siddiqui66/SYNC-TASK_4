const course_array = [
    {
        date: "15/11/2027",
        image: "web_development.jpg",
        head: "Web development Course",
        cost: "320",
        anchor: "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
    },
    {
        date: "06/12/2022",
        image: "javascript.jpg",
        head: "javascript course",
        cost: "450",
        anchor: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",


    },
    {
        date: "03/04/2022",
        image: "net.jpg",
        head: "Dot net course",
        cost: "530",
        anchor: "https://www.youtube.com/playlist?list=PLkWRCY_kK0GhDZ7rK8678SvCQ4SPNamsC",


    },
    {
        date: "19/05/2021",
        image: "angular.jpg",
        head: "Angular Full Course",
        cost: "2300",
        anchor: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOFyAdwmvyPgFlbiBKiDoTa_",


    },
    {
        date: "27/06/2023",
        image: "dql.jpg",
        head: "SQL course",
        cost: "1300",
        anchor: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOG6DQnOD6ujdCEchaqADfCU",


    },
    {
        date: "05/07/2019",
        image: "react.png",
        head: "React Full Course",
        cost: "180",
        anchor: "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",


    },
    {
        date: "07/02/2018",
        image: "java.jpg",
        head: "Java course",
        cost: "630",
        anchor: "https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q",


    },
    {
        date: "19/09/2021",
        image: "next.jpg",
        head: "Next jscourse",
        cost: "340",
        anchor: "https://www.youtube.com/playlist?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG",

    },
    {
        date: "25/01/2022",
        image: "course.jpg",
        head: "C Language Full Course",
        cost: "710",
        anchor: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR",

    },
    {
        date: "2/10/2020",
        image: "full.jpg",
        head: "Full Stack course",
        cost: "560",
        anchor: "https://www.youtube.com/playlist?list=PLEiEAq2VkUULCC3eEATL4zzuapTjmo1Z_",


    },
    {
        date: "9/08/2022",
        image: "deveops.jpg",
        head: "Deveops course",
        cost: "450",
        anchor: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOE5ZDJJsnEXZ2upwK7aTYiX",


    },
]
//For Courses//
const container = document.querySelector(".course-box"); //here we have to append all the things
const displaycourse = (datavalue, imagevalue, headvalue, costvalue, anchorvalue) => {
    const card = document.createElement("div");// pehle div create kara html ka phir usme class add krdi
    card.classList.add("courses");

    const anchor=document.createElement("a");
    anchor.setAttribute("href",anchorvalue);

    const image = document.createElement("img");
    image.setAttribute("src", imagevalue);
    image.classList.add("img");

    const detail = document.createElement("div");
    detail.classList.add("details");

    const launch = document.createElement("p");
    launch.classList.add("launch");
    launch.innerHTML = datavalue;

    const heading = document.createElement("h6");
    heading.classList.add("heading");
    heading.innerHTML = headvalue;

    const stars = document.createElement("div");
    stars.classList.add("stars");
    stars.className = 'fas fa-star';

    const style = document.createElement("i");
    stars.classList.add("stars");
    style.className = 'fas fa-star'

    const cost = document.createElement("div");
    cost.classList.add("cost");
    cost.innerHTML = costvalue;

    //*******APPENDING THE COURSE ***********//

    container.appendChild(card);
    card.appendChild(anchor);
    anchor.appendChild(image);
    image.appendChild(detail);
    card.appendChild(launch);
    card.appendChild(heading);
    card.appendChild(stars)
    stars.appendChild(style);
    card.appendChild(cost);
};
const Generate = () => {
    course_array.forEach(course => {
        displaycourse(course.date, course.image, course.head, course.cost, course.anchor);
    })
}



Generate();
// For Uploading//
