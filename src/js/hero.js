function typeEffect(element, speed = 100) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    function type() {
    if (i < text.length) {
    element.textContent += text[i];
    i++;
    setTimeout(type, speed);
    }
    }
    
    type();
    }
    
    document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    typeEffect(title, 80);
    });