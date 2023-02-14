import tents from "../../Data/Tents"
import { useState } from "react";


function ShowTent({tent, tent2, tent3}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className="comparison-container">
        {Object.keys(tents).length > 0 && (
            <table className="product-section table is-striped is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th scope="col">description</th>
                        <th scope="col">Main input</th>
                        <th scope="col">comparison input</th>
                        <th scope="col">comparison input</th>
                    </tr>
                </thead>
                <tbody>
                 
                    <tr>
                        <th scope="row">Name</th>
                        <td>{tent.name}</td>
                        <td>{tent2.name}</td>
                        <td>{tent3.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Item Number</th>
                        <td>{tent.id}</td>
                        <td>{tent2.id}</td>
                        <td>{tent3.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">canopy</th>
                        <td >{tent.canopy}</td>
                        <td className={tent2.canopy === tent.canopy ? '' : 'highlight'}>{tent2.canopy}</td>
                        <td className={tent3.canopy === tent.canopy ? '' : 'highlight'}>{tent3.canopy}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">colors</th>
                        <td >{tent.colors}</td>
                        <td className={tent2.colors === tent.colors ? '' : 'highlight'}>{tent2.colors}</td>
                        <td className={tent3.colors === tent.colors ? '' : 'highlight'}>{tent3.colors}</td>
                    </tr>
                    <tr>
                        <th scope="row">Locations</th>
                        <td >{tent.locations}</td>
                        <td className={tent2.locations === tent.locations ? '' : 'highlight'}  >{tent2.locations}</td>
                        <td className={tent3.locations === tent.locations ? '' : 'highlight'}  >{tent3.locations}</td>
                    </tr>
                    <tr>
                        <th scope="row">frame</th>
                        <td >{tent.frame}</td>
                        <td className={tent2.frame === tent.frame ? '' : 'highlight'}>{tent2.frame}</td>
                        <td className={tent3.frame === tent.frame ? '' : 'highlight'}>{tent3.frame}</td>
                    </tr>
                    <tr>
                        <th scope="row">joints</th>
                        <td >{tent.joints}</td>
                        <td className={tent2.joints === tent.joints ? '' : 'highlight'}>{tent2.joints}</td>
                        <td className={tent3.joints === tent.joints ? '' : 'highlight'}>{tent3.joints}</td>
                    </tr>
                    <tr>
                        <th scope="row">legs</th>
                        <td >{tent.legs}</td>
                        <td className={tent2.legs === tent.legs ? '' : 'highlight'}>{tent2.legs}</td>
                        <td className={tent3.legs === tent.legs ? '' : 'highlight'}>{tent3.legs}</td>
                    </tr>
                    <tr>
                        <th scope="row">feet</th>
                        <td >{tent.feet}</td>
                        <td className={tent2.feet === tent.feet ? '' : 'highlight'}>{tent2.feet}</td>
                        <td className={tent3.feet === tent.feet ? '' : 'highlight'}>{tent3.feet}</td>
                    </tr>
                    <tr>
                        <th scope="row">Setup Dimensions</th>
                        <td >{tent.setup_dimensions}</td>
                        <td className={tent2.setup_dimensions === tent.setup_dimensions ? '' : 'highlight'}>{tent2.setup_dimensions}</td>
                        <td className={tent3.setup_dimensions === tent.setup_dimensions ? '' : 'highlight'}>{tent3.setup_dimensions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Collapsed Dimensions</th>
                        <td >{tent.collapsible_dimensions}</td>
                        <td className={tent2.collapsible_dimensions === tent.collapsible_dimensions ? '' : 'highlight'}>{tent2.collapsible_dimensions}</td>
                        <td className={tent3.collapsible_dimensions === tent.collapsible_dimensions ? '' : 'highlight'}>{tent3.collapsible_dimensions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td >{tent.tent_weight}</td>
                        <td className={tent2.weight === tent.tent_weight ? '' : 'highlight'}>{tent2.weight}</td>
                        <td className={tent3.weight === tent.tent_weight ? '' : 'highlight'}>{tent3.weight}</td>
                    </tr>
                    <tr>
                        <th scope="row">Production time</th>
                        <td >{tent.tent_production}</td>
                        <td className={tent2.tent_production === tent.tent_production ? '' : 'highlight'}>{tent2.tent_production}</td>
                        <td className={tent3.tent_production === tent.tent_production ? '' : 'highlight'}>{tent3.tent_production}</td>
                    </tr>
                        
                        
                        
                </tbody>
            </table >
        )}

        </div>
)}

export default ShowTent;