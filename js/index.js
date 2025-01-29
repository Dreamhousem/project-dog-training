// Отправка ALERT после подписки на рассылки в блоке subscribe

function subscribe() {
  var message = document.getElementById("subscribe__input_email");
  alert("Спасибо за подписку! \nСкоро мы вышлем на ваш адрес " + message.value + " \nинтересный гайд и купон со скидкой 1000 ₽ на покупку курса");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}