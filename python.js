const quizData = [
    {
        question: "Who created Python?",
        a: "James Gosling",
        b: "Brendan Eich",
        c: "Guido van Rossum",
        d: "Bjarne Stroustrup",
        correct: "c"
    },
    {
        question: "Which feature of Python makes it easy to read and use?",
        a: "Complicated syntax",
        b: "Simple syntax",
        c: "Low-level syntax",
        d: "Hard syntax",
        correct: "b"
    },
    {
        question: "Which data type is immutable in Python?",
        a: "List",
        b: "Set",
        c: "Tuple",
        d: "Dictionary",
        correct: "c"
    },
    {
        question: "What is a key feature of Python?",
        a: "Manual memory management",
        b: "Object-oriented only",
        c: "Interpreted language",
        d: "Static typing",
        correct: "c"
    },
    {
        question: "Which library is used for data analysis in Python?",
        a: "NumPy",
        b: "Pandas",
        c: "Matplotlib",
        d: "TensorFlow",
        correct: "b"
    },
    {
        question: "Which keyword is used to define a function in Python?",
        a: "function",
        b: "def",
        c: "func",
        d: "lambda",
        correct: "b"
    },
    {
        question: "Which Python feature allows code reuse?",
        a: "Classes",
        b: "Variables",
        c: "Loops",
        d: "Modules",
        correct: "d"
    },
    {
        question: "What is the output of print(2 ** 3) in Python?",
        a: "6",
        b: "8",
        c: "9",
        d: "12",
        correct: "b"
    },
    {
        question: "Which of the following is a correct way to comment in Python?",
        a: "// This is a comment",
        b: "# This is a comment",
        c: "/* This is a comment */",
        d: "<!-- This is a comment -->",
        correct: "b"
    },
    {
        question: "Which Python function is used to iterate over a sequence?",
        a: "iterate()",
        b: "for()",
        c: "loop()",
        d: "range()",
        correct: "d"
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