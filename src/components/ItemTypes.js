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
        const passSizeFilter = sizeFilter.length === 0 || sizeFilter.includes(item.type || item.size);
        const passMediaFilter = mediaFilter.length === 0 || mediaFilter.includes(item.media)
        return passCategoryFilter && passSizeFilter && passMediaFilter;
        })


 
  return (
      <div className="content-container  box">
        <div className="checkbox ">
          <div className="checkbox-container-one">
          {(location.pathname === '/TentsCompare' || location.pathname === '/RetractorCompare') && (
            <>
              <input  type="checkbox" value="good" onChange={handleCategoryChange} style={{width: "1rem", height: "1rem"}} />
              <label htmlFor="good">Good</label>
              
              <input  type="checkbox" value="better" onChange={handleCategoryChange} style={{width: "1rem", height: "1rem"}}  />
              <label htmlFor="better">Better</label>
              
              <input type="checkbox" value="best" onChange={handleCategoryChange} style={{width: "1rem", height: "1rem"}}  />
              <label htmlFor="best">Best</label>
              
            </>
          )}
          
          </div>
          <br />
            <div className="checkbox checkbox-container-one ">
            {location.pathname === '/RetractorCompare' && (
              <>
                <input type="checkbox" value="tableTop" onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="tableTop">tableTop</label>
               
                <input type="checkbox" value="16-24" onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="16-24">16"-24"</label>
                
                <input type="checkbox" value="31.5" onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="31.5">31.5"</label>
                
                <input type="checkbox" value="33.5" onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="33.5">33.5"</label>
                
                <input type="checkbox" value="36-48" onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="36-48">36"-48"</label>
               
                <input type="checkbox" value="specialty" onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="Specialty">Specialty</label>
                
              </>
            )}
            </div>
            <br />
            <div className="checkbox checkbox-container-one">
              
              {location.pathname === '/RetractorCompare' && (
                <>
                <input type="checkbox" value="Tear-resistant Titan Polypropylene" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="Polypropylene">Polypropylene</label>
                <br />
                <input type="checkbox" value="Titan No-curl hybrid media" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="Hybrid">Hybrid</label>
                <br />
                <input type="checkbox" value="Titan No-curl Opaque media" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="tableTop">Opaque</label>
                <br />
                <input type="checkbox" value="PVC-free silver backed media" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="PVC Free">PVC Free</label>
                <br />
                <input type="checkbox" value="13oz scrim vinyl" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="13oz">13oz</label>
                </>
              )}
            </div>
            <div className="checkbox checkbox-container-one">
              
              {location.pathname === '/tableThrowCompare' && (
                <>
                <input type="checkbox" value="standard"  onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="standard">Standard</label>
                <br />
                <input type="checkbox" value="antiMicrobial" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="antiMicrobial">AntiMicrobial</label>
                <br />
                <input type="checkbox" value="convertable" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="convertable">Convertable</label>
                <br />
                <input type="checkbox" value="eco" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="eco">Eco</label>
                <br />
                <input type="checkbox" value="fitted" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="fitted">Fitted</label>
                <br />
                <input type="checkbox" value="lazerline" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="lazerline">Lazerline</label>
                <br />
                <input type="checkbox" value="runner" onChange={handleMediaChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="runner">Runner</label>
                </>
              )}
            </div>
            <div className="checkbox checkbox-container-one">
              
              {location.pathname === '/tableThrowCompare' && (
                <>
                <input type="checkbox" value='4ft' onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="4ft">4ft</label>
                <br />
                <input type="checkbox" value='6ft' onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="6ft">6ft</label>
                <br />
                <input type="checkbox" value='8ft' onChange={handleSizeChange} style={{width: "1rem", height: "1rem"}}  />
                <label htmlFor="8ft">8ft</label>
                </>
              )}
            </div>
 
        </div>
        <br />
        <CompareBar itemList={itemList} filteredItems={filteredItems} setItem={setItem} setItem2={setItem2} setItem3={setItem3} className="list"/>
      </div>
  )
}

export default ItemTypeList;