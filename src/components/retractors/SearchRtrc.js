import React, { useState} from "react";
import Retractors from "../../Data/Retractors";


function SearchRetractors() {



    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [retractor, setRetractor] = useState({});
    const [retractor2, setRetractor2] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const selectedRetractor = Retractors.find(r => r.id === parseInt(input1));
      setRetractor(selectedRetractor);
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        const selectedRetractor = Retractors.find(r => r.id === parseInt(input2) );
        setRetractor2(selectedRetractor);
      };

    const clearInputs = () => {
        setInput1('');
        setInput2('');
        setRetractor({});
        setRetractor2({});
    };

    return (
        <>
        <div className="comparison-guide">
        <form onSubmit={handleSubmit}  >
            <input type="text" placeholder="Enter number or word" value={input1} onChange={e => setInput1(e.target.value)} />
            <button type="submit" >Submit</button>
        </form>
        <form onSubmit={handleSubmit2}>
            <input type="text" placeholder="Enter number or word" value={input2} onChange={e => setInput2(e.target.value)} />
            <button type="submit">Compare</button>
        </form>
        <button onClick={clearInputs}>Clear Inputs</button>

        <div >
        {Object.keys(Retractors).length > 0 && (
            <table className=".product-section">
                <thead>
                    <tr>{retractor.name}</tr>
                    <tr>{retractor.id}</tr>
                </thead>
                <tbody>
                    <tr >{retractor.size}</tr>
                    <tr >{retractor.media}</tr>
                    <tr >{retractor.RCAT}</tr>
                    <tr >{retractor.hardware}</tr>
                    <tr >{retractor.hardware1}</tr>
                    <tr >{retractor.hardware2}</tr>
                    <tr >{retractor.production}</tr>
                </tbody>

            </table >

    )}

        {Object.keys(Retractors).length > 0 && (
            <table className=".product-section">
                <thead>
                    <tr>{retractor2.name}</tr>
                    <tr>{retractor2.id}</tr>
                </thead>
                <tbody>
                    <tr className={retractor2.size === retractor.size ? '' : 'highlight'}  >{retractor2.size}</tr>
                    <tr className={retractor2.media === retractor.media ? '' : 'highlight'}>{retractor2.media}</tr>
                    <tr className={retractor2.RCAT === retractor.RCAT ? '' : 'highlight'}>{retractor2.RCAT}</tr>
                    <tr className={retractor2.hardware === retractor.hardware ? '' : 'highlight'}>{retractor2.hardware}</tr>
                    <tr className={retractor2.hardware1 === retractor.hardware1 ? '' : 'highlight'}>{retractor2.hardware1}</tr>
                    <tr className={retractor2.hardware2 === retractor.hardware2 ? '' : 'highlight'}>{retractor2.hardware2}</tr>
                    <tr className={retractor2.production === retractor.production ? '' : 'highlight'}>{retractor2.production}</tr>
                </tbody>
            </table>
    )}

        </div>


    </div>
        </>
    )
}

export default SearchRetractors