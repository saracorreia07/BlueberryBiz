import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import BlueberriesImg from '../../assets/blueberries.png';
import MiniLogoImg from '../../assets/minilogo.png';

export default function Register() {
    return (
        <div className="register-container">
            <img src={MiniLogoImg} alt="Blueberry" style={{position: "absolute", top: "30px", left: "30px"}}/>

            <div className="content">

                <section>
                    <img src={BlueberriesImg} alt="Blueberries" />
                    <h1>Register</h1>
                    <p>Enter the platform and buy high quality blueberries, while supporting your local farmers!</p>

                    <Link className="back-link" to="/register"><FiArrowLeft size={16} color="#3c5488" />I don't have an account yet</Link>
                </section>

                <form>
                    <input placeholder="Company's name" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="City" />
                        <input placeholder="Postal Code" style={{ width: 100 }} />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>

            </div>
        </div>
    );
}