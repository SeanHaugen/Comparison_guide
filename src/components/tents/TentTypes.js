// import { useState } from "react";
// import ItemList from '../ItemList'


// function TentTypeList({itemList}) {

//     const [categoryFilter, setCategoryFilter] = useState([]);


//     const handleCategoryChange = (e) => {
//         const { value, checked } = e.target;
//         if (checked) {
//           setCategoryFilter([...categoryFilter, value]);
//         } else {
//           setCategoryFilter(categoryFilter.filter((cat) => cat !== value));
//         }
//       };
    
//     const filteredRetractors = itemList.filter((retractor) => {
//         const passCategoryFilter = categoryFilter.length === 0 || categoryFilter.includes(retractor.category);
//         return passCategoryFilter
//         })
 


//     return (
//         <div>
//         <label>
//             <input type="checkbox" value="good" onChange={handleCategoryChange} />
//             Good
//             <input type="checkbox" value="better" onChange={handleCategoryChange} />
//             Better
//             <input type="checkbox" value="Best" onChange={handleCategoryChange} />
//             Best
//         </label>
//         <br />
//         <ItemList itemList={itemList} filteredItems={filteredRetractors}/>
//         </div>
//     )
// }

// export default TentTypeList;