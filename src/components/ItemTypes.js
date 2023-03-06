import React,{ useState } from "react";
// import ItemList from './ItemList'
import CompareBar from "./ComparisonBar";
import { useLocation } from "react-router-dom";



function ItemTypeList({itemList, setItem, setItem2, setItem3}) {

    const [categoryFilter, setCategoryFilter] = useState([]);
    const [sizeFilter, setSizeFilter] = useState([]);
    const location =useLocation()

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


    
    const filteredItems = itemList.filter((item) => {
        const passCategoryFilter = categoryFilter.length === 0 || categoryFilter.includes(item.category);
        const passSizeFilter = sizeFilter.length === 0 || sizeFilter.includes(item.type);
        return passCategoryFilter && passSizeFilter
        })


 
  return (
      <div className="content-container  box">
        <label className="checkbox">
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
            <div className="checkbox checkbox-container-two">
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
 
        </label>
        {/* <ItemList filteredItems={filteredItems} className="list"/> */}
        <br />
        <CompareBar itemList={itemList} filteredItems={filteredItems} setItem={setItem} setItem2={setItem2} setItem3={setItem3} className="list"/>
      </div>
  )
}

export default ItemTypeList;