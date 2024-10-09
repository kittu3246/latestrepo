// src/Components/RegisterForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ setUserLocation }) => {
    const [username, setUsername] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getUserLocation();
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/register', {
                username,
                latitude,
                longitude
            });
            setUserLocation({ username, latitude, longitude });
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="text" value={latitude} placeholder="Latitude" readOnly />
            <input type="text" value={longitude} placeholder="Longitude" readOnly />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
