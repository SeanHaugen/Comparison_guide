import React, {useState} from 'react';
import footerImg from '../images/sd-logo.png';
import retractorIMG1 from '../images/261340_0.jpg';
import retractorIMG2 from '../images/210240_0.jpg';
import retractorIMG4 from '../images/261118_0.jpg';
import tableThrowIMG1 from '../images/114121_0.jpg';
import retractorIMG3 from '../images/261270_0.jpg';
import tentIMG1 from '../images/240619_0.jpeg';
import bannerIMG from '../images/14_0.jpg';
import retractorIMG5 from '../images/262138_0.jpg'


function Footer() {

    const [isOpen, setIsOpen] = useState(true)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <footer className="footer">
            <div className={`footer-body ${isOpen ? 'is-active' : ''}`} role="navigation" aria-label="main navigation" style={{display: isOpen ? 'block' : 'none'}}>
                <button className='nav-button' onClick={handleIsOpen} aria-controls="primary-navigation" aria-expanded={isOpen}>Close Carousel</button>
                <div className="image">
                <div className="image__group">
                    <img src={retractorIMG1} alt='retractor'/>
                    <img src={retractorIMG2} alt='mini retractor'/>
                    <img src={tableThrowIMG1} alt='table throw'/>
                    <img src={retractorIMG3} alt='retractable banner'/>
                </div>

                <div aria-hidden="true" className="image__group">
                    <img src={tentIMG1} alt='dye sublimated tent'/>
                    <img src={retractorIMG4} alt='retractable banner'/>
                    <img src={bannerIMG} alt='banner'/>
                    <img src={retractorIMG5} alt='jumbo wide retractor'/>
                </div>
                </div>

            </div>
            
            <div className="content has-centered-text is-small">
                

                <img src={footerImg} alt='logo footer' />
                <div className='copy-write'>
                    <p>2023 Showdown Displays</p>
                </div>
                <p>Source code can be found on <a href="https://github.com/SeanHaugen/Comparison_guide">GitHub</a> and hosted on <a href="https://app.netlify.com/sites/sd-comparison-guide/overview">Netlify</a></p>
            </div>



        </footer>
    )
}

export default Footer;