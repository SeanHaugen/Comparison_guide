
import { useState } from 'react' 
// import Retractors from "../../Data/Retractors";

function ItemList({itemList}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <div className="container"> 
        <div className="side-bar dropdown is-active dropdown-container">
            <div className="dropdown-menu dropdown-trigger">
            <button className="button" onClick={handleIsOpen}>Open Item List</button>
            {isOpen && (
            <div className="sidebar">
            <ul className="dropdown-content">
                {itemList.map((item, index) => {
                    return(
                        <div key={index} className="item ">
                            <li className="dropdown-item">{item.name}{item.tent_name}</li>  
                            <li className="dropdown-item">{item.id}{item.tent_id}</li>   
                        </div>
                    )
                        
                    })}
            </ul>
            </div>
            )}
            </div>
        </div>
            
        </div>
        </>
    )
}

export default ItemList;