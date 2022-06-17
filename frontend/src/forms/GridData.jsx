import React from 'react';
import Header from '../component/Header';
import Sidemenu from '../component/sidemenu';
import Navbar from '../component/Navbar'

const GridData =()=>{
    return (
        <div>
        <Header />
        <Sidemenu />
        <Navbar />
      <div className="Grid-main-container">  
        <div className="Grid-container">
            <div className='Grid-PPID'>
                PPID
            </div>
            <div className='Grid-Image'>
                Image
            </div>
            <div className='Grid-Property'>
                Property
            </div>
            <div className='Grid-Contact'>
                Contact
            </div>
            <div className='Grid-Area'>
                Area
            </div>
            <div className='Grid-Views'>
                Views
            </div>
            <div className='Grid-Status'>
                Status
            </div>
            <div className='Grid-DL'>
                Days Left
            </div>
            <div className='Grid-Action'>
                Action
            </div>


        </div>
        </div>
    </div>
    )
}

export default GridData;