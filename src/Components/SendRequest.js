// src/Components/SendRequest.js
import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SendRequest = ({ userLocation }) => {
    const socket = io('http://localhost:5000');

    useEffect(() => {
        if (userLocation) {
            socket.emit('send_message', userLocation);
        }

        socket.on('receive_message', (data) => {
            console.log('Received message from nearest user:', data);
        });

        return () => {
            socket.disconnect();
        };
    }, [userLocation, socket]);

    return (
        <div>
            <h2>Message Sent to Nearest User</h2>
        </div>
    );
};

export default SendRequest;
