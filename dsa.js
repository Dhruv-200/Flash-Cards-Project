const quizData = [
    {
        question: "Which of the following is a linear data structure?",
        a: "Tree",
        b: "Graph",
        c: "Linked List",
        d: "Heap",
        correct: "c"
    },
    {
        question: "Which algorithm is used for sorting?",
        a: "Binary Search",
        b: "Quick Sort",
        c: "DFS",
        d: "BFS",
        correct: "b"
    },
    {
        question: "What is the time complexity of binary search?",
        a: "O(n)",
        b: "O(n^2)",
        c: "O(log n)",
        d: "O(n log n)",
        correct: "c"
    },
    {
        question: "Which of the following data structures is based on LIFO?",
        a: "Queue",
        b: "Stack",
        c: "Heap",
        d: "Tree",
        correct: "b"
    },
    {
        question: "What is the Big O notation used for?",
        a: "Describing the correctness of an algorithm",
        b: "Describing the efficiency of an algorithm",
        c: "Describing the size of data",
        d: "Describing the types of data",
        correct: "b"
    },
    {
        question: "Which of the following algorithms is used for searching in a graph?",
        a: "Quick Sort",
        b: "Merge Sort",
        c: "Binary Search",
        d: "Depth-First Search",
        correct: "d"
    },
    {
        question: "What does a hash table use to store data?",
        a: "Heap",
        b: "Hash function",
        c: "Binary tree",
        d: "Linked list",
        correct: "b"
    },
    {
        question: "Which data structure is used in the Breadth-First Search algorithm?",
        a: "Stack",
        b: "Queue",
        c: "Linked List",
        d: "Tree",
        correct: "b"
    },
    {
        question: "Which algorithm has the best time complexity for sorting?",
        a: "Bubble Sort",
        b: "Selection Sort",
        c: "Merge Sort",
        d: "Insertion Sort",
        correct: "c"
    },
    {
        question: "Which is an example of a dynamic data structure?",
        a: "Array",
        b: "Static List",
        c: "Binary Tree",
        d: "Fixed List",
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