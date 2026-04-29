import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    useEffect(() => {
        // 1. Check if returning from GitHub with tokens in the URL
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');

        if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        setToken(accessToken);
        // Clean the URL
        window.history.replaceState({}, document.title, "/");
        }
    }, []);

    return (
        <div className="App">
        {!token ? <Login /> : <Dashboard token={token} setToken={setToken} />}
        </div>
    );
}

export default App;