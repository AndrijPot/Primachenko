const texts = document.querySelectorAll('.translate');
const toggleButton = document.getElementById('toggleButton');

let isEnglish = true;

toggleButton.addEventListener('click', function() {
    texts.forEach(function(text) {
        if (isEnglish) {
            text.textContent = text.getAttribute('data-uk');
            toggleButton.textContent = 'Change to english';
        } else {
            text.textContent = text.getAttribute('data-en');
            toggleButton.textContent = 'Змінити на українську';
        }
    });

    isEnglish = !isEnglish;
});