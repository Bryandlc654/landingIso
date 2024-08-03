import PlaneImg from '../assets/plane.svg'
const Procesess = () => {
    return (
        <>
            <section className='section-processes'>
                <p className='section_subtitle px-2'>Mejora la calidad, eficiencia y seguridad de tu empresa</p>
                <h2 className='section_title'>¿Por que certificarte en una  <span className='section_title-resalt'>norma ISO?</span></h2>
                <div className="processes">
                    <div className="processes__group">
                        <div className="processes__background">
                            <img
                                className="img"
                                src={PlaneImg}
                                alt=""
                                loading="lazy"
                                aria-hidden="true"
                                role="presentation"
                            />
                        </div>
                        <div className="processes__group-content container">
                            <article className="process">
                                <p className="process__number">01</p>
                                <p className="process__title">
                                    <strong>Evaluación Inicial</strong>
                                </p>
                                <p className="process__paragraph paragraph">
                                    Analizamos tus necesidades y establecemos un plan personalizado de
                                    asesorías
                                </p>
                            </article>
                            <article className="process">
                                <p className="process__number">02</p>
                                <p className="process__title">
                                    <strong>Desarrollo y Entregas</strong>
                                </p>
                                <p className="process__paragraph paragraph">
                                    Trabajamos en entregas parciales, brindando informes de progreso
                                </p>
                            </article>
                            <article className="process">
                                <p className="process__number">03</p>
                                <p className="process__title">
                                    <strong>Revisión y Finalización</strong>
                                </p>
                                <p className="process__paragraph paragraph">
                                    Realizamos revisiones detalladas y preparamos tu presentación final
                                </p>
                            </article>
                        </div>
                        <div className='processes-btn'>
                            <a href="#" className='btn btn_primary '>Contáctanos</a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Procesess