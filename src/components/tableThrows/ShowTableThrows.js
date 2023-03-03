
import React from "react";
import tableThrows from "../../Data/TableThrows/Throws";

function ShowTableThrows({tableThrow, throw2, throw3,}) {
    return (
        <div className="comparison-container table-container">
        {Object.keys(tableThrows).length > 0 && (
            <table className=" table product-section table is-striped is-fullwidth is-bordered  ">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Primary Input</th>
                        <th scope="col">Comparative Input A</th>
                        <th scope="col">Comparative Input B</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{tableThrow.name}</td>
                        <td>{throw2.name}</td>
                        <td>{throw3.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Item Number</th>
                        <td>{tableThrow.id}</td>
                        <td>{throw2.id}</td>
                        <td>{throw3.id}</td>
                    </tr>
                </tbody>
                
                <tbody> 
                    <tr>
                        <th  scope="row">Size</th>
                        <td>{tableThrow.size}</td>
                        <td className={throw2.size === tableThrow.size || throw2.size === undefined ? '' : 'highlight'}  >{throw2.size}</td>
                        <td className={throw3.size === tableThrow.size || throw3.size === undefined ? '' : 'highlight'}  >{throw3.size}</td>
                    </tr>

                </tbody>
            </table >
        )}
        </div>
)}


export default ShowTableThrows;