import  BannerVideo from '../assets/Spot.mp4';
import  BannerImg from '../assets/poster-video.webp';

const Banner = () => {
    return (
        <>
            <section className="section-banner">
                <div className="container">
                    <div className="banner">
                        <p className='section_subtitle text-dark'>No esperes más</p>
                        <h2 className='section_title text-dark'>Impulsa tu crecimiento con una <span className='section_title-resalt'>Certificación ISO</span></h2>
                        <a href="#" className='btn btn_primary'>Asesoría gratuita</a>
                    </div>
                    <div className="banner-video">
                        <video id="video-html" className="video-player" poster={BannerImg} controls preload="metadata">
                            <source src={BannerVideo}  />
                        </video>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner