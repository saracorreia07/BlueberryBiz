import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import blueberriesImg from '../../assets/blueberries.png';
import miniLogoImg from '../../assets/minilogo.png';

export default function NewOrder() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const companyId = localStorage.getItem('companyId');

    async function handleNewOrder(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {

            await api.post('orders', data, {
                headers: {
                    Authorization: companyId
                }
            });

            history.push('/profile');
        } catch (err) {
            alert('Error registering order. Try again.');
        }
    }

    return (
        <div className="new-order-container">
            <img src={miniLogoImg} alt="Blueberry" style={{ position: "absolute", top: "30px", left: "30px" }} />

            <div className="content">

                <section>
                    <h1>Register a new batch</h1>
                    <p>Showcase the product you have to sell the freshest way you can!</p>
                    <img src={blueberriesImg} alt="Blueberries" />
                </section>

                <form onSubmit={handleNewOrder}>
                    <input
                        placeholder="Title Description"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Value"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Register</button>
                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#3c5488" />Homepage</Link>
                </form>

            </div>
        </div>
    );
}