import React from 'react'
import { NavLink } from 'react-router-dom'
import ItemList from './ItemList'

function Header({setSelectedRoute, itemList}) {

    return (
        <>
        <h1 className='title'>Showdown Displays Product Comparison Guide</h1>
        <nav className='navbar' role="navigation" aria-label="main navigation">
            <div className='navbar-brand' >
                <NavLink to='/About' className="navbar-item">About</NavLink>
                <NavLink to='/RetractorCompare' className="navbar-item" onClick={() => setSelectedRoute('retractors')} >Compare Retractors</NavLink>
                <NavLink to='/TentsCompare' className="navbar-item" onClick={() => setSelectedRoute('tents')}>Compare Tents</NavLink>
                <NavLink to='/mediaCompare' className="navbar-item">Compare media</NavLink>
                <ItemList className={itemList} itemList={itemList} />
            </div>
        </nav>
        </>
    )
}

export default Header