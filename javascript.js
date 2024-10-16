const quizData = [
    {
        question: "Who created JavaScript in 1995?",
        a: "Dennis Ritchie",
        b: "Brendan Eich",
        c: "James Gosling",
        d: "Guido van Rossum",
        correct: "b"
    },
    {
        question: "Which of the following is used to manipulate the DOM in JavaScript?",
        a: "Variables",
        b: "Document Object Model",
        c: "Control Structures",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Which JavaScript feature allows non-blocking operations?",
        a: "Synchronous programming",
        b: "Event-driven programming",
        c: "Asynchronous programming",
        d: "Procedural programming",
        correct: "c"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "React",
        b: "Laravel",
        c: "Django",
        d: "Flask",
        correct: "a"
    },
    {
        question: "Which method is used to attach event listeners in JavaScript?",
        a: "getElementById()",
        b: "addEventListener()",
        c: "removeEventListener()",
        d: "clickListener()",
        correct: "b"
    },
    {
        question: "What does ECMAScript standardize?",
        a: "CSS",
        b: "HTML",
        c: "JavaScript",
        d: "SQL",
        correct: "c"
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        a: "let",
        b: "const",
        c: "var",
        d: "static",
        correct: "d"
    },
    {
        question: "What feature allows JavaScript to handle multiple user actions at once?",
        a: "Procedural programming",
        b: "Event-driven programming",
        c: "Parallel processing",
        d: "Synchronous execution",
        correct: "b"
    },
    {
        question: "Which of the following helps prevent memory leaks in JavaScript?",
        a: "Manual memory allocation",
        b: "Automatic garbage collection",
        c: "Destructors",
        d: "Pointers",
        correct: "b"
    },
    {
        question: "What is a Promise in JavaScript?",
        a: "A loop control structure",
        b: "An error handling mechanism",
        c: "An object for asynchronous operations",
        d: "A security feature",
        correct: "c"
    }
];


const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');
const homeButton = document.getElementById('home');
let score = 0;
let selectedAnswers = {};

function loadQuiz() {
    quiz.innerHTML = '';

    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        ['a', 'b', 'c', 'd'].forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = q[option];
            button.onclick = () => selectAnswer(index, option, button);
            questionDiv.appendChild(button);
        });

        quiz.appendChild(questionDiv);
    });
}

function selectAnswer(questionIndex, option, button) {
    const buttons = document.querySelectorAll(`.question-container:nth-child(${questionIndex + 1}) .option-btn`);
    
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    button.classList.add('selected');
    selectedAnswers[questionIndex] = option;
}

submitButton.addEventListener('click', () => {
    score = 0; 
    
    quizData.forEach((q, index) => {
        const buttons = document.querySelectorAll(`.question-container:nth-child(${index + 1}) .option-btn`);
        
        
        if (selectedAnswers[index] === q.correct) {
            score++; 
        }
        
        buttons.forEach((btn, btnIndex) => {
            const option = ['a', 'b', 'c', 'd'][btnIndex];
            
            if (option === q.correct) {
                btn.classList.add('correct'); 
            }

            if (selectedAnswers[index] === option && option !== q.correct) {
                btn.classList.add('incorrect'); 
            }
        });
    });

    
    result.textContent = `You scored ${score}/${quizData.length}`;
    result.style.display = 'block';
    
    
    submitButton.style.display = 'none';
    homeButton.style.display = 'block';
});


loadQuiz();