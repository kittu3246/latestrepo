// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import SendRequest from './Components/SendRequest';

const App = () => {
    const [userLocation, setUserLocation] = useState(null); // State to store user location after registration

    return (
        <Router>
            <Routes>
                {/* Route for the main app */}
                <Route path="/" element={
                    <div>
                        <h1>Nearest User Messaging App</h1>
                        <RegisterForm setUserLocation={setUserLocation} />
                        {userLocation ? (
                            <SendRequest userLocation={userLocation} />
                        ) : (
                            <p>Please register to start messaging the nearest users.</p>
                        )}
                    </div>
                } />
                
                {/* Additional routes can be added here */}
                {/* <Route path="/another-route" element={<AnotherComponent />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
