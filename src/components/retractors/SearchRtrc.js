import React, { useState} from "react";
import Retractors from "../../Data/Retractors";


function SearchRetractors() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [retractor, setRetractor] = useState({});
    const [retractor2, setRetractor2] = useState({});
    const [retractor3, setRetractor3] = useState({});
  
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

    const handleSubmit3 = (e) => {
        e.preventDefault();
        const selectedRetractor = Retractors.find(r => r.id === parseInt(input3) );
        setRetractor3(selectedRetractor);
      };

    const clearInputs = () => {
        setInput1('');
        setInput2('');
        setInput3('');
        setRetractor({});
        setRetractor2({});
        setRetractor3({});
    };

    return (
        <>
        <div className="comparison-guide">
        <form onSubmit={handleSubmit}  >
            <input type="text" className="input is-primary" placeholder="Enter Item Number" value={input1} onChange={e => setInput1(e.target.value)} />
            <button type="submit" className="button" >Submit</button>
        </form>
        <form onSubmit={handleSubmit2}>
            <input type="text" className="input is-info" placeholder="Enter Item Number" value={input2} onChange={e => setInput2(e.target.value)} />
            <button type="submit" className="button">Compare</button>
        </form>
        <form onSubmit={handleSubmit3}>
            <input type="text" className="input is-info" placeholder="Enter Item Number" value={input3} onChange={e => setInput3(e.target.value)} />
            <button type="submit" className="button">Compare</button>
        </form>
        

        <div className="table-container" >
        {Object.keys(Retractors).length > 0 && (
            <table className="product-section table is-striped ">
                <thead>
                    <tr>{retractor.name}</tr>
                    <tr>{retractor.id}</tr>
                </thead>
                <tbody>
                    <tr >{retractor.size}</tr>
                    <tr >{retractor.media}</tr>
                    <tr >{retractor.RCAT}</tr>
                    <tr >{retractor.base}</tr>
                    <tr >{retractor.pole}</tr>
                    <tr >{retractor.hardware3}</tr>
                    <tr >{retractor.production}</tr>
                </tbody>

            </table >

    )}
    <hr />
    <div className="bottom-container table-container">

        {Object.keys(Retractors).length > 0 && (
            <table className="product-section table is-bordered is-narrow is-hoverable ">
                <thead>
                    <tr>{retractor2.name}</tr>
                    <tr>{retractor2.id}</tr>
                </thead>
                <tbody>
                    <tr className={retractor2.size === retractor.size ? '' : 'highlight'}  >{retractor2.size}</tr>
                    <tr className={retractor2.media === retractor.media ? '' : 'highlight'}>{retractor2.media}</tr>
                    <tr className={retractor2.RCAT === retractor.RCAT ? '' : 'highlight'}>{retractor2.RCAT}</tr>
                    <tr className={retractor2.base === retractor.base ? '' : 'highlight'}>{retractor2.base}</tr>
                    <tr className={retractor2.pole === retractor.pole ? '' : 'highlight'}>{retractor2.pole}</tr>
                    <tr className={retractor2.hardware3 === retractor.hardware3 ? '' : 'highlight'}>{retractor2.hardware3}</tr>
                    <tr className={retractor2.production === retractor.production ? '' : 'highlight'}>{retractor2.production}</tr>
                </tbody>
            </table>
    )}


        {Object.keys(Retractors).length > 0 && (
            <table className="product-section table is-bordered is-narrow is-hoverable">
                <thead>
                    <tr>{retractor3.name}</tr>
                    <tr>{retractor3.id}</tr>
                </thead>
                <tbody>
                    <tr className={retractor3.size === retractor.size ? '' : 'highlight'}  >{retractor3.size}</tr>
                    <tr className={retractor3.media === retractor.media ? '' : 'highlight'}>{retractor3.media}</tr>
                    <tr className={retractor3.RCAT === retractor.RCAT ? '' : 'highlight'}>{retractor3.RCAT}</tr>
                    <tr className={retractor3.base === retractor.base ? '' : 'highlight'}>{retractor3.base}</tr>
                    <tr className={retractor3.pole === retractor.pole ? '' : 'highlight'}>{retractor3.pole}</tr>
                    <tr className={retractor3.hardware3 === retractor.hardware3 ? '' : 'highlight'}>{retractor3.hardware3}</tr>
                    <tr className={retractor3.production === retractor.production ? '' : 'highlight'}>{retractor3.production}</tr>
                </tbody>
            </table>
    )}

        </div>
        <button onClick={clearInputs} className="button">Clear Inputs</button>

        </div>


    </div>
        </>
    )
}

export default SearchRetractors