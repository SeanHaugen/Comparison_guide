
import React, { useState, useEffect, useRef } from 'react' 

function ItemList({filteredItems,}) {

  //controls state for the dropdown list of item numbers
  const [isOpen, setIsOpen] = useState(false);
  //state for allowing the user to search for the specific item from the dropdown menu
  const searchItemFromLocalStorage = localStorage.getItem('searchItem') || '';
  const [searchItem, setSearchItem] = useState(searchItemFromLocalStorage)

  // Use a ref to store a reference to the dropdown menu element
  const dropdownRef = useRef(null);

  // Close the dropdown if the user clicks outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }
  //handles being able to click elsewhere on the page to close the dropdown menu.
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

    //event handler for opening and closing the dropdown menu
    // const handleIsOpen = () => {
    //     setIsOpen(!isOpen)
    // }
    //event handler for entering text into the inputs and assigning the value to search item with setSearchItem
    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        setSearchItem(searchQuery)
        setIsOpen(true)
    }

    //Handles the arrow for dropdown menu, could probably make this its own component
    // const handleArrowUp = () => {
    //     if (isOpen === false) {
    //       return (                    
    //         <span className="icon is-small">
    //           <i className="fas fa-angle-down" aria-hidden="true"></i>
    //         </span>
    //       );
    //     } 
    // }
    // const handleArrowDown = () => {
    //     if (isOpen === true) {
    //     return (
    //         <span className="icon is-small">
    //           <i className="fas fa-angle-up" aria-hidden="true"></i>
    //         </span>
    //       );
    //     }
    //   }

    return (
        <>
        <div className="dropdown is-active search-bar-container" ref={dropdownRef}>
        <input 
            type="text"
            placeholder="search"
            onChange={handleSearch}
            value={searchItem}
            className="input is-small is-rounded is-info search-bar "
            />            
            <div className="dropdown-trigger dropdown-container">
                {/* <button 
                  className="button is-info " 
                  aria-haspopup="true" 
                  aria-controls='dropdown-menu5' 
                  onClick={handleIsOpen}>
                  <div>Find Item</div>
                  {handleArrowUp()}
                  {handleArrowDown()}
                </button> */}
            </div>
            {/* The following is displayed when the dropdown is open */}
            {isOpen && (
            <div className="dropdown-menu" id="dropdown-menu5" role="menu" >
                {/* allows the user to filter the dropdown items with the searchbar as well as mapping the dropdown items */}
                <ul className="dropdown-content " onChange={e => setSearchItem(e.target.value)} >
                    {filteredItems.filter(post => {
                        if (searchItem === '') {
                        return post;
                        } else if (post.name.toLowerCase().includes(searchItem.toLowerCase()) || 
                                  post.id.toString().includes(searchItem.toLocaleLowerCase())) {
                          return post;
                        } else {
                          return false
                        }
                        
                    }).map((item, index) => {
                        return(
                            <ul key={index} className="dropdown-item"   >
                                <li className="item">{item.name}</li>  
                                <li className="item"><strong>{item.id}</strong></li>  
                                <hr className='dropdown-divider'/> 
                            </ul>
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


