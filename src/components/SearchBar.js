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
        <div className="comparison-guide box">
        <form onSubmit={handleFormSubmit}   >
            <input type="text" className="input is-primary is-focused" placeholder="Enter Item Number" value={input1} onChange={e => setInput1(e.target.value)} />
            <input type="text" className="input is-info is-focused" placeholder="Enter Item Number to Compare" value={input2} onChange={e => setInput2(e.target.value)} />
            <input type="text" className="input is-info is-focused" placeholder="Enter Item Number to Compare" value={input3} onChange={e => setInput3(e.target.value)} />
        
            <button type="submit" onClick={handleFormSubmit} className="button submit is-primary is-responsive">Compare</button>
            <button onClick={clearInputs} type="reset" className="button is-danger is-responsive">Clear Inputs</button>
        </form>

        </div>
        
        
    </>
    )
}

export default SearchBar