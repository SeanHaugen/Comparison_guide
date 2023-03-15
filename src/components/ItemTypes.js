import React,{ useState } from "react";
// import ItemList from './ItemList'
import CompareBar from "./ComparisonBar";
import { useLocation } from "react-router-dom";



function ItemTypeList({itemList, setItem, setItem2, setItem3}) {

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [sizeFilter, setSizeFilter] = useState([]);
    const [mediaFilter, setMediaFilter] = useState([])
    const location = useLocation()

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setCategoryFilter([...categoryFilter, value]);
        } else {
          setCategoryFilter(categoryFilter.filter((cat) => cat !== value));
        }
      };

    const handleSizeChange = (e) => {
      const { value, checked} = e.target;
      if(checked) {
        setSizeFilter([...sizeFilter, value])
      } else {
        setSizeFilter(sizeFilter.filter((size) => size !== value))
      }
    }

    const handleMediaChange = (e) => {
      const { value, checked} = e.target;
      if(checked) {
        setMediaFilter([...mediaFilter, value])

      } else {
        setMediaFilter(mediaFilter.filter((type) => type !== value))
      }
    }



    
    const filteredItems = itemList.filter((item) => {
        const passCategoryFilter = categoryFilter.length === 0 || categoryFilter.includes(item.category);
        const passSizeFilter = sizeFilter.length === 0 || sizeFilter.includes(item.type);
        const passMediaFilter = mediaFilter.length === 0 || mediaFilter.includes(item.media)
        return passCategoryFilter && passSizeFilter && passMediaFilter;
        })


 
  return (
      <div className="content-container  box">
        <label className="checkbox ">
          <div className="checkbox-container-one">
          {(location.pathname === '/TentsCompare' || location.pathname === '/RetractorCompare') && (
            <>
              <input  type="checkbox" value="good" onChange={handleCategoryChange} />
              Good
              <br />
              <input  type="checkbox" value="better" onChange={handleCategoryChange} />
              Better
              <br />
              <input type="checkbox" value="best" onChange={handleCategoryChange} />
              best
              <br />
            </>
          )}
          
          </div>
          <br />
            <div className="checkbox checkbox-container-one ">
            {location.pathname === '/RetractorCompare' && (
              <>
                <input type="checkbox" value="tableTop" onChange={handleSizeChange} />
                table top
                <br />
                <input type="checkbox" value="16-24" onChange={handleSizeChange} />
                16"-24"
                <br />
                <input type="checkbox" value="31.5" onChange={handleSizeChange} />
                31.5"
                <br />
                <input type="checkbox" value="33.5" onChange={handleSizeChange} />
                33.5"
                <br />
                <input type="checkbox" value="36-48" onChange={handleSizeChange} />
                36"-48"
                <br />
                <input type="checkbox" value="specialty" onChange={handleSizeChange} />
                specialty
                <br />
              </>
            )}
            </div>
            <br />
            <div className="checkbox checkbox-container-one">
              
              {location.pathname === '/RetractorCompare' && (
                <>
                <input type="checkbox" value="Tear-resistant Titan Polypropylene" onChange={handleMediaChange} />
                Polypropylene
                <br />
                <input type="checkbox" value="Titan No-curl hybrid media" onChange={handleMediaChange} />
                Hybrid
                <br />
                <input type="checkbox" value="Titan No-curl Opaque media" onChange={handleMediaChange} />
                Opaque
                <br />
                <input type="checkbox" value="PVC Free silver backed media, 100% polyester" onChange={handleMediaChange} />
                Eco
                <br />
                <input type="checkbox" value="13oz scrim vinyl" onChange={handleMediaChange} />
                Vinyl
                </>
              )}
            </div>
            <div className="checkbox checkbox-container-one">
              
              {location.pathname === '/tableThrowCompare' && (
                <>
                <input type="checkbox" value="antiMicrobial" onChange={handleMediaChange} />
                antiMicrobial
                <br />
                <input type="checkbox" value="convertable" onChange={handleMediaChange} />
                convertable
                <br />
                <input type="checkbox" value="eco" onChange={handleMediaChange} />
                Eco
                <br />
                <input type="checkbox" value="fitted" onChange={handleMediaChange} />
                Fitted
                <br />
                <input type="checkbox" value="lazerline" onChange={handleMediaChange} />
                Lazerline
                <br />
                <input type="checkbox" value="runner" onChange={handleMediaChange} />
                Runner
                </>
              )}
            </div>
 
        </label>
        {/* <ItemList filteredItems={filteredItems} className="list"/> */}
        <br />
        <CompareBar itemList={itemList} filteredItems={filteredItems} setItem={setItem} setItem2={setItem2} setItem3={setItem3} className="list"/>
      </div>
  )
}

export default ItemTypeList;