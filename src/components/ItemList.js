
import React, { useState } from 'react' 
// import ReactDropdown from 'react-dropdown';



function ItemList({itemList}) {

    const searchItemFromLocalStorage = localStorage.getItem('searchItem') || '';

    const [isOpen, setIsOpen] = useState(false);
    const [searchItem, setSearchItem] = useState(searchItemFromLocalStorage)


    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleSearch = (event) => {
        setSearchItem(event.target.value)
    }

    return (
        <>
        <div className="dropdown is-left is-active">
            <div className="dropdown-trigger dropdown-container">
                <button className="button is-info " aria-haspopup="true" aria-controls='dropdown-menu5' onClick={handleIsOpen}>
                    <div>Open Item list</div>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        
            {isOpen && (
            <div className="dropdown-menu" id="dropdown-menu5" role="menu" >
                <input 
                type="text"
                placeholder="search"
                onChange={handleSearch}
                value={searchItem}
                className="input is-small is-rounded is-info"
                />

                <ul className="dropdown-content ">
                    {itemList.filter(post => {
                        if (searchItem === '') {
                        return post;
                        } else if (post.name.toLowerCase().includes(searchItem.toLowerCase())) {
                        return post;
                        } else {
                            return false
                        }
                    }).map((item, index) => {
                        return(
                            <div key={index} className="dropdown-item">
                                <li className="item">{item.name}</li>  
                                <li className="item"><strong>{item.id}</strong></li>  
                                <hr className='dropdown-divider'/> 
                            </div>
                        )  
                        })}
                </ul>
            </div>
            )}
        </div>
            
    </>
    )
}

export default ItemList;


