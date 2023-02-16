
import React, { useState } from 'react' 

function ItemList({itemList}) {

    //controls state for the dropdown list of item numbers
    const [isOpen, setIsOpen] = useState(false);
    //state for allowing the user to search for the specific item from the dropdown menu
    const searchItemFromLocalStorage = localStorage.getItem('searchItem') || '';
    const [searchItem, setSearchItem] = useState(searchItemFromLocalStorage)

    //event handler for opening and closing the dropdown menu
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    //event handler for entering text into the inputs and assigning the value to search item with setSearchItem
    const handleSearch = (event) => {
        setSearchItem(event.target.value)
    }

    return (
        <>
        <div className="dropdown is-active">
            <div className="dropdown-trigger dropdown-container">
                <button className="button is-info " aria-haspopup="true" aria-controls='dropdown-menu5' onClick={handleIsOpen}>
                    <div>Open Item list</div>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            {/* The following is displayed when the dropdown is open */}
            {isOpen && (
            <div className="dropdown-menu" id="dropdown-menu5" role="menu" >
                <input 
                type="text"
                placeholder="search"
                onChange={handleSearch}
                value={searchItem}
                className="input is-small is-rounded is-info"
                />
                {/* allows the user to filter the dropdown items with the searchbar as well as mapping the dropdown items */}
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


