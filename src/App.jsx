import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './nav';
import Footer from './footer';

import { Routes, Route} from 'react-router-dom';
const App = ()=>{
    return(
        <>
             <Navbar></Navbar>
             <Routes>
                 <Route path='/' Component={Home}/>
                 <Route path='/about' Component={About}/>
                 <Route path='/service' Component={Service}/>
                 <Route path='/contact' Component={Contact}/>
             </Routes>
             <Footer/>
        </>
    )
}

export default App;