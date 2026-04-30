import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
    // Check if we already have a session
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    useEffect(() => {
        // Catch tokens from URL (sent by backend after GitHub login)
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (accessToken && refreshToken) {
            // 1. Persist tokens
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);
            
            // 2. Update state to show Dashboard
            setToken(accessToken);

            // 3. Clean the URL (Zero-Footprint Security)
            // This removes the tokens from the browser address bar immediately
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <div className="App">
            {!token ? (
                <Login />
            ) : (
                <Dashboard setToken={setToken} />
            )}
        </div>
    );
}

export default App;