document.getElementById('loginf').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    const user = users.find(u => u.email === email);

    if (!user || user.password !== password) {
        alert('Email ou mot de passe incorrect');
        return;
    }

    const sessionData = {
        id: user.id,
        name: user.name,
        email: user.email,
        lastLogin: new Date().toISOString()
    };

    if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(sessionData));
    } else {
        sessionStorage.setItem('currentUser', JSON.stringify(sessionData));
    }

    window.location.href = '../html/dashboard-hotels.html';
});