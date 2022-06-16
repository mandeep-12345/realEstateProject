import React from 'react'
import './Sidemenu.css'
import Property from '../images/imgs/house.png'
import bell from '../images/imgs/bell.png'
import received from '../images/imgs/received.png'
import sentIntrest from '../images/imgs/sentInterest.png'
import eye from '../images/imgs/eye.png'
import tariff from '../images/imgs/tariff.png'
const Sidemenu = () => {
  return (
    <aside className='sidemenu-container'>
      <div className='sidemenu-head'>
        <p className='logo'>Logo</p>
        </div>
      <div className='sidedata'>
      <div className='sidemenu-images'>
          
      
          <img className='property menu-icons' src={Property} alt='proper'/>
          <img className='bell menu-icons' src={bell} alt='property' />
          <img className='received menu-icons' src={received} alt='property' />
          <img className='sent menu-icons' src={sentIntrest} alt='property' />
          <img className='views menu-icons' src={eye} alt='property' /> 
          <img className='tariff menu-icons' src={tariff} alt='property' />
          </div>
          <ol className="sidbar-text-container">
          <li className="sidemenu-text">Property</li>
         <li className="sidemenu-text">Assistance</li>
         <li className="sidemenu-text">Received Interest</li>
          <li className="sidemenu-text">sent Interest</li>
          <li className='sidemenu-text'>Property Views</li>
         <li className="sidemenu-text">Tariff Plan</li>
    
          </ol>
      </div>
      
      
    </aside>
  )
}

export default Sidemenu;