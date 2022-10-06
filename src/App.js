import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './index.css'; 

import { Navbar, Home, SearchResults} from './components'

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/search/:searchTerm"  element={<SearchResults/>} />

            </Routes>        
        </div>
     </BrowserRouter>
  )
}


export default App