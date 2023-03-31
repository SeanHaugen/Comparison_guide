import React, {useState, useEffect} from "react";
import tents from "../../Data/Tents"
import highlight from "../Hooks/highlight";

function ShowTent({tent, tent2, tent3}) {
    const [showColumns, setShowColumns] = useState(true);
    const [showColumn2, setShowColumn2] = useState(true);
    const [showColumn3, setShowColumn3] = useState(true);
    const [isOpen, setIsOpen] = useState(false)



    const handleIsOpen = () => {
        setIsOpen(!isOpen)
      }

    useEffect(() => {
        if(!tent || Object.keys(tent).length === 0) {
            setShowColumns(false);

        } else {
            setShowColumns(true)
        }
    }, [tent])
  
    useEffect(() => {
      if (!tent2 || Object.keys(tent2).length === 0) {
        setShowColumn2(false);
      } else {
        setShowColumn2(true);
      }
    }, [tent2]);
  
    useEffect(() => {
      if (!tent3 || Object.keys(tent3).length === 0) {
        setShowColumn3(false);
      } else {
        setShowColumn3(true);
      }
    }, [tent3]);

    return (
        <div className="comparison-container table-container">
        {Object.keys(tents).length > 0 && (
            <table className=" table product-section table is-striped is-bordered is-fullwidth">
                <thead >
                    <tr>
                        {showColumns && (<th scope="col">Description</th>)}
                        {showColumns && (<th scope="col" className="primary-column">Primary</th>)}
                        {showColumn2 && (<th scope="col">A</th>)}
                        {showColumn3 && (<th scope="col">B</th>)}
                    </tr>
                </thead>
                <tbody className="table-body ">
                    <tr>
                        {showColumns && (<th scope="row">Name</th>)}
                        {showColumns && (<td>{tent.name}</td>)}
                        {showColumn2 && (<td>{tent2.name}</td>)}
                        {showColumn3 && (<td>{tent3.name}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Item Number</th>)}
                        {showColumns && (<td>{tent.id}</td>)}
                        {showColumn2 && (<td>{tent2.id}</td>)}
                        {showColumn3 && (<td>{tent3.id}</td>)}
                    </tr>
                    {isOpen && ( 
                    <tr>
                    
                        {showColumns && (<th scope="row"><button className='button is-danger' onClick={handleIsOpen}>Close Pricing</button></th>)}
                        
                        {showColumns && (<td><strong className='price-table'><img src={tent.price} alt='pricing table'></img></strong></td>)}
                        {showColumn2 && (<td><strong className='price-table'><img src={tent2.price} alt='pricing table'></img></strong></td>)}
                        {showColumn3 && (<td><strong className='price-table'><img src={tent3.price} alt='pricing table'></img></strong></td>)}
                        
                    </tr>
                    )}

                    {!isOpen && (
                            <tr>
                            {showColumns && (
                                <th scope="row">
                                <button className="button is-primary" onClick={handleIsOpen}>
                                    Show Pricing
                                </button>
                                </th>
                            )}
                            </tr>
                        )}
                </tbody>
                <tbody>
                    <tr>
                        {showColumns && (<th scope="row">Canopy</th>)}
                        {showColumns && (<td >{tent.canopy}</td>)}
                        {showColumn2 && (<td className={tent2.canopy === tent.canopy || tent2.canopy === undefined ? '' : 'highlight'}>{tent2.canopy}</td>)}
                        {showColumn3 && (<td className={highlight(tent.canopy, tent2.canopy, tent3.canopy)}>{tent3.canopy}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Imprint Method</th>)}
                        {showColumns && (<td >{tent.tent_imprint_method }</td>)}
                        {showColumn2 && (<td className={tent2.tent_imprint_method === tent.tent_imprint_method || tent2.tent_imprint_method  === undefined ? '' : 'highlight'}>{tent2.tent_imprint_method }</td>)}
                        {showColumn3 && (<td className={highlight(tent.tent_imprint_method, tent2.tent_imprint_method, tent3.tent_imprint_method)}>{tent3.tent_imprint_method }</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Locations</th>)}
                        {showColumns && (<td >{tent.locations}</td>)}
                        {showColumn2 && (<td className={tent2.locations === tent.locations || tent2.locations === undefined ? '' : 'highlight'}  >{tent2.locations}</td>)}
                        {showColumn3 && (<td className={highlight(tent.locations, tent2.locations, tent3.locations)}  >{tent3.locations}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Frame</th>)}
                        {showColumns && (<td >{tent.frame}</td>)}
                        {showColumn2 && (<td className={tent2.frame === tent.frame || tent2.frame === undefined  ?  '' : 'highlight'}>{tent2.frame}</td>)}
                        {showColumn3 && (<td className={highlight(tent.frame, tent2.frame, tent3.frame)}>{tent3.frame}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Joints</th>)}
                        {showColumns && (<td >{tent.joints}</td>)}
                        {showColumn2 && (<td className={tent2.joints === tent.joints || tent2.joints === undefined ? '' : 'highlight'}>{tent2.joints}</td>)}
                        {showColumn3 && (<td className={highlight(tent.joints, tent2.joints, tent3.joints)}>{tent3.joints}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Legs</th>)}
                        {showColumns && (<td >{tent.legs}</td>)}
                        {showColumn2 && (<td className={tent2.legs === tent.legs || tent2.legs === undefined  ? '' : 'highlight'}>{tent2.legs}</td>)}
                        {showColumn3 && (<td className={highlight(tent.legs, tent2.legs, tent3.legs)}>{tent3.legs}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Feet</th>)}
                        {showColumns && (<td >{tent.feet}</td>)}
                        {showColumn2 && (<td className={tent2.feet === tent.feet || tent2.feet === undefined ? ''  : 'highlight'}>{tent2.feet}</td>)}
                        {showColumn3 && (<td className={highlight(tent.feet, tent2.feet, tent3.feet)}>{tent3.feet}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Setup Dimensions</th>)}
                        {showColumns && (<td >{tent.setup_dimensions}</td>)}
                        {showColumn2 && (<td className={tent2.setup_dimensions === tent.setup_dimensions || tent2.setup_dimensions === undefined ? ''  : 'highlight'}>{tent2.setup_dimensions}</td>)}
                        {showColumn3 && (<td className={highlight(tent.setup_dimensions, tent2.setup_dimensions, tent3.setup_dimensions)}>{tent3.setup_dimensions}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Collapsed Dimensions</th>)}
                        {showColumns && (<td >{tent.collapsible_dimensions}</td>)}
                        {showColumn2 && (<td className={tent2.collapsible_dimensions === tent.collapsible_dimensions || tent2.collapsible_dimensions === undefined ? ''  : 'highlight'}>{tent2.collapsible_dimensions}</td>)}
                        {showColumn3 && (<td className={highlight(tent.collapsible_dimensions, tent2.collapsible_dimensions, tent3.collapsible_dimensions)}>{tent3.collapsible_dimensions}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Weight</th>)}
                        {showColumns && (<td >{tent.tent_weight}</td>)}
                        {showColumn2 && (<td className={tent2.tent_weight === tent.tent_weight || tent2.tent_weight === undefined  ? '' : 'highlight'}>{tent2.tent_weight}</td>)}
                        {showColumn3 && (<td className={highlight(tent.tent_weight, tent2.tent_weight, tent3.tent_weight)}>{tent3.tent_weight}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Production time</th>)}
                        {showColumns && (<td >{tent.tent_production}</td>)}
                        {showColumn2 && (<td className={tent2.tent_production === tent.tent_production || tent2.tent_production === undefined ? '' : 'highlight'}>{tent2.tent_production}</td>)}
                        {showColumn3 && (<td className={highlight(tent.tent_production, tent2.tent_production, tent3.tent_production)}>{tent3.tent_production}</td>)}
                    </tr>
                </tbody>
            </table >
        )}
        </div>
)}
export default ShowTent;