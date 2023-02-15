import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,  Routes,  Route  } from 'react-router-dom';
//component imports
import SearchBar from "./components/SearchBar";
import ShowRetractors from "./components/retractors/ShowRetractors";
import ShowTent from "./components/tents/ShowTents";
import Header from "./components/Header";
import About from "./components/About";
//style imports
import 'bulma/css/bulma.css';
import './App.css';
//data imports
import Retractors from "./Data/Retractors";
import tents from "./Data/Tents";

function App() {
    
    const [item, setItem] = useState({});
    const [item2, setItem2] = useState({});
    const [item3, setItem3] = useState({});
    const [itemList, setItemList] = useState({})
    const [selectedRoute, setSelectedRoute] = useState("");

    useEffect(() => {
        if (selectedRoute === "retractors") {
          setItemList(Retractors);
        } else if (selectedRoute === "tents") {
          setItemList(tents);
        } else {
          setItemList([{category: null}])
        }
      }, [selectedRoute]);


    return (
        <div className="app-container">
            <Router>
                <Header setSelectedRoute={setSelectedRoute} itemList={itemList} />
                <Routes>
                    <Route path='/About' element={<About />} />
                    <Route path='/RetractorCompare' element={
                    <>
                      <SearchBar itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3} />
                      <ShowRetractors retractor={item} retractor2={item2} retractor3={item3} />
                    </>} />
                    <Route path='/TentsCompare' element={
                    <>
                      <SearchBar itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3} />
                      <ShowTent tent={item} tent2={item2} tent3={item3} />
                    </>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;