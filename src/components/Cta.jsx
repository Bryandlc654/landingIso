
const Cta = () => {
    return (
        <>
            <section className="promo">
                <div className="promo__content container">
                    <div className="promo__group-call">
                        <div className="promo__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="icon"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                                />
                            </svg>
                        </div>
                        <p className="promo__number">
                            <span className="text">Para más información:</span>
                            <span className="number"> +51 921 789 745</span>
                        </p>
                    </div>
                    <hr className="promo-separator" />
                    <p className="promo__paragraph paragraph">
                        Contáctanos ahora y obtén una asesoría ISO gratuita
                    </p>
                    <hr className="promo-separator" />
                    <a
                        className="btn btn_primary"
                        href="https://wa.link/oiio1u"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar ahora
                    </a>
                </div>
            </section>
        </>
    )
}

export default Cta