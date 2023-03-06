import React from "react"


function ComparisonSelect({itemList, setInput1, setInput2, setInput3}) {

    return (
        <>
        <div className="section-box is-multiple ">
        <div className="select item is-primary">
        <select onChange={e => setInput1(e.target.value)} className="multiple">
              {itemList.map(item => (
                <option key={item.id} value={item.id} >
                  {item.name}
                  {item.id}
                </option>
              ))}
        </select>
        </div>
        <div className="select item is-info">
        <select onChange={e => setInput2(e.target.value)} className="multiple is-info" >
          {itemList.map(item => (
            <option key={item.id} value={item.id} >
              {item.name}
              {item.id}
            </option>
          ))}
        </select>
        </div>
        <div className="select item is-info">
        <select onChange={e => setInput3(e.target.value)} className="multiple is-info" >
          {itemList.map(item => (
            <option key={item.id} value={item.id} >
              {item.name}
              {item.id}
            </option>
          ))}

        </select>
        </div>
        <hr />
        </div>
        
        </>
    )
}

export default ComparisonSelect