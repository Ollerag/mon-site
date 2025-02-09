document.getElementById("bouton").addEventListener("click", function () {
  let message = document.getElementById("message");
  let bouton = document.getElementById("bouton");

  bouton.textContent = "Merci !"; // Change le texte du bouton
  bouton.style.backgroundColor = "#28a745"; // Change la couleur du bouton
});

document.getElementById("darkMode").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

document.getElementById("valider").addEventListener("click", function () {
  let prenom = document.getElementById("prenom").value;
  let bienvenue = document.getElementById("bienvenue");

  if (prenom.trim() !== "") {
    bienvenue.textContent = "Bienvenue, " + prenom + " !";
  } else {
    bienvenue.textContent = "Veuillez entrer un prénom.";
  }
});
