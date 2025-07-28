document.querySelector(".search-input").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const rows = document.querySelectorAll(".reservations-table tbody tr");

  rows.forEach((row) => {
    const hotelName = row
      .querySelector(".cell-hotel")
      .textContent.toLowerCase();
    const location = row
      .querySelector(".cell-location")
      .textContent.toLowerCase();

    if (hotelName.includes(searchTerm) || location.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

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