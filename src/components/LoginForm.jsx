import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './LoginForm.css';

const { REACT_APP_PROJECT_ID } = process.env;

export default function LoginForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userCreds = { 'Project-ID': REACT_APP_PROJECT_ID, 'User-Name': userName, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: userCreds });
            localStorage.setItem('userName', userName);
            localStorage.setItem('userPassword', password);

            window.location.reload();
            setError('');
        }
        catch (error) {
            setError("Incorrect credentials, please try again.")
        }


    }

    return (
        <div className='login-form-container'>
            <form onSubmit={handleSubmit}>
                <h1 className='login-form-title'>Login to chat</h1>
                <div className="login-creds-container">
                    <input className='login-input' type="text" onChange={(event) => setUserName(event.target.value)} value={userName} required placeholder='login' />
                    <input className='password-input' type="password" onChange={(event) => setPassword(event.target.value)} value={password} required placeholder='password' />
                    <button className='login-button' onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </form>
            <h2 className='login-error'>{error}</h2>
        </div>
    )
}
