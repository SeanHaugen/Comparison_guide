
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
                        <td><strong className='name-id'>{tableThrow.id}</strong></td>
                        <td><strong className='name-id'>{throw2.id}</strong></td>
                        <td><strong className='name-id'>{throw3.id}</strong></td>
                    </tr>
                    <tr>
                        <th scope="row">Item Numbers</th>
                        <td><strong className='name-id'>{tableThrow.item_numbers}</strong></td>
                        <td><strong className='name-id'>{throw2.item_numbers}</strong></td>
                        <td><strong className='name-id'>{throw3.item_numbers}</strong></td>
                    </tr>
                </tbody>
                                      
                <tbody> 

                    <tr>
                        <th  scope="row">Print Option</th>
                        <td>{tableThrow.print_options}</td>
                        <td className={throw2.print_options === tableThrow.print_options || throw2.print_options === undefined ? '' : 'highlight'}  >{throw2.print_options}</td>
                        <td className={throw3.print_options === tableThrow.print_options || throw3.print_options === undefined ? '' : 'highlight'}  >{throw3.print_options}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Fit</th>
                        <td>{tableThrow.fit}</td>
                        <td className={throw2.fit === tableThrow.fit || throw2.fit === undefined ? '' : 'highlight'}  >{throw2.fit}</td>
                        <td className={throw3.fit === tableThrow.fit || throw3.fit === undefined ? '' : 'highlight'}  >{throw3.fit}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Flat Size</th>
                        <td>{tableThrow.flat_size}</td>
                        <td className={throw2.flat_size === tableThrow.flat_size || throw2.flat_size === undefined ? '' : 'highlight'}  >{throw2.flat_size}</td>
                        <td className={throw3.flat_size === tableThrow.flat_size || throw3.flat_size === undefined ? '' : 'highlight'}  >{throw3.flat_size}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Size</th>
                        <td>{tableThrow.size}</td>
                        <td className={throw2.size === tableThrow.size || throw2.size === undefined ? '' : 'highlight'}  >{throw2.size}</td>
                        <td className={throw3.size === tableThrow.size || throw3.size === undefined ? '' : 'highlight'}  >{throw3.size}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Material</th>
                        <td>{tableThrow.material}</td>
                        <td className={throw2.material === tableThrow.material || throw2.material === undefined ? '' : 'highlight'}  >{throw2.material}</td>
                        <td className={throw3.material === tableThrow.material || throw3.material === undefined ? '' : 'highlight'}  >{throw3.material}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Finish</th>
                        <td>{tableThrow.finish}</td>
                        <td className={throw2.finish === tableThrow.finish || throw2.finish === undefined ? '' : 'highlight'}  >{throw2.finish}</td>
                        <td className={throw3.finish === tableThrow.finish || throw3.finish === undefined ? '' : 'highlight'}  >{throw3.finish}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Care</th>
                        <td>{tableThrow.care}</td>
                        <td className={throw2.care === tableThrow.care || throw2.care === undefined ? '' : 'highlight'}  >{throw2.care}</td>
                        <td className={throw3.care === tableThrow.care || throw3.care === undefined ? '' : 'highlight'}  >{throw3.care}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Weight</th>
                        <td>{tableThrow.weight}</td>
                        <td className={throw2.weight === tableThrow.weight || throw2.weight === undefined ? '' : 'highlight'}  >{throw2.weight}</td>
                        <td className={throw3.weight === tableThrow.weight || throw3.weight === undefined ? '' : 'highlight'}  >{throw3.weight}</td>
                    </tr>
                    <tr>
                        <th  scope="row">Warranty</th>
                        <td>{tableThrow.warranty}</td>
                        <td className={throw2.warranty === tableThrow.warranty || throw2.warranty === undefined ? '' : 'highlight'}  >{throw2.warranty}</td>
                        <td className={throw3.warranty === tableThrow.warranty || throw3.warranty === undefined ? '' : 'highlight'}  >{throw3.warranty}</td>
                    </tr>

                </tbody>
            </table >
        )}
        </div>
)}


export default ShowTableThrows;