import React, {useState, useEffect} from "react";
import highlight from "../Hooks/highlight";
import tableThrows from "../../Data/TableThrows/Throws";

function ShowTableThrows({tableThrow, throw2, throw3,}) {
    const [showColumns, setShowColumns] = useState(true);
    const [showColumn2, setShowColumn2] = useState(true);
    const [showColumn3, setShowColumn3] = useState(true);

    useEffect(() => {
        if(!tableThrow || Object.keys(tableThrow).length === 0) {
            setShowColumns(false);

        } else {
            setShowColumns(true)
        }
    }, [tableThrow])
  
    useEffect(() => {
      if (!throw2 || Object.keys(throw2).length === 0) {
        setShowColumn2(false);
      } else {
        setShowColumn2(true);
      }
    }, [throw2]);
  
    useEffect(() => {
      if (!throw3 || Object.keys(throw3).length === 0) {
        setShowColumn3(false);
      } else {
        setShowColumn3(true);
      }
    }, [throw3]);


    return (
        <div className="comparison-container table-container">
        {Object.keys(tableThrows).length > 0 && (
            <table className=" table product-section table is-striped is-fullwidth is-bordered  ">
                <thead>
                    <tr>
                        {showColumns && (<th scope="col">Description</th>)}
                        {showColumns && (<th scope="col">Primary</th>)}
                        {showColumn2 && (<th scope="col"> A</th>)}
                        {showColumn3 && (<th scope="col"> B</th>)}
                    </tr>
                </thead>
                <tbody className='table-body'>
                    <tr>
                        {showColumns && (<th scope="row">Name</th>)}
                        {showColumns && (<td><strong className='name-id'>{tableThrow.id}</strong></td>)}
                        {showColumn2 && (<td><strong className='name-id'>{throw2.id}</strong></td>)}
                        {showColumn3 && (<td><strong className='name-id'>{throw3.id}</strong></td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th scope="row">Item Numbers</th>)}
                        {showColumns && (<td><strong className='name-id'>{tableThrow.item_numbers}</strong></td>)}
                        {showColumn2 && (<td><strong className='name-id'>{throw2.item_numbers}</strong></td>)}
                        {showColumn3 && (<td><strong className='name-id'>{throw3.item_numbers}</strong></td>)}
                    </tr>
                </tbody>
                                      
                <tbody> 

                    <tr>
                        {showColumns && (<th  scope="row">Print Option</th>)}
                        {showColumns && (<td>{tableThrow.print_options}</td>)}
                        {showColumn2 && (<td className={throw2.print_options === tableThrow.print_options || throw2.print_options === undefined ? '' : 'highlight'}  >{throw2.print_options}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.options, throw2.options, throw3.options)}  >{throw3.print_options}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Fit</th>)}
                        {showColumns && (<td>{tableThrow.fit}</td>)}
                        {showColumn2 && (<td className={throw2.fit === tableThrow.fit || throw2.fit === undefined ? '' : 'highlight'}  >{throw2.fit}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.fit, throw2.fit, throw3.fit)}  >{throw3.fit}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Flat Size</th>)}
                        {showColumns && (<td>{tableThrow.flat_size}</td>)}
                        {showColumn2 && (<td className={throw2.flat_size === tableThrow.flat_size || throw2.flat_size === undefined ? '' : 'highlight'}  >{throw2.flat_size}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.flat_size, throw2.flat_size, throw3.flat_size)}  >{throw3.flat_size}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Table Size</th>)}
                        {showColumns && (<td>{tableThrow.size}</td>)}
                        {showColumn2 && (<td className={throw2.size === tableThrow.size || throw2.size === undefined ? '' : 'highlight'}  >{throw2.size}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.size, throw2.size, throw3.size)}  >{throw3.size}</td>)}
                    </tr>
                    {/* <tr>
                        {showColumns && (<th  scope="row">Table Size</th>)}
                        {showColumns && (<td>{tableThrow.dimensions1}</td>)}
                        {showColumn2 && (<td className={throw2.dimensions1 === tableThrow.dimensions1 || throw2.dimensions1 === undefined ? '' : 'highlight'}  >{throw2.dimensions1}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.dimensions1, throw2.dimensions1, throw3.dimensions1)}  >{throw3.dimensions1}</td>)}
                    </tr> */}
                    <tr>
                        {showColumns && (<th  scope="row">Material</th>)}
                        {showColumns && (<td>{tableThrow.material}</td>)}
                        {showColumn2 && (<td className={throw2.material === tableThrow.material || throw2.material === undefined ? '' : 'highlight'}  >{throw2.material}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.material, throw2.material, throw3.material)}  >{throw3.material}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Finish</th>)}
                        {showColumns && (<td>{tableThrow.finish}</td>)}
                        {showColumn2 && (<td className={throw2.finish === tableThrow.finish || throw2.finish === undefined ? '' : 'highlight'}  >{throw2.finish}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.material, throw2.material, throw3.material)}  >{throw3.finish}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Care</th>)}
                        {showColumns && (<td>{tableThrow.care}</td>)}
                        {showColumn2 && (<td className={throw2.care === tableThrow.care || throw2.care === undefined ? '' : 'highlight'}  >{throw2.care}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.care, throw2.care, throw3.care)}  >{throw3.care}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Weight</th>)}
                        {showColumns && (<td>{tableThrow.weight}</td>)}
                        {showColumn2 && (<td className={throw2.weight === tableThrow.weight || throw2.weight === undefined ? '' : 'highlight'}  >{throw2.weight}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.weight, throw2.weight, throw3.weight)}  >{throw3.weight}</td>)}
                    </tr>
                    <tr>
                        {showColumns && (<th  scope="row">Warranty</th>)}
                        {showColumns && (<td>{tableThrow.warranty}</td>)}
                        {showColumn2 && (<td className={throw2.warranty === tableThrow.warranty || throw2.warranty === undefined ? '' : 'highlight'}  >{throw2.warranty}</td>)}
                        {showColumn3 && (<td className={highlight(tableThrow.warranty, throw2.warranty, throw3.warranty)}  >{throw3.warranty}</td>)}
                    </tr>

                </tbody>
            </table >
        )}
        </div>
)}


export default ShowTableThrows;