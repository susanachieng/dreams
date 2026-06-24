window.onload = function () {
  var navLinks = document.getElementById("navLinks");

  window.showMenu = function () {
    navLinks.style.right = "0";
  };

  window.hideMenu = function () {
    navLinks.style.right = "-200px";
  };
};

const hero = document.getElementById("hero");

const images = ["images/image2.jpeg", "images/imagge.png", "images/about1.jpg"];

let index = 0;

hero.style.backgroundImage = `url('${images[0]}')`;

setInterval(() => {
  hero.style.opacity = "0.8";

  setTimeout(() => {
    hero.style.backgroundImage = `url('${images[index]}')`;
    hero.style.opacity = "1";
    index = (index + 1) % images.length;
  }, 500);
}, 4000);

function openModal() {
  document.getElementById("bookingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function sendWhatsAppTraining() {
  let message = "Hello, I want to book a training session.";
  let url = "https://wa.me/254700000000?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

function sendWhatsAppMentorship() {
  let message = "Hello, I want to book mentorship.";
  let url = "https://wa.me/254700000000?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

document.getElementById("popupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("goal").value,
  });

  alert("Request sent successfully!");
  closeModal();
});
