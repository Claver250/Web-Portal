import React, { useEffect, useState } from 'react';
import api from '../app'; // Use our custom API service

const Dashboard = ({ setToken }) => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // The interceptor handles headers and tokens automatically
                const res = await api.get('/auth/profile');
                setProfile(res.data.data);
            } catch (err) {
                console.error("Auth failed", err);
                setError("Session expired or server unreachable.");
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setToken(null);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                <h2 style={{ margin: 0 }}>🛡️ Insighta Labs Dashboard</h2>
                <button onClick={handleLogout} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>
                    Logout
                </button>
            </nav>

            {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

            {profile ? (
                <div style={{ marginTop: '30px', animation: 'fadeIn 0.5s' }}>
                    <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', padding: '25px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={profile.avatar_url} alt="Profile" style={{ width: '60px', borderRadius: '50%' }} />
                            <div>
                                <h3 style={{ margin: 0 }}>Welcome back, {profile.username}!</h3>
                                <p style={{ margin: '5px 0', color: '#666' }}>{profile.email}</p>
                            </div>
                        </div>
                        
                        <div style={{ marginTop: '20px' }}>
                            <span style={{ 
                                backgroundColor: profile.role === 'admin' ? '#ffd700' : '#e1f5fe', 
                                color: profile.role === 'admin' ? '#000' : '#0288d1', 
                                padding: '5px 12px', 
                                borderRadius: '20px', 
                                fontSize: '0.85rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase'
                            }}>
                                {profile.role} Access
                            </span>
                        </div>

                        <hr style={{ margin: '25px 0', border: '0', borderTop: '1px solid #eee' }} />
                        
                        <h4>Intelligence Metadata (JSON)</h4>
                        <pre style={{ backgroundColor: '#2d2d2d', color: '#ccc', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
                            {JSON.stringify(profile, null, 2)}
                        </pre>
                    </div>
                </div>
            ) : !error && (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <p>Loading Intelligence Profile...</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;