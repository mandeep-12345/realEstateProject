import React,{ Component } from 'react';
import Login from './Components/Login'
import Signup from './Components/Signup';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Generlinfo from './Components/Generlinfo';
import BasicInfo from './Components/BasicInfo';
  const App =() => {
  
    return (
      <div>
        <BasicInfo/>
      </div>
      
        // <div>
        // <BrowserRouter>
        
        // <Routes>
        // <Route path='/' element={<BasicInfo/>} />
        //   <Route path="/BasicInfo" element={<BasicInfo/>}/>
        //   <Route path="/Generlinfo" element={<Generlinfo/>}/>
        // </Routes>
        // </BrowserRouter>
        // </div>
       
     
      

    )
  }

    
  
export default App;

