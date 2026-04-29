import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token, setToken }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
        try {
            const res = await axios.get('https://your-backend-api.com/api/v1/auth/profile', {
            headers: {
                'X-API-Version': '1', // The Gatekeeper Header
                'Authorization': `Bearer ${token}`
            }
            });
            setProfile(res.data.data);
        } catch (err) {
            console.error("Auth failed", err);
            handleLogout();
        }
        };
        fetchProfile();
    }, [token]);

    const handleLogout = () => {
        localStorage.clear();
        setToken(null);
    };

    return (
        <div style={{ padding: '20px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2> Insighta Labs Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>

        {profile ? (
            <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px' }}>
            <h3>Welcome, {profile.username}!</h3>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Role:</strong> <span style={{ color: 'green' }}>{profile.role}</span></p>
            <hr />
            <h4>Identity Metadata</h4>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
        ) : <p>Loading Intelligence Profile...</p>}
        </div>
    );
};

export default Dashboard;