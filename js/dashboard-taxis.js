// Fonctionnalité de recherche
document.querySelector(".search-input").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const rows = document.querySelectorAll(".reservations-table tbody tr");

  rows.forEach((row) => {
    const vehicle = row
      .querySelector(".cell-vehicle")
      .textContent.toLowerCase();
    const route = row.querySelector(".cell-route").textContent.toLowerCase();
    const datetime = row
      .querySelector(".cell-datetime")
      .textContent.toLowerCase();

    if (
      vehicle.includes(searchTerm) ||
      route.includes(searchTerm) ||
      datetime.includes(searchTerm)
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Fonctionnalité de suppression
document.querySelectorAll(".action-button.delete").forEach((button) => {
  button.addEventListener("click", function () {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")) {
      const row = this.closest("tr");
      row.classList.add("fade-out");
      setTimeout(() => {
        row.remove();
      }, 300);
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('currentUser');
  sessionStorage.removeItem('currentUser');
  window.location.href = '../login.html';
});
