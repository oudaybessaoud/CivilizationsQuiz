
let questions = [
    {
        question: "ما هي العاصمة القديمة لمصر؟",
        options: ["طيبة", "الإسكندرية", "المنيا", "الجيزة"],
        answer: "طيبة"
    },
    {
        question: "من هو الفيلسوف اليوناني الذي علم الإسكندر الأكبر؟",
        options: ["سقراط", "أرسطو", "أفلاطون", "هيراقليطس"],
        answer: "أرسطو"
    },
    {
        question: "ما هو البناء المشهور في روما القديمة؟",
        options: ["الكولوسيوم", "الأكروبوليس", "الهرم الأكبر", "البتراء"],
        answer: "الكولوسيوم"
    }
];

let currentQuestion = 0;
let score = 0;
let timer = 30;
let timerInterval;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".option");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.style.display = "none";
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElements.forEach((option, index) => {
        option.textContent = question.options[index];
        option.onclick = () => checkAnswer(option.textContent);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score += 10;
        scoreElement.textContent = score;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function startTimer() {
    timer = 30;
    timerElement.textContent = timer;
    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    questionElement.textContent = "انتهت اللعبة!";
    optionsElements.forEach(option => option.style.display = "none");
    startButton.textContent = "أعد اللعبة";
    startButton.style.display = "block";
}
