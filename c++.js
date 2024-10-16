const quizData = [
    {
        question: "Who developed the C++ programming language?",
        a: "Dennis Ritchie",
        b: "Bjarne Stroustrup",
        c: "James Gosling",
        d: "Guido van Rossum",
        correct: "b"
    },
    {
        question: "Which of the following is NOT a C++ feature?",
        a: "Classes",
        b: "Polymorphism",
        c: "Encapsulation",
        d: "Reflection",
        correct: "d"
    },
    {
        question: "What is a virtual function in C++?",
        a: "A function that cannot be called",
        b: "A function that only exists in memory",
        c: "A function that can be overridden",
        d: "A function with no return type",
        correct: "c"
    },
    {
        question: "Which of the following supports dynamic memory management in C++?",
        a: "malloc()",
        b: "new",
        c: "alloc()",
        d: "init()",
        correct: "b"
    },
    {
        question: "What does STL stand for in C++?",
        a: "Standard Type Library",
        b: "Standard Template Library",
        c: "System Template Library",
        d: "Simple Template Library",
        correct: "b"
    },
    {
        question: "Which access modifier allows members to be accessed from anywhere?",
        a: "private",
        b: "protected",
        c: "public",
        d: "internal",
        correct: "c"
    },
    {
        question: "Which of the following is used for multiple inheritance in C++?",
        a: "virtual base classes",
        b: "concrete classes",
        c: "derived classes",
        d: "subclasses",
        correct: "a"
    },
    {
        question: "Which of the following allows C++ to perform both low-level and high-level programming?",
        a: "OOP and procedural programming",
        b: "Low-level pointers",
        c: "Data encapsulation",
        d: "Template programming",
        correct: "a"
    },
    {
        question: "What is a constructor in C++?",
        a: "A function used to create an object",
        b: "A function used to initialize an object",
        c: "A function used to allocate memory",
        d: "A function used to destroy an object",
        correct: "b"
    },
    {
        question: "Which keyword is used to inherit a class in C++?",
        a: "class",
        b: "inherit",
        c: "extends",
        d: "public",
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