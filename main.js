// Ensure the DOM is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('textarea');
    const minWordCount = 100; // Minimum word limit

    // Function to check word count
    function checkWordCount() {
        const text = textarea.value.trim();
        const wordCount = text.split(/\s+/).filter(Boolean).length; // Correct word count
        
        if (wordCount < minWordCount) {
            alert(`Minimum requirement not reached. Please enter at least ${minWordCount} words.`);
        } else {
            alert(`You have entered ${wordCount} words.`);
        }
    }

    // Adjust textarea height automatically based on content
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = `${this.scrollHeight}px`;
    });

    // Link the "Create Quiz" button with the checkWordCount function
    const createquiz = document.getElementById('create-quiz');
    createquiz.addEventListener('click', checkWordCount);
});
