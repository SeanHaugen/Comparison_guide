import { warning } from "@remix-run/router";
import React, { useEffect, useState} from "react";
import ItemTypeList from "./ItemTypes";


function SearchBar({itemList,  setItem, setItem2, setItem3}) {
    
    //Assign state to each input
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    // const [selectItem, setSelectItem] = useState('')


    //function for form validation requiring an input
    const validateInput = (input) => {
        if (input.trim() === '') {
          return false;
        } else {
          return true;
        }
      }



    //handles the submission of each input line on the form
    const handleFormSubmit = (e) => {
      e.preventDefault();
      //returns the first item to satisfy the testing function. function looks for id or name else it will return undefined, using validate input to make input1 required
      if(validateInput(input1)){
        const selectedItem = itemList.find(r => (r.id === parseInt(input1) || r.name === input1));
        const selectedItem2 = itemList.find(r => (r.id === parseInt(input2) || r.name === input2));
        const selectedItem3 = itemList.find(r => (r.id === parseInt(input3) || r.name === input3));
        //sets the item to the correct selected item input or will return an empty object
        setItem(selectedItem || {});
        setItem2(selectedItem2 || {});
        setItem3(selectedItem3 || {} );
      } else {
        warning('enter primary input')
      }
    };
    //Clears each input and table item
    const clearInputs = () => {
        setInput1('');
        setInput2('');
        setInput3('');
        setItem([]);
        setItem2([]);
        setItem3([]);
    };
    useEffect(() => {
        clearInputs();
        // eslint-disable-next-line 
      }, [itemList]);

    // const handleValue = () => {
    //   setSelectItem(input1)
    // }


    return (
        <>
        <div className="comparison-guide box">
        <ItemTypeList itemList={itemList} className="search-bar"  /> 
        
        <form onSubmit={handleFormSubmit} >
            {/* form inputs */}
            <input 
            type="text"
            className="dropdown-trigger input is-primary is-focused" 
            placeholder="Enter Item Number" 
            value={input1} 
            onChange={e => setInput1(e.target.value)} 
            required 
            />
            <input 
            type="text" 
            className="dropdown-trigger input is-info is-focused" 
            placeholder="Enter Item Number to Compare" 
            value={input2} 
            onChange={e => setInput2(e.target.value)}                
            />
            <input 
            type="text" 
            className="dropdown-trigger input is-info is-focused" 
            placeholder="Enter Item Number to Compare" 
            value={input3} 
            onChange={e => setInput3(e.target.value)}                 
            />
            {/* form buttons */}
            <button  onClick={handleFormSubmit} className="button submit is-primary is-responsive">Compare</button>
            <button onClick={clearInputs} type="reset" className="button is-danger is-responsive">Clear</button>

        </form>
        </div>
        
        </>
    )
}

export default SearchBar