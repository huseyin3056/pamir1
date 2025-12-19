import React from 'react';
import HuseyinImg from '../assets/Huseyin1.jpg';

const About = () => {
    return (
        <div className="page about-page">
            <div className="container">
                <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1>Hakkımızda</h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '1rem auto' }}>
                        Endüstri Mühendisi-.Net Developer- ERP Uzmanı ....
                    </p>
                </section>

                <div className="about-grid">
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Misyonumuz</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            Amacımız, müşterilerimize en kaliteli web çözümlerini sunarak işlerini dijital ortama en iyi şekilde taşımalarına yardımcı olmaktır.
                            Her projeye aynı özen ve tutkuyla yaklaşıyoruz.
                        </p>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Teknolojiyi yakından takip ediyor, sürekli kendimizi geliştiriyor ve yenilikçi çözümler üretiyoruz.
                        </p>
                    </div>
                    <div className="card about-logo-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src={HuseyinImg} alt="Hüseyin Özdil" style={{ width: '70%', height: '70%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
