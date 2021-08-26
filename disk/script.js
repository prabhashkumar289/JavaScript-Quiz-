
window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: " What is the full form of RAM ?",
        answer: "Random Access Memory",
        option: [
            "Random Access Memory",
            "Readonly Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: " What is the full form of CPU ?",
        answer: "Central Processing Unit",
        option: [
            "Central Programming Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: " What is the full form of E-mail ?",
        answer: "Electronic Mail",
        option: [
            "Electronic Member",
            "Electronic Message",
            "Electronic Mail",
            "None of these"
        ]
    },
    {

        id: 4,
        question: " What is the full form of HTML ?",
        answer: "Hyper Text Markup Language",
        option: [
            "Hyper Text Markup Language",
            "Hyper Text Mackup Language",
            "Hyper Temp Markup Language",
            "Hydrogen Text Markup Language"
        ]
    },
    {

        id: 5,
        question: " What is the full form of CSS ?",
        answer: "Cascading Style Sheet",
        option: [
            "Customer Style Sheet",
            "Cascading Style Shing",
            "Cascading Street Sheet",
            "Cascading Style Sheet"
        ]
    }

];


function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    // store Player Name
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";

}

let question_count = 0;
let point = 0;
function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // console.log(user_answer);
    // check answer by the user

    if (user_answer == questions[question_count].answer) {
        // console.log("right answer");
        point = point + 10;
        sessionStorage.setItem("points", point);
    }
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(myTime);
        location.href = "disk/end.html";
        return;
    }

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";

    question.innerHTML = `
    <h2>Q${question_count + 1}. ${questions[count].question} </h2>
        <ul class="option_group">
            <li class="option">${questions[count].option[0]}</li>
            <li class="option">${questions[count].option[1]}</li>
            <li class="option">${questions[count].option[2]}</li>
            <li class="option">${questions[count].option[3]}</li>
        </ul> 

    `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
    s
}



