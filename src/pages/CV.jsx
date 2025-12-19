import React from 'react';

const CV = () => {
    return (
        <div className="page cv-page">
            <div className="container">
                <header className="cv-header">
                    <h1>Özgeçmiş</h1>
                    <p className="lead">Deneyim, Eğitim ve Yetkinlikler</p>
                </header>
                <br></br>
                <div className="cv-content">
                    <section className="cv-section" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Deneyim</h2>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="card">
                                <h3>Kıdemli Frontend Geliştirici</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2023 - Günümüz</div>
                                <p>Modern web teknolojileri kullanarak ölçeklenebilir arayüzler geliştirme.</p>
                            </div>
                            <div className="card">
                                <h3>Web Tasarım Uzmanı</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2021 - 2023</div>
                                <p>Kullanıcı dostu ve estetik web tasarımları oluşturma.</p>
                            </div>
                            <div className="card">
                                <h3>Yazılım Geliştirici</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2019 - 2021</div>
                                <p>Full-stack projelerde görev alma.</p>
                            </div>
                            <div className="card">
                                <h3>Junior Geliştirici</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2018 - 2019</div>
                                <p>Frontend teknolojilerini öğrenme ve uygulama.</p>
                            </div>
                            <div className="card">
                                <h3>Stajyer Mühendis</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2017 - 2018</div>
                                <p>Yazılım geliştirme süreçlerine aşinalık kazanma.</p>
                            </div>
                            <div className="card">
                                <h3>Freelance Geliştirici</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2016 - 2017</div>
                                <p>Çeşitli müşteriler için web siteleri hazırlama.</p>
                            </div>
                            <div className="card">
                                <h3>Teknik Destek Uzmanı</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2015 - 2016</div>
                                <p>Donanım ve yazılım sorunlarını çözme.</p>
                            </div>
                            <div className="card">
                                <h3>IT Asistanı</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>2014 - 2015</div>
                                <p>Bilgi işlem departmanına destek sağlama.</p>
                            </div>
                        </div>
                    </section>

                    <section className="cv-section" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Eğitim</h2>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="card">
                                <h3>Endüstri Mühendisliği</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>1988 - 1993</div>
                                <p>Lisans Derecesi</p>
                            </div>
                            <div className="card">
                                <h3>Yüksek Lisans (MBA)</h3>
                                <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>1994 - 1996</div>
                                <p>İşletme Yönetimi</p>
                            </div>
                        </div>
                    </section>

                    <section className="cv-section">
                        <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Yetkinlikler</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'UI/UX Design', 'SQL', 'C#'].map(skill => (
                                <span key={skill} className="badge" style={{
                                    background: 'var(--primary)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CV;
