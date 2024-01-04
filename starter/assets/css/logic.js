let timerEl = document.getElementById("time")
let startScreen = document.getElementById("start-screen")
const startBtn = document.getElementById("start")
const questionsEl = document.getElementById("questions")
const questionTitle = document.getElementById("question-title")
const questionChoices = document.getElementById("choices")
const endScreen = document.getElementById("end-screen")
const finalScore = document.getElementById("final-score")
const initals = document.getElementById("initials")
const submitBtn = document.getElementById("submit")
const feedbackEl = document.getElementById("feedback")

let questions= [
    {
        title: "First question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD'],
        answer: 'choiceA'
    },
    {
        title: "Second question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD'],
        answer: 'choiceA'
    },
    {
        title: "Third question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD'],
        answer: 'choiceA'
    },
    {
        title: "Forth question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD'],
        answer: 'choiceA'
    },
    {
        title: "Last question",
        choices: ['choiceA', 'choiceB', 'choiceC', 'choiceD'],
        answer: 'choiceA'
    },
];

const incorrectTimerPenalty = 15;
const startTimer = questions.length * incorrectTimerPenalty;
let timer = startTimer;
let timerInterval;
let questionIndex = 0;

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timer = startTimer;
    timerInterval = setInterval(function (){
        timer--
        timerEl.textContent = timer
        if(timer <=0){
            endQuiz();
        }
    }, 1000);
    getQuestions();
}

function getQuestions() {
    let currentQuestion = questions[questionIndex]

    questionTitle.textContent = currentQuestion.title

    questionChoices.innerHTML = ""

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choice = currentQuestion.choices [i];
        let choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class","choice")
        choiceBtn.setAttribute("value",choice);
        choiceBtn.textContent = choice
        choiceBtn.addEventListener("click",selectAnswer)
        questionChoices.appendChild(choiceBtn)
    }
}

function selectAnswer(event) {
    if (event.target.value !== questions [questionIndex].answer) {
        timer-=incorrectTimerPenalty;

        if (timer <0) {
            timer = 0
        }    

        timerEl.textContent = timer
        feedbackEl.textContent = "Wrong!"
    } else {
        feedbackEl.textContent = "Correct!"
    }

    feedbackEl.setAttribute("class", "feedback")
    setTimeout(function (){
        feedbackEl.setAttribute("class", "feedback hide")
    }, 1000)

    questionIndex++

    if (questionIndex === questions.length) {
        endQuiz()
    } else{
        getQuestions()
    }
}

function endQuiz() {
    clearInterval(timerInterval)
    questionsEl.setAttribute("class", "hide")
    endScreen.removeAttribute("class")
}

startBtn.addEventListener("click", startQuiz);