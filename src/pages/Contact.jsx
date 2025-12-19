import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mesajınız alındı! (Frontend demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page contact-page">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>İletişime Geçin</h1>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <form className="card" onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Ad Soyad</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Adınız..."
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>E-posta</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mesajınız</label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Mesajınızı buraya yazın..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
