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
]