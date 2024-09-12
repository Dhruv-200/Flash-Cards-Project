const quizData = [
    {
        question: "Which of the following is the correct way to define a function in Python?",
        a: "def myFunction():",
        b: "function myFunction():",
        c: "define myFunction():",
        d: "func myFunction():",
        correct: "a"
    },
    {
        question: "Which symbol is used for single-line comments in Python?",
        a: "//",
        b: "#",
        c: "/*",
        d: "--",
        correct: "b"
    },
    {
        question: "What is the output of the following code? `print(type([]))`",
        a: "<class 'list'>",
        b: "<class 'array'>",
        c: "<type 'list'>",
        d: "<class 'object'>",
        correct: "a"
    },
    {
        question: "Which of the following is used to create a new dictionary in Python?",
        a: "dict()",
        b: "new dict",
        c: "dictionary()",
        d: "create dict",
        correct: "a"
    },
    {
        question: "How do you add an item to the end of a list in Python?",
        a: "list.add(item)",
        b: "list.append(item)",
        c: "list.insert(item)",
        d: "list.push(item)",
        correct: "b"
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