const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.nav-buttons');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');

});


let isLoggedIn = sessionStorage.getItem('currentUser');

let loginButton = document.querySelector('.login');
let signupButton = document.querySelector('.signup');
const navButtons = document.querySelector('.nav-buttons');

if (sessionStorage.getItem('currentUser')) {

    if (loginButton) loginButton.style.display = 'none';
    if (signupButton) signupButton.style.display = 'none';

    const userProfile = document.createElement('div');
    userProfile.className = 'user-profile';
    
    const userData = JSON.parse(isLoggedIn);
const userName = userData.name;
const userInitial = userName.charAt(0).toUpperCase();

console.log(userInitial);
    
    userProfile.innerHTML = `
        <div class="user-avatar">${userInitial}</div>
        <div class="user-dropdown">
            <a href="#">Mon Profil</a>
            <a href="#">Mes Réservations</a>
            <a href="#" id="logout-btn">Déconnexion</a>
        </div>
    `;
    
    navButtons.appendChild(userProfile);
    
    document.getElementById('logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        sessionStorage.removeItem('currentUser');
        location.reload();
    });
} else {
    navButtons.innerHTML = `
        <a href="./login.html" class="btn login">Connexion</a>
        <a href="./signup.html" class="btn signup">Inscription</a>
    `;
}