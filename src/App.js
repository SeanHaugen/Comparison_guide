import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,  Routes,  Route  } from 'react-router-dom';
//component imports
import SearchBar from "./components/SearchBar";
import ShowRetractors from "./components/retractors/ShowRetractors";
import ShowTent from "./components/tents/ShowTents";
import ShowMedia from "./components/media/ShowMedia";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
//style imports
import 'bulma/css/bulma.css';
import './App.css';
//data imports
import Retractors from "./Data/Retractors";
import tents from "./Data/Tents";

function App() {
    
  //The three items here are to handle each of the inputs on the form
    const [item, setItem] = useState({});
    const [item2, setItem2] = useState({});
    const [item3, setItem3] = useState({});

  //The selected Route state is assigned based on which route the user chooses from the menu utilizing the useEffect Hook. 
  //The route chosen then assigns the corresponding item list
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
                    <div>
                      <SearchBar itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3} />
                      <ShowRetractors retractor={item} retractor2={item2} retractor3={item3} />
                    </div>
                    }
                     />
                    <Route path='/TentsCompare' element={
                    <div>
                      <SearchBar itemList={itemList} setItem={setItem} setItem2={setItem2} setItem3={setItem3} />
                      <ShowTent tent={item} tent2={item2} tent3={item3} />
                    </div>
                    }
                     />
                     <Route path='/mediaCompare' element={
                    <div>
                      <ShowMedia tent={item} tent2={item2} tent3={item3} />
                    </div>
                    }
                     />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App;