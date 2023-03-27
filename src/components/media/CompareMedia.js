import React, {useState, useEffect}  from "react";
import Media from "../../Data/media/media";
import highlight from '../Hooks/highlight';

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
              <tbody className='table-body'>
                <tr>
                  {showColumns && (<th scope="row">Name</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.name}</strong></td>)}
                  {showColumn2 && (<td><strong className='name-id'>{media2.name}</strong></td>)}
                  {showColumn3 && (<td><strong className='name-id'>{media3.name}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row" className="media-description">Description</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.description}</strong></td>)}
                  {showColumn2 && (<td><strong className='name-id'>{media2.description}</strong></td>)}
                  {showColumn3 && (<td><strong className='name-id'>{media3.description}</strong></td>)}
                </tr>
              </tbody>
              <tbody>
                <tr>
                  {showColumns && (<th scope="row">Duty</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.duty}</strong></td>)}
                  {showColumn2 && (<td className={media2.duty === media1.duty || media2.duty === undefined ? '' : 'highlight'} ><strong className='name-id'>{media2.duty}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.duty, media2.duty, media3.duty)} ><strong className='name-id'>{media3.duty}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Wind</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.wind}</strong></td>)}
                  {showColumn2 && (<td className={media2.wind === media1.wind || media2.wind === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.wind}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.wind, media2.wind, media3.wind)}><strong className='name-id'>{media3.wind}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Indoor</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.indoor}</strong></td>)}
                  {showColumn2 && (<td className={media2.indoor === media1.indoor || media2.indoor === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.indoor}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.indoor, media2.indoor, media3.indoor)}><strong className='name-id'>{media3.indoor}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Outdoor</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.outdoor}</strong></td>)}
                  {showColumn2 && (<td className={media2.outdoor === media1.outdoor || media2.outdoor === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.outdoor}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.outdoor, media2.outdoor, media3.outdoor)}><strong className='name-id'>{media3.outdoor}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Application</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.application}</strong></td>)}
                  {showColumn2 && (<td className={media2.application === media1.application || media2.application === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.application}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.application1, media2.application, media3.application)}><strong className='name-id'>{media3.application}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Single Sided</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.singleSided}</strong></td>)}
                  {showColumn2 && (<td className={media2.singleSided === media1.singleSided || media2.singleSided === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.singleSided}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.singleSided, media2.singleSided, media3.singleSided)}><strong className='name-id'>{media3.singleSided}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Double Sided</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.doubleSided}</strong></td>)}
                  {showColumn2 && (<td className={media2.doubleSided === media1.doubleSided || media2.doubleSided === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.doubleSided}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.doubleSided, media2.doubleSided, media3.doubleSided)}><strong className='name-id'>{media3.doubleSided}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Default Finishing</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.default}</strong></td>)}
                  {showColumn2 && (<td className={media2.default === media1.default || media2.default === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.default}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.default, media2.default, media3.default)}><strong className='name-id'>{media3.default}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Warranty</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.warranty}</strong></td>)}
                  {showColumn2 && (<td className={media2.warranty === media1.warranty || media2.warranty === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.warranty}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.warranty, media2.warranty, media3.warranty)}><strong className='name-id'>{media3.warranty}</strong></td>)}
                </tr>
                <tr>
                  {showColumns && (<th scope="row">Note</th>)}
                  {showColumns && (<td><strong className='name-id'>{media1.note}</strong></td>)}
                  {showColumn2 && (<td className={media2.note === media1.note || media2.note === undefined ? '' : 'highlight'}><strong className='name-id'>{media2.note}</strong></td>)}
                  {showColumn3 && (<td className={highlight(media1.note, media2.note, media3.note)}><strong className='name-id'>{media3.note}</strong></td>)}
                </tr>
              </tbody>
            </table>
          )}
        </>
    )
}

export default CompareMedia;