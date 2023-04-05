import React from "react";
import compImg from '../images/compGuide.png';

function About() {

    return (
        <>
         <p className='note'><strong><em>This guide is for internal reference only. Please do not share link with customers.</em></strong></p>
         <br />
        <h1 className="title">About The Tool</h1>
        <div className="about content">
            <p className="body">Oh boy, this tool sounds like something I'd need an instruction manual just to figure out how to use it! You can make comparisons easier by letting you input one main thing and then two other things to compare it to. And right now, it only works for exact item numbers. </p> <br /> <p className="body body-two"> But don't worry, if you're like me and have trouble finding anything, you can use the "Find Item" dropdown menu or the search bar to locate the name and corresponding item numbers for the product line you're looking for. Ah, technology, making our lives easier by adding more steps to everything we do!</p>
            <br />
            <div className=" card img-card">
                <img className="card_img" src={compImg} alt='comparison tutorial' />
            </div>
            
        </div>
        </>
    )
}

export default About;