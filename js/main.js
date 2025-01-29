// Отправка в консоль сообщения пользователя на странице контакты

function sendMessage() {
  var message = document.getElementById("contacts__user_message");
  var name = document.getElementById("contacts__name_user");
  var email = document.getElementById("contacts__email_user");
  console.log("Имя: " + name.value + 
    "\nEmail: " + email.value + 
    "\nСообщение:" + message.value);

  alert("Уважаемый(ая) " + name.value + ", \nВаше сообщение получено!" +
    "\nПодробности смотрите в консоле"
  );
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
