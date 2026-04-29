import React from 'react';

const Login = () => {
    const handleLogin = () => {
        // Points to your LIVE Backend URL
        window.location.href = 'https://your-backend-api.com/api/v1/auth/github';
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Insighta Labs Portal</h1>
        <p>Secure Access & Intelligence Engine</p>
        <button 
            onClick={handleLogin}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
            Sign in with GitHub
        </button>
        </div>
    );
};

export default Login;