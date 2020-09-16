import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';
import blueberryImg from '../../assets/blueberry.png';

export default function Login() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('companyId', id);
            localStorage.setItem('companyName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Login failed. Try again.');
        }
    }

    return (
        <div className="login-container">

            <img src={logoImg} alt="blueberries" />
            <section className="form">
                <img src={blueberryImg} alt="logo" />

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input
                        placeholder="Your ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Enter</button>

                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#3c5488" />I don't have an account yet</Link>
                </form>

            </section>

        </div>
    );
}