import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import blueberriesImg from '../../assets/blueberries.png';
import miniLogoImg from '../../assets/minilogo.png';

export default function Register() {
    return (
        <div className="register-container">
            <img src={miniLogoImg} alt="Blueberry" style={{ position: "absolute", top: "30px", left: "30px" }} />

            <div className="content">

                <section>
                    <h1>Register</h1>
                    <p>Enter the platform and sell your blueberries directly to the consumer!</p>
                    <img src={blueberriesImg} alt="Blueberries" />
                </section>

                <form>
                    <input placeholder="Company's name" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="Postal Code" style={{ width: 100 }} />
                    </div>

                    <button className="button" type="submit">Register</button>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#3c5488" />Homepage</Link>
                </form>

            </div>
        </div>
    );
}