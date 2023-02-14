
import { useState } from 'react' 
// import Retractors from "../../Data/Retractors";

function ItemList({itemList}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
            <button className="button is-active is-info" aria-haspopup="true" aria-controls='dropdown-menu' onFocus={handleIsOpen}>Open Item List</button>
            {isOpen && (
            <div className="dropdown-menu" role='menu'>
            <ul className="dropdown-content">
                {itemList.map((item, index) => {
                    return(
                        <div key={index} className="dropdown-item">
                            <li className="item">{item.name}{item.tent_name}</li>  
                            <li className="item">{item.id}{item.tent_id}</li>  
                            <hr className='dropdown-divider'/> 
                        </div>
                    )  
                    })}
            </ul>
            </div>
            )}
            </div>
        </div>
            
        </>
    )
}

export default ItemList;