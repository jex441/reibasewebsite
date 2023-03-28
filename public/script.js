(function() {
  emailjs.init('user_kDFY4AFTuoji3GQqaGDsn');
})();

window.onload = function() {
  document.getElementById('template_v1ulh7q').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_axjc80l', 'template_v1ulh7q', this)
          .then(function() {
              console.log('SUCCESS!');
              document.getElementById("template_v1ulh7q").reset();
              document.querySelector(".success").style.display = "block";
          }, function(error) {
              console.log('FAILED...', error);
              document.getElementById("success").style.display = "block";
              document.getElementById("success").innerText = "There was an error. Please try again.";
          });
  });
}
