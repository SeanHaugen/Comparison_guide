import React, {useState, useEffect}  from "react";
import Media from "../../Data/media/media";


function CompareMedia({media1, media2, media3}) {
  const [showColumns, setShowColumns] = useState(true);
  const [showColumn2, setShowColumn2] = useState(true);
  const [showColumn3, setShowColumn3] = useState(true);



  useEffect(() => {
      if(!media1 || Object.keys(media1).length === 0) {
          setShowColumns(false);

      } else {
          setShowColumns(true)
      }
  }, [media1])

  useEffect(() => {
    if (!media2 || Object.keys(media2).length === 0) {
      setShowColumn2(false);
    } else {
      setShowColumn2(true);
    }
  }, [media2]);

  useEffect(() => {
    if (!media3 || Object.keys(media3).length === 0) {
      setShowColumn3(false);
    } else {
      setShowColumn3(true);
    }
  }, [media3]);


    return (
      <>
      {Object.keys(Media).length > 0 && (
            <table className=" table product-section table is-striped is-fullwidth is-bordered  ">
              <thead>
                <tr>
                  {showColumns && <th scope="col">Description</th>}
                  {showColumns && <th scope="col">Primary</th>}
                  {showColumn2 && <th scope="col">A</th>}
                  {showColumn3 && <th scope="col">B</th>}
                </tr>
              </thead>
              <tbody className='t-body'>
                <tr>
                  {showColumns && (<th scope="row">Name</th>)}
                  {showColumns && ( <td><strong className='name-id'>{media1.name}</strong></td>)}
                  {showColumn2 && (<td><strong className='name-id'>{media2.name}</strong></td>)}
                  {(showColumn3 && <td><strong className='name-id'>{media3.name}</strong></td>)}
                </tr>
                <tr>
                  
                  {showColumns && (<th scope="row">Description</th>)}
                  
                  {showColumns && ( <td><strong className='name-id'>{media1.description}</strong></td>)}
                  {showColumn2 && (<td><strong className='name-id'>{media2.description}</strong></td>)}
                  {(showColumn3 && <td><strong className='name-id'>{media3.description}</strong></td>)}
                  
                </tr>
              </tbody>
            </table>
          )}
        </>
    )
}

export default CompareMedia;