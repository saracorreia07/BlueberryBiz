import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import miniLogoImg from '../../assets/minilogo.png';

export default function Profile() {

    const [orders, setOrders] = useState([]);

    const companyId = localStorage.getItem('companyId');
    const companyName = localStorage.getItem('companyName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: companyId //WATCH HERE
            }
        }).then(response => {
            setOrders(response.data);
        });
    }, [companyId]);

    return (
        <div className="profile-container">
            <header>
                <img src={miniLogoImg} alt="Blueberry" />

                <span>Welcome, {companyName}</span>

                <Link className="button" to="/orders/new">Register a new batch</Link>
                <button type="button">
                    <FiPower size={18} color="#2c114f" />
                </button>
            </header>

            <h1>Registered batches</h1>

            <ul>
                {/* <li >
                    <strong>BATCH:</strong>
                    <p>x</p>

                    <strong>DESCRIPTION:</strong>
                    <p>y</p>

                    <strong>VALUE:</strong>
                    <p>m</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#2c114f" />
                    </button>
                </li> */}
                 
                {orders.map(orders => (
                    <li key={orders.id}>
                        <strong>BATCH:</strong>
                        <p>{orders.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{orders.description}</p>

                        <strong>VALUE:</strong>
                        <p>{orders.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#2c114f" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}