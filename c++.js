const quizData = [
    {
        question: "Which header file is necessary for input and output operations in C++?",
        a: "<iostream>",
        b: "<stdio.h>",
        c: "<stdlib.h>",
        d: "<inputoutput>",
        correct: "a"
    },
    {
        question: "What is the correct syntax to create a class in C++?",
        a: "class MyClass {}",
        b: "class MyClass[]",
        c: "create class MyClass {}",
        d: "struct MyClass {}",
        correct: "a"
    },
    {
        question: "Which operator is used to access members of a class or structure in C++?",
        a: ".",
        b: "->",
        c: "::",
        d: "#",
        correct: "a"
    },
    {
        question: "What is the output of the following code? `int x = 5; std::cout << ++x;`",
        a: "5",
        b: "6",
        c: "7",
        d: "error",
        correct: "b"
    },
    {
        question: "What is the purpose of the `#include` directive in C++?",
        a: "To include code from other files",
        b: "To define constants",
        c: "To declare variables",
        d: "To create functions",
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