const quizData = [
    {
        question: "Who is the creator of the Java programming language?",
        a: "Brendan Eich",
        b: "Dennis Ritchie",
        c: "James Gosling",
        d: "Guido van Rossum",
        correct: "c"
    },
    {
        question: "What does JVM stand for in Java?",
        a: "Java Variable Manager",
        b: "Java Virtual Machine",
        c: "Java Version Module",
        d: "Java Value Memory",
        correct: "b"
    },
    {
        question: "Which of the following is a core principle of Java?",
        a: "Write Once, Run Anywhere",
        b: "Run Once, Write Anywhere",
        c: "Run Once, Use Anywhere",
        d: "Write Twice, Run Anywhere",
        correct: "a"
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        a: "extends",
        b: "inherits",
        c: "super",
        d: "base",
        correct: "a"
    },
    {
        question: "What is the main memory management mechanism in Java?",
        a: "Manual memory management",
        b: "Pointer management",
        c: "Garbage collection",
        d: "Destructors",
        correct: "c"
    },
    {
        question: "Which of the following is NOT a Java access modifier?",
        a: "public",
        b: "protected",
        c: "internal",
        d: "private",
        correct: "c"
    },
    {
        question: "Which keyword is used to create a thread in Java?",
        a: "execute",
        b: "thread",
        c: "run",
        d: "new Thread()",
        correct: "d"
    },
    {
        question: "What is the default value of a boolean in Java?",
        a: "true",
        b: "false",
        c: "null",
        d: "0",
        correct: "b"
    },
    {
        question: "Which package contains the main collection framework in Java?",
        a: "java.io",
        b: "java.utils",
        c: "java.collection",
        d: "java.util",
        correct: "d"
    },
    {
        question: "Which of the following is used to handle exceptions in Java?",
        a: "try-catch",
        b: "if-else",
        c: "for-loop",
        d: "switch-case",
        correct: "a"
    }
];


// HTML elements for quiz
const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');
const homeButton = document.getElementById('home');
let score = 0;
let selectedAnswers = {};

// Load Quiz Questions Dynamically
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

// Handle Answer Selection
function selectAnswer(questionIndex, option, button) {
    const buttons = document.querySelectorAll(`.question-container:nth-child(${questionIndex + 1}) .option-btn`);
    
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    button.classList.add('selected');
    selectedAnswers[questionIndex] = option;
}

// Handle Quiz Submission and Scoring
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
