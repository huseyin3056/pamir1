import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
    const slides = [
        {
            id: 1,
            title: "Dijital Geleceği Tasarlıyoruz",
            description: "Yapay zeka destekli çözümlerimizle işinizi bir adım öteye taşıyın.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Keşfet",
            buttonLink: "/projects"
        },
        {
            id: 2,
            title: "Yaratıcı & Modern Arayüzler",
            description: "Kullanıcı deneyimini merkeze alan estetik tasarımlar.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Projelerimiz",
            buttonLink: "/projects"
        },
        {
            id: 3,
            title: "Mobil Dünyada Yerini Al",
            description: "Full responsive, her cihazda kusursuz çalışan web uygulamaları.",
            image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1920&auto=format&fit=crop",
            buttonText: "İletişim",
            buttonLink: "/contact"
        },
        {
            id: 4,
            title: "Güçlü Altyapı",
            description: "React ve modern teknolojilerle inşa edilmiş, yüksek performanslı sistemler.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Teknolojiler",
            buttonLink: "/about"
        },
        {
            id: 5,
            title: "Global Vizyon",
            description: "Sınırları aşan projelerle dünyaya açılın.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Hakkımızda",
            buttonLink: "/about"
        },
        {
            id: 6,
            title: "İnovasyon Odaklı",
            description: "Sürekli gelişen teknoloji dünyasında en yeni trendleri takip ediyoruz.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
            buttonText: "İletişim",
            buttonLink: "/contact"
        },
        {
            id: 7,
            title: "Veri Odaklı Stratejiler",
            description: "Analitik yaklaşımlarla büyümenizi hızlandırıyoruz.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Projeler",
            buttonLink: "/projects"
        },
        {
            id: 8,
            title: "Takım Çalışması",
            description: "Uzman kadromuzla projelerinizi hayata geçiriyoruz.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Ekibimiz",
            buttonLink: "/about"
        },
        {
            id: 9,
            title: "E-Ticaret Çözümleri",
            description: "Satışlarınızı artıracak modern mağaza tasarımları.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Detaylar",
            buttonLink: "/projects"
        },
        {
            id: 10,
            title: "Minimalist Yaklaşım",
            description: "Sade, anlaşılır ve etkileyici.",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1920&auto=format&fit=crop",
            buttonText: "Galeri",
            buttonLink: "/projects"
        }
    ];

    return (
        <div className="page home-page">
            <div className="hero-slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect="fade"
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="hero-swiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="hero-slide"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div className="hero-overlay"></div>
                                <div className="container relative-z">
                                    <div className="hero-content">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.description}</p>
                                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                            <Link to={slide.buttonLink} className="btn">{slide.buttonText}</Link>
                                            <Link to="/contact" className="btn btn-outline">İletişime Geçin</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <section className="container">
                <div className="grid">
                    <div className="card">
                        <h3>İlham Verici Tasarım</h3>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Kullanıcı deneyimini ön planda tutan, modern ve dikkat çekici arayüzler tasarlıyoruz.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Güçlü Teknoloji</h3>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            En son çıkan React.js kütüphaneleri ve modern CSS teknikleri ile geliştirme yapıyoruz.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Hızlı Çözümler</h3>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Performans odaklı kod yapısı ile şimşek hızında yüklenen web siteleri.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container" style={{ marginTop: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Kullandığımız Teknolojiler</h2>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <h3>C#</h3>
                    </div>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <h3>ASP.NET</h3>
                    </div>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <h3>React</h3>
                    </div>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <h3>SQL</h3>
                    </div>
                </div>
            </section>

            <section className="container" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>ERP Çözümlerimiz</h2>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    <div className="card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
                        <h3>SAP</h3>
                    </div>
                    <div className="card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
                        <h3>CANIAS</h3>
                    </div>
                    <div className="card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
                        <h3>Logo Netsis</h3>
                    </div>
                    <div className="card" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
                        <h3>Logo Tiger</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
