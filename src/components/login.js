import React, { useState } from 'react';

const Login = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        // Replace with your actual Live Render/Railway URL
        window.location.href = 'https://your-backend-api.com/api/v1/auth/github';
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f7f9'
        }}>
            <div style={{ 
                padding: '40px', 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center' 
            }}>
                <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>🛡️ Insighta Labs</h1>
                <p style={{ color: '#7f8c8d', marginBottom: '30px' }}>Secure Access & Intelligence Engine</p>
                
                <button 
                    onClick={handleLogin}
                    disabled={loading}
                    style={{ 
                        padding: '12px 24px', 
                        fontSize: '16px', 
                        fontWeight: 'bold',
                        backgroundColor: '#24292e', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '6px', 
                        cursor: loading ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        transition: 'opacity 0.2s'
                    }}
                >
                    {loading ? 'Connecting...' : 'Sign in with GitHub'}
                </button>
                <p style={{ marginTop: '20px', fontSize: '12px', color: '#bdc3c7' }}>
                    Standard OAuth 2.0 Encryption Enabled
                </p>
            </div>
        </div>
    );
};

export default Login;