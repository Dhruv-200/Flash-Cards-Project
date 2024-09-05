
const quizData = [
    {
        question: "What is the time complexity of binary search?",
        a: "O(n)",
        b: "O(log n)",
        c: "O(n^2)",
        d: "O(1)",
        correct: "b"
    },
    {
        question: "Which data structure uses LIFO?",
        a: "Queue",
        b: "Stack",
        c: "Array",
        d: "Linked List",
        correct: "b"
    },
    {
        question: "What is the best case time complexity of bubble sort?",
        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(log n)",
        correct: "a"
    },
    {
        question: "Which is an example of a dynamic data structure?",
        a: "Array",
        b: "Stack",
        c: "Queue",
        d: "Linked List",
        correct: "d"
    },
    {
        question: "What does 'DSA' stand for?",
        a: "Data Systems Algorithm",
        b: "Data Structures Algorithm",
        c: "Data Structures and Algorithms",
        d: "Dynamic Systems and Algorithms",
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