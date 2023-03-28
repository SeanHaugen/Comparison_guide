import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';


function Header({setSelectedRoute}) {

    const [isOpen, setOpen] = useState(false)

    const handleToggleMenu = () => {
        setOpen(!isOpen);
        const navButton = document.querySelector('.nav-button');
        navButton.classList.toggle('active');
      };

    return (
        <div className='hero'>
        <h1 className='title hero-head'>Showdown Displays Product Comparison Guide </h1>
        <button className='nav-button' onClick={handleToggleMenu} aria-controls="primary-navigation" aria-expanded={isOpen} >
            <svg className='hamburger' fill="#FFCC00" viewBox="0 0 100 100" width="50" >
                <rect className='line top' 
                        width="76" 
                        height="8"
                        x="10" y="25" rx="5">
                </rect>
                <rect className='line middle' 
                        width="75" 
                        height="8"
                        x="10" y="45" rx="5">
                </rect>
                <rect className='line bottom' 
                        width="76" 
                        height="8"
                        x="10" y="65" rx="5">
                </rect>
            </svg>
        </button>
        <nav className={`navbar ${isOpen ? 'is-active' : ''}`} role="navigation" aria-label="main navigation" style={{display: isOpen ? 'block' : 'none'}}>
            <div className='navbar-brand '>
                <NavLink to='/About' className="navbar-item">About</NavLink>
                <NavLink to='/RetractorCompare' className="navbar-item" onClick={() => setSelectedRoute('retractors')} >Compare Retractors</NavLink>
                <NavLink to='/TentsCompare' className="navbar-item" onClick={() => setSelectedRoute('tents')}>Compare Tents</NavLink>
                <NavLink to='/tableThrowCompare' className="navbar-item" onClick={() => setSelectedRoute('tableThrows')}>Compare Table Throws</NavLink>
                <NavLink to='/mediaCompare' className="navbar-item" onClick={() => setSelectedRoute('media')}>Compare Media</NavLink>
                
            </div>
        </nav>
        </div>
    )
}

export default Header