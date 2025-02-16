import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { login } from '../../features/user/userSlice'
import api from '../../api'



const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();
        api.post('/query/Login', {
            username: username,
            password: password
        })
            .then(function (response) {
                dispatch(login(response.data.data));
                navigate("/AssetInfo");
            })
            .catch(function (error) {
                console.log("HELLO FORM ERROR")
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label>username:</label>
                    <input
                        type="uUsername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
