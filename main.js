const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    
    this.style.height = `${this.scrollHeight}px`;
});
