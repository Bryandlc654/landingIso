import { useInView } from 'react-intersection-observer';

const SecFaqs = () => {
    const { ref: secFaqsRef, inView: secFaqsInView } = useInView({ threshold: 0 });

    return (
        <>
            <section ref={secFaqsRef} className='px-2 section-gray'>
                <div className={`hidden ${secFaqsInView ? 'scale-in-top' : 'fade-in'}`}>
                    <p className='section_subtitle'>Resuelve tus Dudas</p>
                    <h2 className='section_title'>
                        Todo lo que necesitas saber sobre <span className='section_title-resalt'>las normas ISO</span>
                    </h2>
                </div>
                <div className="container container-sectionfaqs">
                    <div className="container_secfaqs">
                        <details name='faq' className={`hidden ${secFaqsInView ? 'slide-in-right' : 'fade-in'}`}>
                            <summary><div>01</div>¿Cuál es la vigencia de mi certificación ISO?</summary>
                            <p>Tu certificación ISO tiene una vigencia de 3 años. Sin embargo, es necesario realizar una revalidación anual, durante la cual debes presentar documentación actualizada. Esta revalidación tiene un costo del 70% del monto inicial de la certificación.
                            </p>
                        </details>
                        <details name='faq' className={`hidden ${secFaqsInView ? 'slide-in-right-two' : 'fade-in'}`}>
                            <summary><div>02</div>¿Es lo mismo una certificación ISO que una homologación de proveedores?</summary>
                            <p>No, no son equivalentes. La certificación ISO se refiere a la evaluación conforme a una norma específica, como calidad, medio ambiente, seguridad y salud en el trabajo, entre otras. En cambio, la homologación de proveedores implica evaluar distintos aspectos que pueden abarcar componentes específicos de una o más normas ISO.</p>
                        </details>
                        <details name='faq' className={`hidden ${secFaqsInView ? 'slide-in-right-three' : 'fade-in'}`}>
                            <summary><div>03</div>¿La certificación ISO me ayuda a participar en licitaciones?</summary>
                            <p>Sí, contar con certificaciones ISO puede mejorar tu posición en las licitaciones públicas y privadas, aumentando tus posibilidades de éxito. Las certificaciones más solicitadas en procesos de licitación suelen ser ISO 9001 (gestión de calidad), ISO 45001 (seguridad y salud en el trabajo), ISO 14001 (gestión ambiental) e ISO 37001 (sistema de gestión anti-soborno).</p>
                        </details>
                    </div>
                    <div className="container_secfaqs">
                        <details name='faq' className={`hidden ${secFaqsInView ? 'slide-in-right-four' : 'fade-in'}`}>
                            <summary><div>04</div>¿Con qué certificación es recomendable comenzar?</summary>
                            <p>La elección depende de los objetivos y procesos específicos de tu empresa. Sin embargo, las certificaciones más comunes y recomendadas para iniciar son la ISO 9001 (gestión de calidad) y la ISO 45001 (seguridad y salud en el trabajo), ya que abordan áreas fundamentales para la mayoría de las organizaciones.</p>
                        </details>
                        <details name='faq' className={`hidden ${secFaqsInView ? 'slide-in-right-five' : 'fade-in'}`}>
                            <summary><div>05</div>¿Pueden las pequeñas empresas obtener la certificación ISO?</summary>
                            <p>Sí, las pequeñas y medianas empresas también pueden obtener certificación ISO. Los estándares están diseñados para ser aplicables a organizaciones de todos los tamaños, aunque la forma de implementación puede ajustarse según el tamaño y la complejidad de la empresa.</p>
                        </details>
                        <details name='faq' className={`hidden ${secFaqsInView ? 'slide-in-right-six' : 'fade-in'}`}>
                            <summary><div>06</div>¿Es obligatoria la certificación ISO?</summary>
                            <p>No es obligatoria en general, pero puede ser requerida por clientes, socios comerciales o regulaciones específicas en algunos sectores. A menudo, las empresas buscan la certificación para cumplir con las expectativas del mercado o para mejorar sus procesos internos.</p>
                        </details>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SecFaqs