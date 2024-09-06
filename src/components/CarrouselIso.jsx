import  { useState, useEffect } from 'react';
import IsoLogo from '../assets/iso.svg';
import Iso9001 from '../assets/ISO9001.webp';
import Iso14001 from '../assets/ISO14001.webp';
import Iso37001 from '../assets/ISO37001.webp';
import Iso45001 from '../assets/ISO45001.webp';
import { useInView } from 'react-intersection-observer';

const isoImages = [Iso9001, Iso45001, Iso14001, Iso37001];
const isoDetails = [
    { title: "ISO 9001", subtitle: "Sistemas de gestión de Calidad" },
    { title: "ISO 45001", subtitle: "Seguridad y Salud en el Trabajo" },
    { title: "ISO 14001", subtitle: "Sistemas de gestión Ambiental" },
    { title: "ISO 37001", subtitle: "Sistemas de gestión Antisoborno" }
];

const CarrouselIso = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? isoImages.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === isoImages.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === isoImages.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    const { ref: isoRef, inView: isoInView } = useInView({ threshold: 0 });

    const handleIsoClick = (e, index) => {
        e.preventDefault();
        setActiveIndex(index);
        isoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section ref={isoRef} className="section-carrouselIso">
                <div className="container">
                    <div className={`hidden ${isoInView ? 'scale-in-top' : 'fade-in'}`}>
                        <p className='section_subtitle text-dark'>Clientes Satisfechos</p>
                        <h2 className='section_title px-2 text-dark'>
                            <span className='section_title-resalt'>Normas ISO</span> en la que puedes certificarte
                        </h2>
                    </div>
                    <div className="container-carrouselImg">
                        <div className={`container-imgcarrousel hidden ${isoInView ? 'slide-in-left' : 'fade-in'}`}>
                            <img src={isoImages[activeIndex]} alt="" className='docImg-carrousel' />
                            <button className="certificates__move certificates__move--left" onClick={handlePrevClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/></svg>
                            </button>
                            <button className="certificates__move certificates__move--right" onClick={handleNextClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/></svg>
                            </button>
                        </div>
                        <div className={`container-carrousel hidden ${isoInView ? 'slide-in-right' : 'fade-in'}`}>
                            {isoDetails.map((iso, index) => (
                                <a href="" key={index} onClick={(e) => handleIsoClick(e, index)} className={`button-carrousel ${index === activeIndex ? 'btn_active btn_primaryIso' : ''}`}>
                                    <img src={IsoLogo} className='icon-iso' alt={iso.title} />
                                    <div>
                                        <h4>{iso.title}</h4>
                                        <span>{iso.subtitle}</span>
                                    </div>
                                </a>
                            ))}
                            <a className='other-normas' href="#normas">Otras normas ISO que certificamos</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CarrouselIso;