import React from 'react';

const Projects = () => {
    const projects = [
        { id: 1, title: 'E-Ticaret Platformu', desc: 'Tam kapsamlı, ölçeklenebilir bir alışveriş deneyimi.' },
        { id: 2, title: 'Kurumsal Web Sitesi', desc: 'Şirketinizin prestijini yansıtan profesyonel tanıtım sitesi.' },
        { id: 3, title: 'Mobil Uygulama Paneli', desc: 'Kullanıcı dostu yönetim paneli ve analiz araçları.' },
        { id: 4, title: 'Kişisel Blog', desc: 'Düşüncelerinizi dünyayla paylaşmanız için şık bir platform.' },
        { id: 5, title: 'Rezervasyon Sistemi', desc: 'Kolay kullanımlı online randevu ve rezervasyon yönetimi.' },
        { id: 6, title: 'Portfolyo Sitesi', desc: 'Yeteneklerinizi sergileyebileceğiniz creative bir alan.' },
    ];

    return (
        <div className="page projects-page">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Projelerimiz</h1>
                <div className="grid">
                    {projects.map((project) => (
                        <div key={project.id} className="card">
                            <div style={{ height: '150px', backgroundColor: 'var(--dark)', marginBottom: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                Proje Görseli
                            </div>
                            <h3>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>{project.desc}</p>
                            <button className="btn" style={{ marginTop: '1rem', width: '100%', fontSize: '0.9rem' }}>Detayları Gör</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
