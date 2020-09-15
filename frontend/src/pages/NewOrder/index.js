import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import blueberriesImg from '../../assets/blueberries.png';
import miniLogoImg from '../../assets/minilogo.png';

export default function NewOrder() {
    return (
        <div className="new-order-container">
            <img src={miniLogoImg} alt="Blueberry" style={{ position: "absolute", top: "30px", left: "30px" }} />

            <div className="content">

                <section>
                    <h1>Register a new batch</h1>
                    <p>Showcase the product you have to sell the freshest way you can!</p>
                    <img src={blueberriesImg} alt="Blueberries" />
                </section>

                <form>
                    <input placeholder="Title Description" />
                    <textarea placeholder="Description" />

                    <input placeholder="Value" />

                    <button className="button" type="submit">Register</button>
                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#3c5488" />Homepage</Link>
                </form>

            </div>
        </div>
    );
}