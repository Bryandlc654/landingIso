import DocFaqs from '../assets/docfaqs.webp'
import Qr from '../assets/qr.webp'
const Faqs = () => {
    return (
        <>
            <section className='px-2'>
                <div className="container faqs_container">
                    <div className="container_faqs">
                        <div>
                            <p className='section_subtitle text-left'>Gestión, Tiempos, Acreditación y Validación</p>
                            <h2 className='section_title text-left'>
                                Lo que necesitas saber sobre tu <span className='section_title-resalt'>Certificación</span> 
                            </h2>
                        </div>
                        <details>
                            <summary><div>01</div>¿Quién se encarga de la gestión de mi certificación?</summary>
                            <p>Nos encargamos de la gestión completa de tu certificación.</p>
                        </details>
                        <details>
                            <summary><div>02</div>¿En cuánto tiempo obtendré mi certificado?</summary>
                            <p>Obtendrás tu certificado en el menor tiempo posible.</p>
                        </details>
                        <details>
                            <summary><div>03</div>¿Qué tipo de sellos de acreditación recibiré?</summary>
                            <p>Te brindamos los sellos oficiales de acreditación.</p>
                        </details>
                        <details>
                            <summary><div>04</div>¿Cómo pueden mis clientes validar mi certificado?</summary>
                            <p>Tus clientes podrán validar tu Certificado con un QR. Nos encargamos de la gestión completa de tu certificación.</p>
                        </details>
                    </div>
                    <div className="container_imgqr">
                        <img className='imgdoc' src={DocFaqs} alt="" />
                        <div className='container_qr'><img className='imgqr' src={Qr} alt="" /></div>
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Faqs