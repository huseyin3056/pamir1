import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-column">
                    <h3 className="footer-logo">Hüseyin Özdil</h3>
                    <p className="footer-desc">
                        Modern web teknolojileri ile estetik ve performansı birleştiriyoruz.
                    </p>
                </div>
                <div className="footer-column">
                    <h4>Hızlı Linkler</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/about">Hakkımızda</Link></li>
                        <li><Link to="/projects">Projeler</Link></li>
                        <li><Link to="/contact">İletişim</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>İletişim</h4>
                    <ul className="footer-links">
                        <li>info@huseyinozdil.com</li>
                        <li>+90 542 309 11 99</li>
                        <li>İstanbul, Türkiye</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Hüseyin Özdil. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
