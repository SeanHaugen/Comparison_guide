import React from 'react';
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

    return (
        <footer className="footer">
            <div className='footer-body'>
                <div class="image">
                <div class="image__group">
                    <img src={retractorIMG1} alt='retractor'/>
                    <img src={retractorIMG2} alt='mini retractor'/>
                    <img src={tableThrowIMG1} alt='table throw'/>
                    <img src={retractorIMG3} alt='retractable banner'/>
                </div>

                <div aria-hidden="true" class="image__group">
                    <img src={tentIMG1} alt='dye sublimated tent'/>
                    <img src={retractorIMG4} alt='retractable banner'/>
                    <img src={bannerIMG} alt='banner'/>
                    <img src={retractorIMG5} alt='jumbo wide retractor'/>
                </div>
                </div>
                {/* <div class="image image--reverse">
                <div class="image__group">
                    <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1518378188025-22bd89516ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1571772805064-207c8435df79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1602067340370-bdcebe8d1930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1508948956644-0017e845d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                </div>

                <div aria-hidden="true" class="image__group">
                    <img src='https://images.unsplash.com/photo-1546421845-6471bdcf3edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1518378188025-22bd89516ee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1571772805064-207c8435df79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1602067340370-bdcebe8d1930?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                    <img src='https://images.unsplash.com/photo-1508948956644-0017e845d797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDUyMTM&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
                </div>
                </div> */}
            </div>
            
            <div className="content has-centered-text is-small">
                

                <img src={footerImg} alt='logo footer' />
                <div className='copy-write'>
                    <p>2023 Showdown Displays</p>
                </div>
                <p>Created by Sean Haugen. Source code can be found on <a href="https://github.com/SeanHaugen/Comparison_guide">GitHub</a> and hosted on <a href="https://app.netlify.com/sites/sd-comparison-guide/overview">Netlify</a></p>
            </div>



        </footer>
    )
}

export default Footer;