import IsoLogo from '../assets/iso.svg'
import DocImg1 from '../assets/docfaqs.webp'
const CarrouselIso = () => {
    return (
        <>
            <section className="section-carrouselIso">
                <div className="container">
                    <div>
                        <p className='section_subtitle'>Clientes Satisfechos</p>
                        <h2 className='section_title px-2'>
                            <span className='section_title-resalt'>Normas ISO</span> en la que puedes certificarte
                        </h2>
                    </div>
                    <div className="container-carrouselImg">
                        <div className='container-imgcarrousel'>
                            <img src={DocImg1} alt="" className='docImg-carrousel' />
                            <div className='container-buttonsNav'>
                                <button className='button-nav left'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                                        <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                                    </svg>
                                </button>
                                <button className='button-nav right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='container-carrousel'>
                            <a href="#" className='button-carrousel btn_active'>
                                <img src={IsoLogo} className='icon-iso' alt="" />
                                <div>
                                    <h4>ISO 9001</h4>
                                    <span>Sistemas de gestión
                                        de Calidad</span>
                                </div>
                            </a>
                            <a href="#" className='button-carrousel'>
                                <img src={IsoLogo} className='icon-iso' alt="" />
                                <div>
                                    <h4>ISO 45001</h4>
                                    <span>Seguridad y Salud en
                                        el Trabajo</span>
                                </div>
                            </a>
                            <a href="#" className='button-carrousel'>
                                <img src={IsoLogo} className='icon-iso' alt="" />
                                <div>
                                    <h4>ISO 14001</h4>
                                    <span>Sistemas de gestión
                                        Ambiental
                                    </span>
                                </div>
                            </a>
                            <a href="#" className='button-carrousel'>
                                <img src={IsoLogo} className='icon-iso' alt="" />
                                <div>
                                    <h4>ISO 37001</h4>
                                    <span>Sistemas de gestión
                                        Antisoborno</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarrouselIso