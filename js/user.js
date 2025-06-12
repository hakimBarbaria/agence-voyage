document.getElementById("avatarInput").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const preview = document.getElementById("avatarPreview");
  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const bio = document.getElementById("bio").value;
  alert(`Profile updated!\nUsername: ${username}\nBio: ${bio}`);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
