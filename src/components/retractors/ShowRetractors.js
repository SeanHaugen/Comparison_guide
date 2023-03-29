import React, {useState, useEffect} from 'react'
import Retractors from '../../Data/Retractors/all'
import highlight from '../Hooks/highlight';

function ShowRetractors({retractor, retractor2, retractor3}) {
    const [showColumns, setShowColumns] = useState(true);
    const [showColumn2, setShowColumn2] = useState(true);
    const [showColumn3, setShowColumn3] = useState(true);
    const [isOpen, setIsOpen] = useState(false)



    const handleIsOpen = () => {
        setIsOpen(!isOpen)
      }

    useEffect(() => {
        if(!retractor || Object.keys(retractor).length === 0) {
            setShowColumns(false);

        } else {
            setShowColumns(true)
        }
    }, [retractor])
  
    useEffect(() => {
      if (!retractor2 || Object.keys(retractor2).length === 0) {
        setShowColumn2(false);
      } else {
        setShowColumn2(true);
      }
    }, [retractor2]);
  
    useEffect(() => {
      if (!retractor3 || Object.keys(retractor3).length === 0) {
        setShowColumn3(false);
      } else {
        setShowColumn3(true);
      }
    }, [retractor3]);

    return (
        <div className="comparison-container table-container">
        {Object.keys(Retractors).length > 0 && (
            <table className=" table product-section table is-striped is-fullwidth is-bordered  ">
                <thead>
                    <tr>
                        {showColumns && <th scope="col">Description</th>}
                        {showColumns && <th scope="col">Primary</th>}
                        {showColumn2 && <th scope="col">A</th>}
                        {showColumn3 && <th scope="col">B</th>}
                    </tr>
                </thead>
                <tbody className='table-body'>
                    <tr>
                        {showColumns && (<th scope="row">Name</th>)}
                        {showColumns && (<td><strong className='name-id'>{retractor.name}</strong></td>)}
                        {showColumn2 && (<td><strong className='name-id'>{retractor2.name}</strong></td>)}
                        {showColumn3 && (<td><strong className='name-id'>{retractor3.name}</strong></td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Item Number</th>)}
                        {showColumns && (<td><strong className='name-id'>{retractor.id}</strong></td>)}
                        {showColumn2 && (<td><strong className='name-id'>{retractor2.id}</strong></td>)}
                        {showColumn3 && (<td><strong className='name-id'>{retractor3.id}</strong></td>)}
                    </tr>
                    
                    {isOpen && ( 
                    <tr>
                    
                        {showColumns && (<th scope="row"><button className='button is-danger' onClick={handleIsOpen}>Close Pricing</button></th>)}
                        
                        {showColumns && (<td><strong className='price-table'><img src={retractor.price} alt='pricing table'></img></strong></td>)}
                        {showColumn2 && (<td><strong className='price-table'><img src={retractor2.price} alt='pricing table'></img></strong></td>)}
                        {showColumn3 && (<td><strong className='price-table'><img src={retractor3.price} alt='pricing table'></img></strong></td>)}
                        
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
                        {showColumns && (<th scope="row">Product Dimensions</th>)}
                        {showColumns && (<td>{retractor.size}</td>)}
                        {showColumn2 && (<td className={retractor2.size === retractor.size || retractor2.size === undefined ? '' : 'highlight'}  >{retractor2.size}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.size, retractor2.size, retractor3.size)}>{retractor3.size}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Media</th>)}
                        {showColumns && (<td>{retractor.media}</td>)}
                        {showColumn2 && (<td className={retractor2.media === retractor.media || retractor2.media === undefined  ? '' : 'highlight'}>{retractor2.media}</td>)}
                       {showColumn3 && (<td className={highlight(retractor.media, retractor2.media, retractor3.media)}>{retractor3.media}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">RCAT</th>)}
                        {showColumns && (<td>{retractor.RCAT}</td>)}
                        {showColumn2 && (<td className={retractor2.RCAT === retractor.RCAT || retractor2.RCAT === undefined  ? '' : 'highlight'}>{retractor2.RCAT}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.RCAT, retractor2.RCAT, retractor3.RCAT)}>{retractor3.RCAT}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="base">Base</th>)}
                        {showColumns && (<td>{retractor.base}</td>)}
                        {showColumn2 && (<td className={retractor2.base === retractor.base || retractor2.base === undefined  ? '' : 'highlight'}>{retractor2.base}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.base, retractor2.base, retractor3.base)}>{retractor3.base}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="pole">Pole</th>)}
                        {showColumns && (<td>{retractor.pole}</td>)}
                        {showColumn2 && (<td className={retractor2.pole === retractor.pole || retractor2.pole === undefined ? '' : 'highlight'}>{retractor2.pole}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.pole, retractor2.pole, retractor3.pole)}>{retractor3.pole}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Banner</th>)}
                        {showColumns && (<td>{retractor.banner}</td>)}
                        {showColumn2 && (<td className={retractor2.banner === retractor.banner || retractor2.banner === undefined ? '' : 'highlight'}>{retractor2.banner}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.banner, retractor2.banner, retractor3.banner)}>{retractor3.banner}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">attachment method</th>)}
                        {showColumns && (<td>{retractor.attachment_method}</td>)}
                        {showColumn2 && (<td className={retractor2.attachment_method === retractor.attachment_method || retractor2.attachment_method === undefined ? '' : 'highlight'}>{retractor2.attachment_method}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.attachment_method, retractor2.attachment_method, retractor3.attachment_method)}>{retractor3.attachment_method}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Weight</th>)}
                        {showColumns && (<td>{retractor.weight}</td>)}
                        {showColumn2 && (<td className={retractor2.weight === retractor.weight || retractor2.weight === undefined ? '' : 'highlight'}>{retractor2.weight}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.weight, retractor2.weight, retractor3.weight)}>{retractor3.weight}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Production Time</th>)}
                        {showColumns && (<td>{retractor.production}</td>)}
                        {showColumn2 && (<td className={retractor2.production === retractor.production || retractor2.production === undefined ? '' : 'highlight'}>{retractor2.production}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.production, retractor2.production, retractor3.production)}>{retractor3.production}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Warranty</th>)}
                        {showColumns && (<td>{retractor.warranty}</td>)}
                        {showColumn2 && (<td className={retractor2.warranty === retractor.warranty || retractor2.warranty === undefined ? '' : 'highlight'}>{retractor2.warranty}</td>)}
                        {showColumn3 && (<td className={highlight(retractor.warranty, retractor2.warranty, retractor3.warranty)}>{retractor3.warranty}</td>)}
                    </tr>
                </tbody>
            </table >
        )}
        </div>
)}

export default ShowRetractors