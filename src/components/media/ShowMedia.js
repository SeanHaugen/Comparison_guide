import React, {useState} from "react";
import mediaJSON from '../../Data/media/media.json';
import sqrFtJSON from '../../Data/media/sqrFtItemNum.json';

function ShowMedia() {
    let [ searchTerm, setSearchTerm ] = useState('');
    let [ isOpen, setIsOpen ] =  useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    

    const toggleBox = (item) => {
        setIsOpen(!isOpen)
        setSelectedItem(item);
    }

    const handleClose = () => {
        setIsOpen(false);
        setSelectedItem(null);
      };


    let filteredMedia = sqrFtJSON.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.itemNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dimensions.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.types.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    

    let showMediaSpecs  = (item1, item2) => {
        const matchingMediaItem = mediaJSON.find(mediaItem => mediaItem.sqrFt_item_number === item2.itemNumber);
        return (
            <div>
                <p><strong>Description:</strong> {matchingMediaItem.media_title}</p>
                <p><strong>Ink Compatibility:</strong> {matchingMediaItem.ink_Compatibility}</p>
                <p><strong>Content:</strong> {matchingMediaItem.content}</p>
                <p><strong>Surface:</strong> {matchingMediaItem.surface}</p>
                <p><strong>constructed:</strong> {matchingMediaItem.constructed}</p>
                <p><strong>Thickness:</strong> {matchingMediaItem.thickness}</p>
                <p><strong>weight:</strong> {matchingMediaItem.weight}</p>
                <p><strong>Cold Crack:</strong> {matchingMediaItem.cold_crack}</p>
                <p><strong>Tensile Strength:</strong> {matchingMediaItem.tensile_strength}</p>
                <p><strong>Tear Strength:</strong> {matchingMediaItem.tear_strength}</p>
                <p><strong>roll_length:</strong> {matchingMediaItem.roll_length}</p>
                <p><strong>core:</strong> {matchingMediaItem.core}</p>
                <p><strong>Packaging:</strong> {matchingMediaItem.Packaging}</p>
                <p><strong>Country of Origin:</strong> {matchingMediaItem.country_of_origin}</p>
                <p><strong>Flame Resistance:</strong> {matchingMediaItem.flame_resistance}</p>
                <p><strong>storage:</strong> {matchingMediaItem.storage}</p>
                <p><strong>Prop65:</strong> {matchingMediaItem.prop65}</p>
            </div>
        )
    }


    return (
        <div>
            <h1 className="title">Under Construction</h1>
            <section>
            <input 
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search"
                    list="list"
                    name="list"
                />

                {filteredMedia.map((item, index) => {
                    return (
                        <div key={index}  >
                            <table className=" table product-section is-striped is-fullwidth is-bordered table_2 ">
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.itemNumber}</td>
                                        <td>{item.description}</td>
                                        <td>{item.dimensions}</td>
                                        <td>
                                            <button onClick={() => toggleBox(item)}>Show media specs</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
 
            </section>
            {selectedItem && isOpen && (
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>
                    &times;
                    </span>
                    
                    {showMediaSpecs(mediaJSON, selectedItem)}
                </div>
                </div>
            )}
        </div>
    )
}

export default ShowMedia