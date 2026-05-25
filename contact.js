document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });

    const button = document.querySelector('button');
    button.addEventListener('mouseover', () => {
        button.classList.add('hover');
    });
    button.addEventListener('mouseout', () => {
        button.classList.remove('hover');
    });
});
