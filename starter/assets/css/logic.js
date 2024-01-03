let timerEl = document.getElementById("time")
let startScreen = document.getElementById("start-screen")
const startBtn = document.getElementById("start")
const questionsEl = document.getElementById("questions")
const questionTitle = document.getElementById("questions-title")
const questionChoices = document.getElementById("choices")
const endScreen = document.getElementById("end-screen")
const finalScore = document.getElementById("final-score")
const initals = document.getElementById("initials")
const submitBtn = document.getElementById("submit")
const feedbackEl = document.getElementById("feedback")



let questions= [
    {
        title: "First question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD,'],
        answer: 'choiceA'
    },
    {
        title: "Second question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD,'],
        answer: 'choiceA'
    }
    {
        title: "Third question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD,'],
        answer: 'choiceA'
    }
    {
        title: "Forth question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD,'],
        answer: 'choiceA'
    }
    {
        title: "Last question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD,'],
        answer: 'choiceA'
    }
]

let timer = questions.length = 10
let timerInterval;
let questionIndex = 0

function startQuiz() {
    startScreen.setAttribute("class", "hide")
    questionsEl.removeAttribute("class")
    timerInterval = setInterval(function (){
        timer--
        timerEl.textContent = timer
        if timer <=0){
            endQuiz()
        }
    }, 1000)
    getQuestions()
}

function getQuestions() {
    let currentQuestion = questions[questionIndex]

    titleEl.textContent = currentQuestion.title

    questionChoices.innerHTML = ""

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = currentQuestion.choices [i];
    let choiceBtn = document.createElement("button")
    choiceBtn.setAttribute("class","choice")
    choiceBtn.setAttribute("value","choice")
    choiceBtn.textContent = choice

    choiceBtn.addEventListener("click",selectAnswer)
    questionChoices.appendChild(choiceBtn)
    }
}









