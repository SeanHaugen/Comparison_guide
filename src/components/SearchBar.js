import React, { useEffect, useState} from "react";
// import Retractors from "../Data/Retractors";
// import tents from "../../Data/Tents";
// import ShowTent from "../tents/ShowTents";


function SearchBar({itemList,  setItem, setItem2, setItem3}) {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const selectedItem = itemList.find(r => (r.id === parseInt(input1) || r.name === input1));
      const selectedItem2 = itemList.find(r => (r.id === parseInt(input2) || r.name === input2));
      const selectedItem3 = itemList.find(r => (r.id === parseInt(input3) || r.name === input3));
      setItem(selectedItem || {});
      setItem2(selectedItem2 || {});
      setItem3(selectedItem3 || {} );
    };

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

    return (
        <>
        <div className="comparison-guide">
        <form onSubmit={handleFormSubmit}  >
            <input type="text" className="input is-primary" placeholder="Enter Item Number" value={input1} onChange={e => setInput1(e.target.value)} />
            <input type="text" className="input is-info" placeholder="Enter Item Number to Compare" value={input2} onChange={e => setInput2(e.target.value)} />
            <input type="text" className="input is-info" placeholder="Enter Item Number to Compare" value={input3} onChange={e => setInput3(e.target.value)} />
            <button type="submit" className="button">Compare</button>
        </form>
        
        <button onClick={clearInputs} className="button">Clear Inputs</button>
        </div>
        
        
    </>
    )
}

export default SearchBar