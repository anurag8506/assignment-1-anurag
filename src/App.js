

import React from 'react'
import Topbar from  "./components/Topbar";
import Navbar from "./components/Navbar";
import Cards from  "./components/Cards";
import Filter from  "./components/Filter";
import Card from  "./components/Card";
import Footer from  "./components/Footer";



const App = () => {
  return (
    <div>
      <div>
      <Topbar/>
    </div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter/>
      </div>
    <div>
      <Cards/>
    </div>
    <div>
      <Card/>
    </div>
    <div>
      <Footer/>
    </div>
    
    </div>
  );
};

export default App