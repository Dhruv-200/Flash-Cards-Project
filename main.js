// Automatically adjust the height of the textarea based on content
const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function () {
    // Reset the height
    this.style.height = 'auto';
    
    // Set the height based on the scroll height
    this.style.height = `${this.scrollHeight}px`;
});
