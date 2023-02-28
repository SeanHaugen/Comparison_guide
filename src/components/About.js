import React from "react";
import compImg from '../images/CompImg.png'

function About() {

    return (
        <>
        <h1 className="title">About The Tool</h1>
        <div className="about content">
            
            <p className="body">Oh boy, this app sounds like something I'd need an instruction manual just to figure out how to use it! You can make comparisons easier by letting you input one main thing and then two other things to compare it to. And right now, it only works for exact item numbers. </p> <br /> <p> But don't worry, if you're like me and have trouble finding anything, you can use the "Find Item" dropdown menu or the search bar to locate the name and corresponding item numbers for the product line you're looking for. Ah, technology, making our lives easier by adding more steps to everything we do!</p>
            {/* <p>This app is designed to streamline the comparison process by taking in one primary input and two secondary comparative inputs. The primary input serves as the basis for comparison, while the secondary inputs are evaluated against it. </p>
            <p>Presently, the comparative guide is functional solely for exact item numbers. The "Find Item" dropdown menu and the search bar functionalities may be employed to locate both the name and corresponding item numbers for the specified product line. </p> */}
            <br />
            <div className=" card img-card">
                <img className="card_img" src={compImg} alt='comparison tutorial' />
            </div>
            
        </div>
        </>
    )
}

export default About;