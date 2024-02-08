document.addEventListener('DOMContentLoaded', function () {
    // Your existing toggleAnswer function
    function toggleAnswer(icon) {
        var answer = icon.parentElement.nextElementSibling;

        answer.classList.toggle('active');

        if (answer.classList.contains('active')) {
            icon.src = './assets/images/icon-minus.svg';
        } else {
            icon.src = './assets/images/icon-plus.svg';
        }
    }

    // Add event listeners to all toggle icons
    var toggleIcons = document.querySelectorAll('.toggle-icon');
    toggleIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            toggleAnswer(icon);
        });
    });
});
