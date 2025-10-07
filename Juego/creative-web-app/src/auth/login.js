function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    AuthService.login(username, password)
        .then(response => {
            if (response.success) {
                window.location.href = 'game.html';
            } else {
                alert('Login failed: ' + response.message);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        });
}

export { handleLogin };