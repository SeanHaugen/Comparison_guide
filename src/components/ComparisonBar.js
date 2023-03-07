import { warning } from "@remix-run/router";
import React, { useState, useEffect} from "react";

function CompareBar({itemList, filteredItems,  setItem, setItem2, setItem3}) {
    
  //Assign state to each input
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

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
      const selectedItem = itemList.find(r => (r.id === parseInt(input1)));
      const selectedItem2 = itemList.find(r => (r.id === parseInt(input2)));
      const selectedItem3 = itemList.find(r => (r.id === parseInt(input3)));
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
    clearInputs()
  }, [])


    return (
        <>
        
        <div className="comparison-guide section">
        <form onSubmit={handleFormSubmit} >
      
          {/* form inputs */}
          <div className="section-box">
          <section>
          <input 
            type="text"
            placeholder="Enter Item Number" 
            className="dropdown-trigger input is-primary is-focused"
            value={input1} 
            onChange={e => setInput1(e.target.value)} 
            list="retractors"
            required 
            name="retractors"
            />
            <datalist id="retractors">
              {filteredItems.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </datalist>
          </section>
          <section>
            <input 
            type="text" 
            className="dropdown-trigger input is-info is-focused " 
            placeholder="Item Number" 
            value={input2} 
            onChange={e => setInput2(e.target.value)} 
            list="retractors"
            name="retractors"               
            />
            <datalist id="retractors">
              {filteredItems.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </datalist>
          </section>
          <section >
            <input 
            type="text" 
            className="dropdown-trigger input is-info is-focused" 
            placeholder="Item Number" 
            value={input3} 
            onChange={e => setInput3(e.target.value)}     
            list="retractors"
            name="retractors"            
            />
            <datalist id="retractors">
              {filteredItems.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </datalist>
          </section>
          </div>

          <div className="button-container">
            <button  onClick={handleFormSubmit} className="button submit is-primary is-responsive">Compare</button>
            <button onClick={clearInputs} type="reset" className="button is-danger is-responsive">Clear</button>
          </div>

        </form>
        </div>
        </>
    )
}
export default CompareBar