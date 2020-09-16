import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import blueberriesImg from '../../assets/blueberries.png';
import miniLogoImg from '../../assets/minilogo.png';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            postalCode
        };

        try {
            const response = await api.post('companies', data);

            alert(`Login ID: ${response.data.id}`);
            history.push('/');
            
        } catch (err) {
            alert('Login failed. Try again');
        }
    }

    return (
        <div className="register-container">
            <img src={miniLogoImg} alt="Blueberry" style={{ position: "absolute", top: "30px", left: "30px" }} />

            <div className="content">

                <section>
                    <h1>Register</h1>
                    <p>Enter the platform and sell your blueberries directly to the consumer!</p>
                    <img src={blueberriesImg} alt="Blueberries" />
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Company's name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="Postal Code"
                            style={{ width: 100 }}
                            value={postalCode}
                            onChange={e => setPostalCode(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#3c5488" />Homepage</Link>
                </form>

            </div>
        </div>
    );
}