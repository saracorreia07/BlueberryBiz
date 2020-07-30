import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';

import miniLogoImg from '../../assets/minilogo.png';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={miniLogoImg} alt="Blueberry" />

                <span>Welcome, Batata</span>

                <Link className="button" to="/orders/new">Register a new batch</Link>
                <button type="button">
                    <FiPower size={18} color="#2c114f" />
                </button>
            </header>
        </div>
    );
}