function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Change the color of each <strong> element to green
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Revert the color of each <strong> element back to black
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}