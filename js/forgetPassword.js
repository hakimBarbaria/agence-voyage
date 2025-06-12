document.getElementById('forgetP').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const form = event.target;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const userExists = users.some(user => user.email === email);
    
    if (!userExists) {
        alert('Vous n\'êtes pas encore enregistré dans notre plateforme');
        return;
    }

    if (!form.querySelector('#new-password')) {
        form.innerHTML = `
            <div class="form-group">
                <label for="new-password">Nouveau mot de passe</label>
                <input type="password" id="new-password" required>
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirmer le mot de passe</label>
                <input type="password" id="confirm-password" required>
            </div>
            <button type="submit" class="reset-button">Réinitialiser le mot de passe</button>
        `;
        
        form.addEventListener('submit', handlePasswordReset);
        return;
    }

    function handlePasswordReset(e) {
        e.preventDefault();
        
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }

        if (newPassword.length < 6) {
            alert('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }

        const updatedUsers = users.map(user => {
            if (user.email === email) {
                return {
                    ...user,
                    password: newPassword
                };
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        
        alert('Mot de passe réinitialisé avec succès!');
        window.location.href = '../html/login.html';
    }
});