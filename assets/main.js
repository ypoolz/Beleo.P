document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scrollButton');

    scrollButton.addEventListener('click', function (event) {
        event.preventDefault();

        var targetSection = document.getElementById('Salepage');

        // Scroll suave para o alvo
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });
});