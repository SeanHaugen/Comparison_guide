import React,{ useState } from "react";
import ItemList from './ItemList'


function ItemTypeList({itemList}) {

    const [categoryFilter, setCategoryFilter] = useState([]);


    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setCategoryFilter([...categoryFilter, value]);
        } else {
          setCategoryFilter(categoryFilter.filter((cat) => cat !== value));
        }
      };
    
    const filteredItems = itemList.filter((item) => {
        const passCategoryFilter = categoryFilter.length === 0 || categoryFilter.includes(item.category);
        return passCategoryFilter
        })
 
        

    return (
        <div className="checkbox-container search-bar">
          <strong>Filter by:</strong>
        <label className="checkbox">
            <input  type="checkbox" value="good" onChange={handleCategoryChange} />
            Good
            <br />
            <input  type="checkbox" value="better" onChange={handleCategoryChange} />
            Better
            <br />
            <input type="checkbox" value="best" onChange={handleCategoryChange} />
            Best
        </label>
        <ItemList itemList={itemList} filteredItems={filteredItems}/>
        <br />
        
        </div>
    )
}

export default ItemTypeList;