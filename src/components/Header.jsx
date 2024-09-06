import Logo from '../assets/logo.webp'
import Imagen from '../assets/imagen-hero.webp'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const Header = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0 });

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 40) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`navbar px-2 ${scrolled ? 'navbar_scrolled' : ''}`}>
                <div className='container navbar_container'>
                    <a href="#" title="Ir a inicio">
                        <img src={Logo} className='navbar_logo' alt="R y C Ingenieria Consultiva" />
                    </a>
                    <a href="https://wa.link/2kktk3" rel="noopener noreferrer" className='btn btn_primary' title='WhatsApp de R&C Consultiva Perú' target="_blank">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                        Asesoría Gratuita
                    </a>
                </div>
            </nav>
            <section ref={heroRef} className="hero">
                <div className="hero_overlay">
                    <div className='container container-hero'>
                    <div className='container container-texss'>
                        <div className={`hero_texts hidden ${heroInView ? 'tilt-in-left-1' : 'fade-in'}`}>
                            <p className='hero_subtitle'>¡No esperes más!</p>
                            <h1>Obtén tu Certificación ISO en el <span>Menor Tiempo Posible</span></h1>
                            <p className='hero_paragraph'>Nosotros nos encargamos de todo, no necesitas documentación inicial, involucramiento del personal o muchos recursos financieros.</p>
                        </div>
                        <div ref={heroRef} className={`hero_btns hidden ${heroInView ? 'tilt-in-bottom-1' : 'fade-in'}`}>
                        <a href="https://wa.link/2kktk3" rel="noopener noreferrer" className='btn btn_primary' title='WhatsApp de R&C Consultiva Perú' target="_blank">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                                Contáctanos
                            </a>
                            <a href="#video" title='Ver video' className='btn_video'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                                </svg>
                                Ver video
                            </a>
                        </div>
                    </div>
                    <figure className='hero__figure'>
                        <img className='img' src={Imagen} alt="Imagen que muestra los clientes certificados" />
                    </figure>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header