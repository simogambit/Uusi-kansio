document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.onsubmit = function (event) {
        event.preventDefault();

        document.getElementById("emailError").textContent = "";
        document.getElementById("commentError").textContent = "";
        document.getElementById("email").style.border = "";
        document.getElementById("comment").style.border = "";
        let email = document.getElementById("email").value;
        let comment = document.getElementById("comment").value;

        comment = comment.trim().substring(0, 50);

        if (email.length < 6) {
      document.getElementById("emailError").textContent = "Vähintään 6 kirjainta.";
      document.getElementById("email").style.border = "2px solid red";
      return;
    }

    if (email.length > 15) {
      document.getElementById("emailError").textContent = "Enintään 15 kirjainta.";
      document.getElementById("email").style.border = "2px solid red";
      return;
    }

    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Sähköpostissa oltava @.";
      document.getElementById("email").style.border = "2px solid red";
      return;
    }

    if (comment.length === 0) {
      document.getElementById("commentError").textContent = "Kommentti ei voi olla tyhjä.";
      document.getElementById("comment").style.border = "2px solid red";
      return;
    }

    if (comment.length > 50) {
      document.getElementById("commentError").textContent = "Enintään 50 merkkiä.";
      document.getElementById("comment").style.border = "2px solid red";
      return;
    }

    alert("Email: " + email + "\nComment: " + comment);
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("theForm");
  const type = document.getElementById("type");
  const years = document.getElementById("years");
  const cost = document.getElementById("cost");
  const message = document.getElementById("discountMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const prices = {
        basic: 10,
        premium: 15,
        gold: 20,
        platinum: 25
    };

    const selectedtype = type.value;
    const numYears = parseInt(years.value);
    let total = prices[selectedtype] * numYears;

    let discountText = "";

    if (numYears > 2 && numYears <5) {
        total = total * 0.8
        discountText = "20% Alennus" 
    }

    else if (numYears >= 5) {
        total = total * 0.8 -5;
        discountText ="20% + 5e alennus. Älä kerro kellekkään."
    }
    else {
        discountText = "";
    }

    cost.value = total.toFixed(2) + " €";
    message.textContent = discountText;
   });
});

function calculate() {
  var form = document.forms["myForm"];

  var quantity = parseInt(form.quantity.value);
  var price = parseFloat(form.price.value);
  var tax = parseFloat(form.tax.value);
  var discount = parseFloat(form.discount.value);
  var shipping = parseFloat(form.shipping.value);

  if (quantity > 100) {
    discount = discount * 2;
  }

  var total = (quantity * price) - discount;
  total += total * (tax / 100);
  total += shipping;

  form.total.value = total.toFixed(2);
  return false;
}

function showExtraField() {
    
      document.getElementById("emailField").style.display = "none";
      document.getElementById("PuhnroField").style.display = "none";
      document.getElementById("smsField").style.display = "none";
      document.getElementById("postimiesField").style.display = "none";

      var selected = document.getElementById("contactMethod").value;

      if (selected === "email") {
        document.getElementById("emailField").style.display = "block";
      } else if (selected === "Puhnro") {
        document.getElementById("PuhnroField").style.display = "block";
      } else if (selected === "sms") {
        document.getElementById("smsField").style.display = "block";
      } else if (selected === "postimies pate") {
        document.getElementById("postimiesField").style.display = "block";
      }
    }