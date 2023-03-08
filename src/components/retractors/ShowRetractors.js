import React from 'react'
import Retractors from '../../Data/Retractors/all'


function ShowRetractors({retractor, retractor2, retractor3}) {



    return (
        <div className="comparison-container table-container">
        {Object.keys(Retractors).length > 0 && (
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
                        <td>{retractor.name}</td>
                        <td>{retractor2.name}</td>
                        <td>{retractor3.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Item Number</th>
                        <td>{retractor.id}</td>
                        <td>{retractor2.id}</td>
                        <td>{retractor3.id}</td>
                    </tr>
                </tbody>
                
                <tbody> 
                    <tr>
                        <th  scope="row">Product Size</th>
                        <td>{retractor.size}</td>
                        <td className={retractor2.size === retractor.size || retractor2.size === undefined ? '' : 'highlight'}  >{retractor2.size}</td>
                        <td className={(retractor3.size === retractor.size || retractor3.size === undefined ? '' : 'highlight') }  >{retractor3.size}</td>
                    </tr>
                    <tr>
                        <th scope="row">Media</th>
                        <td>{retractor.media}</td>
                        <td className={retractor2.media === retractor.media || retractor2.media === undefined  ? '' : 'highlight'}>{retractor2.media}</td>
                        <td className={retractor3.media === retractor.media || retractor3.media === undefined ? '' : 'highlight'}>{retractor3.media}</td>
                    </tr>
                    <tr>
                        <th scope="row">RCAT</th>
                        <td>{retractor.RCAT}</td>
                        <td className={retractor2.RCAT === retractor.RCAT || retractor2.RCAT === undefined  ? '' : 'highlight'}>{retractor2.RCAT}</td>
                        <td className={retractor3.RCAT === retractor.RCAT || retractor3.RCAT === undefined ? '' : 'highlight'}>{retractor3.RCAT}</td>
                    </tr>
                    <tr>
                        <th scope="base">Base</th>
                        <td>{retractor.base}</td>
                        <td className={retractor2.base === retractor.base || retractor2.base === undefined  ? '' : 'highlight'}>{retractor2.base}</td>
                        <td className={retractor3.base === retractor.base || retractor3.base === undefined ? '' : 'highlight'}>{retractor3.base}</td>
                    </tr>
                    <tr>
                        <th scope="pole">Pole</th>
                        <td>{retractor.pole}</td>
                        <td className={retractor2.pole === retractor.pole || retractor2.pole === undefined ? '' : 'highlight'}>{retractor2.pole}</td>
                        <td className={retractor3.pole === retractor.pole || retractor3.pole === undefined ? '' : 'highlight'}>{retractor3.pole}</td>
                    </tr>
                    <tr>
                        <th scope="row">Banner</th>
                        <td>{retractor.banner}</td>
                        <td className={retractor2.banner === retractor.banner || retractor2.banner === undefined ? '' : 'highlight'}>{retractor2.banner}</td>
                        <td className={retractor3.banner === retractor.banner || retractor3.banner === undefined ? '' : 'highlight'}>{retractor3.banner}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weight</th>
                        <td>{retractor.weight}</td>
                        <td className={retractor2.weight === retractor.weight || retractor2.weight === undefined ? '' : 'highlight'}>{retractor2.weight}</td>
                        <td className={retractor3.weight === retractor.weight || retractor3.weight === undefined ? '' : 'highlight'}>{retractor3.weight}</td>
                    </tr>
                    <tr>
                        <th scope="row">Production Time</th>
                        <td>{retractor.production}</td>
                        <td className={retractor2.production === retractor.production || retractor2.production === undefined ? '' : 'highlight'}>{retractor2.production}</td>
                        <td className={retractor3.production === retractor.production || retractor3.production === undefined ? '' : 'highlight'}>{retractor3.production}</td>
                    </tr>
                    <tr>
                        <th scope="row">Warranty</th>
                        <td>{retractor.warranty}</td>
                        <td className={retractor2.warranty === retractor.warranty || retractor2.warranty === undefined ? '' : 'highlight'}>{retractor2.warranty}</td>
                        <td className={retractor3.warranty === retractor.warranty || retractor3.warranty === undefined ? '' : 'highlight'}>{retractor3.warranty}</td>
                    </tr>
                </tbody>
            </table >
        )}
        </div>
)}

export default ShowRetractors