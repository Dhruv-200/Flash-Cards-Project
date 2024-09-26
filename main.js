const subjectDescriptions = {
    dsa: "Data Structures and Algorithms (DSA) are the backbone of computer science. Learn about efficient data storage and processing.",
    javascript: "JavaScript is the language of the web. It's essential for building interactive websites and web applications.",
    python: "Python is a versatile programming language, known for its simplicity and readability. Ideal for web development and data science.",
    java: "Java is a popular, platform-independent programming language used for building cross-platform applications.",
    c: "C is a powerful low-level language, ideal for systems programming and embedded applications.",
    cpp: "C++ builds on C and introduces object-oriented programming. It's widely used in game development, high-performance applications."
};

const cardButtons = document.querySelectorAll('.card-button');
const subjectDescriptionElement = document.getElementById('subject-description');
const startQuizButton = document.getElementById('start-quiz-button');
const sidebar = document.getElementById('sidebar');

cardButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const subject = button.getAttribute('data-subject');
        subjectDescriptionElement.textContent = subjectDescriptions[subject];
        sidebar.classList.add('open');
    });

    button.addEventListener('mouseleave', () => {
        sidebar.classList.remove('open');
    });

    button.addEventListener('click', () => {
        const subject = button.getAttribute('data-subject');
        subjectDescriptionElement.textContent = subjectDescriptions[subject];
        startQuizButton.style.display = 'block';
        startQuizButton.onclick = () => {
            location.href = `${subject}.html`;
        };
        sidebar.classList.add('open');
    });
});

function closeSidebar() {
    sidebar.classList.remove('open');
}
