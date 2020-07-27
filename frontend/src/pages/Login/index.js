import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';
import blueberryImg from '../../assets/blueberry.png';

export default function Login() {
    return (
        <div className="login-container">

            <img src={logoImg} alt="blueberries" />
            <section className="form">
                <img src={blueberryImg} alt="logo" />

                <form>
                    <h1>Login</h1>

                    <input placeholder="Your ID" />
                    <button type="submit">Enter</button>

                    <a href="/register"><FiLogIn size={16} color="#3c5488" />I don't have an account yet</a>
                </form>

            </section>

        </div>
    );
}