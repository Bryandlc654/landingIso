import DocFaqs from '../assets/docfaqs.webp'
import Qr from '../assets/qr.webp'
import { useInView } from 'react-intersection-observer';

const Faqs = () => {
    const { ref: faqsRef, inView: faqsInView } = useInView({ threshold: 0 });

    return (
        <>
            <section ref={faqsRef} className='faqs px-2'>
                <div className="container faqs_container">
                    <div className={`container_faqs hidden ${faqsInView ? 'tilt-in-left-1' : 'fade-in'}`}>
                        <div>
                            <p className='section_subtitle text-left'>Gestión, Tiempos, Acreditación y Validación</p>
                            <h2 className='section_title text-left'>
                                Lo que necesitas saber sobre tu <span className='section_title-resalt'>Certificación</span> 
                            </h2>
                        </div>
                        <details open className='details__open-default'>
                            <summary><div>01</div>¿Quién se encarga de la gestión de mi certificación?</summary>
                            <p>Nos encargamos de la gestión completa de tu certificación, desde la creación del expediente y elaboración de documentos hasta la entrega de tu certificado.</p>
                        </details>
                        <details open className='details__open-default'>
                            <summary><div>02</div>¿En cuánto tiempo obtendré mi certificado?</summary>
                            <p>Contamos con alianzas estrategicas que te permiten obtener tu certificado en el menor tiempo posible. Nos adecuamos a tus tiempos de presentación.</p>
                        </details>
                        <details open className='details__open-default'>
                            <summary><div>03</div>¿Qué tipo de sellos de acreditación recibiré?</summary>
                            <p>Te brindamos la opción de certificarte internacionalmente y obtener los sellos oficiales del IAS e IAF o nacionalmente con el sello oficial de INACAL.</p>
                        </details>
                        <details open className='details__open-default'>
                            <summary><div>04</div>¿Cómo pueden mis clientes validar mi certificado?</summary>
                            <p>Las certificaciones que te brindamos contienen codigo y QR de verificación, con el que tus cliente podra validar tu certificado.</p>
                        </details>
                        <details className='detail__view-certificates'>
                            <summary>Verifica tu certificado</summary>
                            <div>
                                <a target='_blank' rel='noopener noreferrer' href="https://certifications.siscertifications.com/">Verificación con SIS - IAS e IAF</a>
                                <a target='_blank' rel='noopener noreferrer' href="https://www.icocert.pe/validar_certificado/">Verificación con ICO - INACAL</a>
                            </div>
                        </details>
                    </div>
                    <div className={`container_imgqr hidden ${faqsInView ? 'slide-in-right' : 'fade-in'}`}>
                        <img className='imgdoc' src={DocFaqs} alt="" />
                        <div className='container_qr'><img className='imgqr' src={Qr} alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs