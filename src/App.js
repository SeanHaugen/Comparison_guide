
import React from "react";
import SearchRetractors from "./components/retractors/SearchRtrc";
import 'bulma/css/bulma.css';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";

import { BrowserRouter as Router,  Routes,  Route  } from 'react-router-dom'

function App() {

    return (
        <div className="container">
            <Router>
                <Header />
                
                <Routes>
                    <Route path='/About' element={<About />} />
                    <Route path='/RetractorCompare' element={<SearchRetractors />} />
                </Routes>
            </Router>
        </div>

    )
}

export default App;