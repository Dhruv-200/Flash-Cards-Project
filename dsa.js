document.addEventListener("DOMContentLoaded", function() {
    const myQuestions = [
        {
            question: "Which data structure uses FIFO (First In First Out) principle?",
            answers: {
                a: "Stack",
                b: "Queue",
                c: "Tree"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the time complexity of binary search?",
            answers: {
                a: "O(n)",
                b: "O(log n)",
                c: "O(n log n)"
            },
            correctAnswer: "b"
        },
        {
            question: "Which data structure is used for implementing recursion?",
            answers: {
                a: "Queue",
                b: "Graph",
                c: "Stack"
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is a linear data structure?",
            answers: {
                a: "Array",
                b: "Graph",
                c: "Tree"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the time complexity of inserting an element in a stack?",
            answers: {
                a: "O(1)",
                b: "O(log n)",
                c: "O(n)"
            },
            correctAnswer: "a"
        },
        {
            question: "Which data structure is used in breadth-first search (BFS) of a graph?",
            answers: {
                a: "Stack",
                b: "Queue",
                c: "Tree"
            },
            correctAnswer: "b"
        },
        {
            question: "What does the following function perform: push(x), pop()?",
            answers: {
                a: "Queue operations",
                b: "Stack operations",
                c: "Tree operations"
            },
            correctAnswer: "b"
        },
        {
            question: "Which data structure is most suitable for implementing a priority queue?",
            answers: {
                a: "Array",
                b: "Linked List",
                c: "Heap"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the worst-case time complexity of quicksort?",
            answers: {
                a: "O(n^2)",
                b: "O(n log n)",
                c: "O(n)"
            },
            correctAnswer: "a"
        },
        {
            question: "Which data structure is used in depth-first search (DFS) of a graph?",
            answers: {
                a: "Stack",
                b: "Queue",
                c: "Heap"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
            }
        });

        quizContainer.classList.add('hidden');
        submitButton.classList.add('hidden');

        resultsContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length}.`;
        resultsContainer.classList.remove('hidden');
        homeButton.classList.remove('hidden');
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const homeButton = document.getElementById('home');

    buildQuiz();

    submitButton.addEventListener('click', showResults);

    homeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
