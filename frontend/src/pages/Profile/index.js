import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import miniLogoImg from '../../assets/minilogo.png';

export default function Profile() {

    const [orders, setOrders] = useState([]);

    const companyId = localStorage.getItem('companyId');
    const companyName = localStorage.getItem('companyName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: companyId
            }
        }).then(response => {
            setOrders(response.data);
        });
    }, [companyId]);

    async function handleDeleteOrder(id) {
        try {
            await api.delete(`orders/${id}`, {
                headers: {
                    Authorization: companyId
                }
            });

            setOrders(orders.filter(order => order.id !== id))
        } catch (err) {
            alert('Error deleting order. Try again.');
        }
    }

    function handleLogout() {

        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={miniLogoImg} alt="Blueberry" />

                <span>Welcome, {companyName} </span>

                <Link className="button" to="/orders/new">Register a new batch</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#2c114f" />
                </button>
            </header>

            <h1>Registered batches</h1>

            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <strong>BATCH:</strong>
                        <p>{order.title}</p>

                        <strong>DESCRIPTION:</strong>
                        <p>{order.description}</p>

                        <strong>VALUE:</strong>
                        <p>{Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(order.value)}</p>

                        <button onClick={() => handleDeleteOrder(order.id)} type="button">
                            <FiTrash2 size={20} color="#2c114f" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}