import React from "react";
import tents from "../../Data/Tents"
function ShowTent({tent, tent2, tent3}) {

    return (
        <div className="comparison-container table-container">
        {Object.keys(tents).length > 0 && (
            <table className=" table product-section table is-striped is-bordered is-fullwidth">
                <thead >
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Primary input</th>
                        <th scope="col">Comparative input A</th>
                        <th scope="col">Comparative input B</th>
                    </tr>
                </thead>
                <tbody className="body">
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
                </tbody>
                <tbody>
                    <tr>
                        <th scope="row">Canopy</th>
                        <td >{tent.canopy}</td>
                        <td className={tent2.canopy === tent.canopy || tent2.canopy === undefined ? '' : 'highlight'}>{tent2.canopy}</td>
                        <td className={tent3.canopy === tent.canopy || tent3.canopy === undefined  ? '' : 'highlight'}>{tent3.canopy}</td>
                        
                    </tr>
                    <tr>
                        <th scope="row">Colors</th>
                        <td >{tent.colors}</td>
                        <td className={tent2.colors === tent.colors || tent2.colors === undefined ? '' : 'highlight'}>{tent2.colors}</td>
                        <td className={tent3.colors === tent.colors || tent3.colors === undefined? '' : 'highlight'}>{tent3.colors}</td>
                    </tr>
                    <tr>
                        <th scope="row">Locations</th>
                        <td >{tent.locations}</td>
                        <td className={tent2.locations === tent.locations || tent2.locations === undefined ? '' : 'highlight'}  >{tent2.locations}</td>
                        <td className={tent3.locations === tent.locations || tent3.locations === undefined ? '' : 'highlight'}  >{tent3.locations}</td>
                    </tr>
                    <tr>
                        <th scope="row">Frame</th>
                        <td >{tent.frame}</td>
                        <td className={tent2.frame === tent.frame || tent2.frame === undefined  ?  '' : 'highlight'}>{tent2.frame}</td>
                        <td className={tent3.frame === tent.frame || tent3.frame === undefined ? '' : 'highlight'}>{tent3.frame}</td>
                    </tr>
                    <tr>
                        <th scope="row">Joints</th>
                        <td >{tent.joints}</td>
                        <td className={tent2.joints === tent.joints || tent2.joints === undefined ? '' : 'highlight'}>{tent2.joints}</td>
                        <td className={tent3.joints === tent.joints || tent3.joints === undefined ? '' : 'highlight'}>{tent3.joints}</td>
                    </tr>
                    <tr>
                        <th scope="row">Legs</th>
                        <td >{tent.legs}</td>
                        <td className={tent2.legs === tent.legs || tent2.legs === undefined  ? '' : 'highlight'}>{tent2.legs}</td>
                        <td className={tent3.legs === tent.legs || tent3.legs === undefined  ? '' : 'highlight'}>{tent3.legs}</td>
                    </tr>
                    <tr>
                        <th scope="row">Feet</th>
                        <td >{tent.feet}</td>
                        <td className={tent2.feet === tent.feet || tent2.feet === undefined ? ''  : 'highlight'}>{tent2.feet}</td>
                        <td className={tent3.feet === tent.feet || tent3.feet === undefined ? '' : 'highlight'}>{tent3.feet}</td>
                    </tr>
                    <tr>
                        <th scope="row">Setup Dimensions</th>
                        <td >{tent.setup_dimensions}</td>
                        <td className={tent2.setup_dimensions === tent.setup_dimensions || tent2.setup_dimensions === undefined ? ''  : 'highlight'}>{tent2.setup_dimensions}</td>
                        <td className={tent3.setup_dimensions === tent.setup_dimensions || tent3.setup_dimensions === undefined ? '' : 'highlight'}>{tent3.setup_dimensions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Collapsed Dimensions</th>
                        <td >{tent.collapsible_dimensions}</td>
                        <td className={tent2.collapsible_dimensions === tent.collapsible_dimensions || tent2.collapsible_dimensions === undefined ? ''  : 'highlight'}>{tent2.collapsible_dimensions}</td>
                        <td className={tent3.collapsible_dimensions === tent.collapsible_dimensions || tent3.collapsible_dimensions === undefined ? '' : 'highlight'}>{tent3.collapsible_dimensions}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td >{tent.tent_weight}</td>
                        <td className={tent2.tent_weight === tent.tent_weight || tent2.tent_weight === undefined  ? '' : 'highlight'}>{tent2.tent_weight}</td>
                        <td className={tent3.tent_weight === tent.tent_weight  || tent3.tent_weight === undefined ? '' : 'highlight'}>{tent3.tent_weight}</td>
                    </tr>
                    <tr>
                        <th scope="row">Production time</th>
                        <td >{tent.tent_production}</td>
                        <td className={tent2.tent_production === tent.tent_production || tent2.tent_production === undefined ? '' : 'highlight'}>{tent2.tent_production}</td>
                        <td className={tent3.tent_production === tent.tent_production || tent3.tent_production === undefined ? '' : 'highlight'}>{tent3.tent_production}</td>
                    </tr>
                    {/* <tr>
                        <th scope="row">Image</th>
                        <td >
                        <figure class="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="tent" />
                        </figure>
                        </td>
                    </tr> */}
                </tbody>
            </table >
        )}
        </div>
)}
export default ShowTent;