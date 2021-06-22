const quizDB = [
    {
        question: "Q1. What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2. What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3. What is the full form of HTTP?",
        a: "Hey Transfer Protocol",
        b: "HyperText Transfer Product",
        c: "HyperText Test Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4. What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer'); console.log(1, answers);
const showScore = document.querySelector('#showScore');



let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    // console.log(quizDB);
    // console.log(quizDB[0].question);

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currAnsEle) => { //forEach for checking which radio is selected.. will iterate through all radio
        if (currAnsEle.checked) {
            answer = currAnsEle.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnsEle) => {
        currAnsEle.checked = false;
    })
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll(); //for delecting radio button which was automaticallly selected for nect ques

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} ✌</h3>
        <button class="btn" onclick="location.reload()">Play Again</button> 
        `;//location.reload() for initial phase

        showScore.classList.remove('scoreArea');
    }
});












