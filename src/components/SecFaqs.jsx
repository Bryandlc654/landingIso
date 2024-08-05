
const SecFaqs = () => {
    return (
        <>
            <section className='px-2 section-gray'>
                <div>
                    <p className='section_subtitle'>Resuelve tus Dudas</p>
                    <h2 className='section_title'>
                        Todo lo que necesitas saber sobre <span className='section_title-resalt'>las normas ISO</span>
                    </h2>
                </div>
                <div className="container container-sectionfaqs">
                    <div className="container_secfaqs">
                        <details>
                            <summary><div>01</div>¿Cómo elegir la norma ISO adecuada para mi empresa?</summary>
                            <p>Nos encargamos de la gestión completa de tu certificación.</p>
                        </details>
                        <details>
                            <summary><div>02</div>¿Cómo implementar las normas ISO en mi empresa?</summary>
                            <p>Obtendrás tu certificado en el menor tiempo posible.</p>
                        </details>
                        <details>
                            <summary><div>03</div>¿Cuanto cuesta implementarlas?</summary>
                            <p>Te brindamos los sellos oficiales de acreditación.</p>
                        </details>
                    </div>
                    <div className="container_secfaqs">
                        <details>
                            <summary><div>04</div>¿Dónde obtener información sobre las normas ISO?</summary>
                            <p>Nos encargamos de la gestión completa de tu certificación.</p>
                        </details>
                        <details>
                            <summary><div>05</div>¿Qué pasa si mi empresa no cumple con los requisitos ISO?</summary>
                            <p>Obtendrás tu certificado en el menor tiempo posible.</p>
                        </details>
                        <details>
                            <summary><div>06</div>¿Cuáles son los beneficios de certificar mi empresa?</summary>
                            <p>Te brindamos los sellos oficiales de acreditación.</p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecFaqs