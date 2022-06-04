(function () {
  emailjs.init("QjpzE2RJb1rGVGPs0");
})();

window.onload = function () {
  document
    .getElementById("email-list")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_36ferie", "template_bm4bbbe", this).then(
        function () {
          document.getElementById("confirm-email").innerText =
            "You have been added to the email list.";
          document.getElementById("email-input").value = "";
        },
        function (error) {
          document.getElementById("confirm-email").innerText =
            "There was an error.";
          console.log(error);
        }
      );
    });
};
