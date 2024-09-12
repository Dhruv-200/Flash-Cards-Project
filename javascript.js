const quizData = [
    {
        question: "What is the correct syntax for referring to an external JavaScript file called `script.js`?",
        a: "<script src='script.js'>",
        b: "<script href='script.js'>",
        c: "<script name='script.js'>",
        d: "<script link='script.js'>",
        correct: "a"
    },
    {
        question: "Which method is used to add a new item to the end of an array?",
        a: "add()",
        b: "push()",
        c: "append()",
        d: "insert()",
        correct: "b"
    },
    {
        question: "What does the `console.log()` function do?",
        a: "Displays a message in an alert box",
        b: "Outputs a message to the web page",
        c: "Prints a message to the console",
        d: "Logs a message in the server",
        correct: "c"
    },
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        a: "var",
        b: "int",
        c: "let",
        d: "Both a and c",
        correct: "d"
    },
    {
        question: "What is the output of `typeof NaN` in JavaScript?",
        a: "number",
        b: "NaN",
        c: "undefined",
        d: "object",
        correct: "a"
    },

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