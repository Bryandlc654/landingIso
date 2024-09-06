import AboutImg from '../assets/aboutimg.webp'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0 });

    return (
        <>
            <section ref={aboutRef} className='about px-2'>
                <div className='container about-container'>
                    <div className={`container-imgAbout hidden ${aboutInView ? 'slide-in-left' : 'fade-in'}`}>
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className={`hidden ${aboutInView ? 'tilt-in-right-1' : 'fade-in'}`}>
                        <div>
                            <p className='section_subtitle text-left'>Con más de 4 años de experiencia</p>
                            <h2 className='section_title text-left'>Somos tu aliado en <span className='section_title-resalt'>Certificación ISO</span>
                            </h2>
                        </div>
                        <div>
                            <p className='about-paragraph'>Somos RYC Consultiva Perú, una empresa con mas de 4 años de experiencia en el mercado peruano. Gracias a nuestras alianzas con diferentes certificadoras, te ofrecemos la mejor alternativa para certificarte en diferentes normas ISO.</p>
                        </div>
                        <div className='cta-contact'>
                            <ul>
                                <li className='contact-number'>
                                    <div className='border-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>
                                    </div>
                                    <div className='contact-phone'>
                                        <span>+51 923 521 297</span>
                                        <span>Celular</span>
                                    </div>
                                </li>
                                <li>
                                    <hr />
                                </li>
                                <li className='container-btnCta'>
                                    <a href="https://wa.link/2kktk3" rel="noopener noreferrer" className='btn btn_primary' title='WhatsApp de R&C Consultiva Perú' target="_blank">
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                                        Contáctanos
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About