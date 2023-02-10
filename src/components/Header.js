import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <>
            <h1 className='title'>Showdown Displays Product Comparison guide</h1>
        <nav className='navbar' role="navigation" aria-label="main navigation">
            <div className='navbar-brand' >
                <NavLink to='/About' className="navbar-item">About</NavLink>
                <NavLink to='/RetractorCompare' className="navbar-item" >Compare Retractors</NavLink>
                <NavLink to='/TentsCompare' className="navbar-item">Compare Tents</NavLink>
            </div>
        </nav>
        </>
    )
}

export default Header