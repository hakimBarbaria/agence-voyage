if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

document.getElementById('signupf').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('confirm-password').value;

    // Validation
    if (!name || !email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    if (password !== repassword) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }

    if (!email.includes('@')) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));

    if (users.some(user => user.email === email)) {
        alert('Cet email est déjà enregistré');
        return;
    }

    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    sessionStorage.setItem('currentUser', JSON.stringify({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
    }));

    alert('Inscription réussie !');
    window.location.href = '../login.html';
});
