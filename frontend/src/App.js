// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Header from './component/Header';
import Sidemenu from './component/sidemenu';
import Navbar from './component/Navbar'
import GridData from "./forms/GridData";

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Sidemenu" element={<Sidemenu />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/GridData" element={<GridData />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
