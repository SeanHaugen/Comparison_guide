import React from 'react';
import footerImg from '../images/sd-logo.png'

function Footer() {

    return (
        <footer className="footer">
            <div className="content has-centered-text is-small">
                <p>Created by Sean Haugen. Source code can be found on <a href="https://github.com/SeanHaugen/Comparison_guide">GitHub</a> and hosted on <a href="https://app.netlify.com/sites/sd-comparison-guide/overview">Netlify</a></p>
                <div className='copy-write'>
                    <p>2023 Showdown Displays</p>
                </div>
                
                <img src={footerImg} alt='logo footer' />
            </div>
        </footer>
    )
}

export default Footer;