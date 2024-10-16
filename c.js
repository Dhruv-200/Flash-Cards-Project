const quizData = [
    {
        question: "Who is the creator of the C programming language?",
        a: "Bjarne Stroustrup",
        b: "Dennis Ritchie",
        c: "James Gosling",
        d: "Ken Thompson",
        correct: "b"
    },
    {
        question: "Which of the following is NOT a valid C data type?",
        a: "int",
        b: "float",
        c: "string",
        d: "char",
        correct: "c"
    },
    {
        question: "What is the operator used to access memory addresses in C?",
        a: "*",
        b: "&",
        c: "->",
        d: "^",
        correct: "b"
    },
    {
        question: "Which function is used to dynamically allocate memory in C?",
        a: "malloc()",
        b: "alloc()",
        c: "new()",
        d: "calloc()",
        correct: "a"
    },
    {
        question: "What is the standard output function in C?",
        a: "print()",
        b: "printf()",
        c: "cout",
        d: "echo()",
        correct: "b"
    },
    {
        question: "Which of the following is used to define a constant in C?",
        a: "const",
        b: "define",
        c: "constant",
        d: "let",
        correct: "b"
    },
    {
        question: "Which of the following loops is present in C?",
        a: "for",
        b: "repeat",
        c: "foreach",
        d: "whileFor",
        correct: "a"
    },
    {
        question: "Which operator in C is used for dereferencing a pointer?",
        a: "*",
        b: "&",
        c: "+",
        d: "%",
        correct: "a"
    },
    {
        question: "What is the return type of the main function in a C program?",
        a: "void",
        b: "int",
        c: "float",
        d: "char",
        correct: "b"
    },
    {
        question: "Which header file is required for using standard I/O functions in C?",
        a: "<stdio.h>",
        b: "<stdlib.h>",
        c: "<iostream>",
        d: "<conio.h>",
        correct: "a"
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