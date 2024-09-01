import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Aboute, Contact, Home, Project } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
     <Router>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<Aboute/>} />
         <Route path='/projects' element={<Project/>} />
         <Route path='/contact' element={<Contact/>} />
       </Routes>
     </Router>

    </div>
  );
}

export default App;
