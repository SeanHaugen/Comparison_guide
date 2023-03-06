import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,  Routes,  Route  } from 'react-router-dom';
//component imports
import ShowRetractors from "./components/retractors/ShowRetractors";
import ShowTent from "./components/tents/ShowTents";
import ShowMedia from "./components/media/ShowMedia";
import ShowTableThrows from "./components/tableThrows/ShowTableThrows";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import ItemTypeList from "./components/ItemTypes";
//style imports
import 'bulma/css/bulma.css';
import './App.css';
//data imports
import allRetractors from "./Data/Retractors/all";
import tents from "./Data/Tents";
import tableThrows from "./Data/TableThrows/Throws";

function App() {
  //The three items here are to handle each of the inputs on the form
    const [item, setItem] = useState({});
    const [item2, setItem2] = useState({});
    const [item3, setItem3] = useState({});

  //The selected Route state is assigned based on which route the user chooses from the menu utilizing the useEffect Hook. 
  //The route chosen then assigns the corresponding item list
    const [itemList, setItemList] = useState([])
    const [selectedRoute, setSelectedRoute] = useState("");
    useEffect(() => {
        if (selectedRoute === "retractors") {
          setItemList(allRetractors);
        } else if (selectedRoute === "tents") {
          setItemList(tents);
        } else if (selectedRoute === "tableThrows") {
          setItemList(tableThrows);
        } else {
          setItemList([{category: null}])
        }
      }, [selectedRoute]);
      
    return (
        <div className="app-container">
            <Router>
                <Header setSelectedRoute={setSelectedRoute} />
                <Routes>
                    <Route path="/" element={<About/>} />
                    <Route path='/About' element={<About />} />
                    <Route path='/RetractorCompare' element={
                      <div>
                        <div className="container">
                        <h1 className=" title retractors">Retractors</h1>
                        <ItemTypeList  itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3}  />
                        </div>
                        <ShowRetractors retractor={item} retractor2={item2} retractor3={item3} />
                      </div>
                    }/>
                    <Route path='/TentsCompare' element={
                      <div>
                        <div className="container">
                        <h1 className="tents title">Tents</h1>
                        <p className="warning">For simplicity, only item numbers for the dye sub variety of tents are used for each type of tent</p>
                        <ItemTypeList itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3}  />
                        </div>
                        <ShowTent tent={item} tent2={item2} tent3={item3} />
                      </div>
                    }/>
                    <Route path='/mediaCompare' element={
                      <div>
                        <h1 className="title media">Media</h1>
                        <ShowMedia tent={item} tent2={item2} tent3={item3} />
                      </div>
                    }/>
                    <Route path='/tableThrowCompare' element={
                      <div>
                        <h1 className="title tableThrows">Table Throws Under Construction</h1>
                        <ItemTypeList itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3}  />
                        <ShowTableThrows tableThrow={item} throw2={item2} throw3={item3} />
                      </div>
                    } />
                </Routes>
            </Router>
          <Footer />
        </div>
    )
}

export default App;