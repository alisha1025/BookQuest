import decode from 'jwt-decode';

// Class to manage user authentication
class AuthService {
  // Retrieves user data from the token
  getProfile() {
    const token = this.getToken();
    return token ? decode(token) : null; // Handle case when there's no token
  }

  // Checks if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Returns true if token exists and is valid
  }

  // Checks if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000; // Returns true if expired
    } catch (err) {
      console.error('Token decoding failed:', err);
      return true; // Assume expired if there's an error
    }
  }

  // Retrieves the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Saves the user token to localStorage and redirects to home
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Clears user token and profile data from localStorage and reloads the page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/'); // Reload the page to reset application state
  }
}

export default new AuthService();
