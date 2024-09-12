
quizData = [
    {
        question: "Basic Syntax What is the correct way to declare a variable in Java that holds an integer value?",
        a: "integer num =10",
        b: "int num = 10",
        c: "num = 10",
        d: "int = 10",
        correct: "b"
    },
    {
        question: "Object-Oriented Programming In Java, what is the access modifier that allows a member of a class to be accessible only within the same package?",
        a: "Public",
        b: "Private",
        c: "Default",
        d: "Protected",
        correct: "c"
    },
    {
        question: "Collections Framework Which of the following Java collection classes implements the List interface?",
        a: "Hashset",
        b: "ArrayList",
        c: "HashMap",
        d: "TreeSet",
        correct: "b"
    },
    {
        question: "How do you declare an array of integers in Java?",
        a: "int[] arr",
        b: "integer[] arr",
        c: "int.[] arr",
        d: "int arr",
        correct: "a"
    },
    {
        question: "What keyword is used to inherit a class in Java?",
        a: "extends",
        b: "new",
        c: "inherites",
        d: "class",
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