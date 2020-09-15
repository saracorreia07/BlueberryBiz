import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

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

            <h1>Registered batches</h1>

            <ul>
                <li><strong>BATCH:</strong>
                    <p>Test batch</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test description</p>

                    <strong>VALUE:</strong>
                    <p>5,00€</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#2c114f"/>
                    </button>
                </li>

                <li><strong>BATCH:</strong>
                    <p>Test batch</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test description</p>

                    <strong>VALUE:</strong>
                    <p>5,00€</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#2c114f"/>
                    </button>
                </li>

                <li><strong>BATCH:</strong>
                    <p>Test batch</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test description</p>

                    <strong>VALUE:</strong>
                    <p>5,00€</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#2c114f"/>
                    </button>
                </li>

                <li><strong>BATCH:</strong>
                    <p>Test batch</p>

                    <strong>DESCRIPTION:</strong>
                    <p>Test description</p>

                    <strong>VALUE:</strong>
                    <p>5,00€</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#2c114f"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}