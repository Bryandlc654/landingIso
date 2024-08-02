import Logo1 from '../assets/empresa-1.webp'
import Logo2 from '../assets/empresa-2.webp'
import Logo3 from '../assets/empresa-3.webp'
import Logo4 from '../assets/empresa-4.webp'
import Logo5 from '../assets/empresa-5.webp'
import Logo6 from '../assets/empresa-6.webp'
import Globe from '../assets/globe.png'
const Carrousel = () => {
    return (
        <>
            <div className='section__carrousel'>
                <img src={Globe} alt="" className='globe_carrousel'/>
                <div>
                    <p className='section_subtitle'>Te garantizamos</p>
                    <h2 className='section_title px-2'>
                        Acreditación <span className='section_title-resalt'>INTERNACIONAL</span> o <span className='section_title-resalt'>NACIONAL</span>
                    </h2>
                </div>
                <div className="scroll">
                    <div>
                        <img className="carrousel_logo" src={Logo1} alt="" />
                        <img className="carrousel_logo" src={Logo2} alt="" />
                        <img className="carrousel_logo" src={Logo3} alt="" />
                        <img className="carrousel_logo" src={Logo4} alt="" />
                        <img className="carrousel_logo" src={Logo5} alt="" />
                        <img className="carrousel_logo" src={Logo6} alt="" />
                    </div>
                    <div>
                        <img className="carrousel_logo" src={Logo1} alt="" />
                        <img className="carrousel_logo" src={Logo2} alt="" />
                        <img className="carrousel_logo" src={Logo3} alt="" />
                        <img className="carrousel_logo" src={Logo4} alt="" />
                        <img className="carrousel_logo" src={Logo5} alt="" />
                        <img className="carrousel_logo" src={Logo6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrousel