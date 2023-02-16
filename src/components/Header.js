import React from 'react'
import { NavLink } from 'react-router-dom'


function Header({setSelectedRoute, itemList}) {

    return (
        <div className='hero'>
        
        <h1 className='title hero-head'>Showdown Displays Product Comparison Guide</h1>
        <nav className='navbar' role="navigation" aria-label="main navigation">
            <div className='navbar-brand' >
                <NavLink to='/About' className="navbar-item">About</NavLink>
                <NavLink to='/RetractorCompare' className="navbar-item" onClick={() => setSelectedRoute('retractors')} >Compare Retractors</NavLink>
                <NavLink to='/TentsCompare' className="navbar-item" onClick={() => setSelectedRoute('tents')}>Compare Tents</NavLink>
                <NavLink to='/mediaCompare' className="navbar-item">Compare Media</NavLink>
                
            </div>
        </nav>
        </div>
    )
}

export default Header