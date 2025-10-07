class AuthService {
    constructor() {
        this.isLoggedIn = false;
    }

    login(username, password) {
        // Simulate an API call for user authentication
        if (username === 'user' && password === 'password') {
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isAuthenticated() {
        return this.isLoggedIn;
    }
}

export default new AuthService();