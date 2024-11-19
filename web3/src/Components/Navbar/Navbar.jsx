import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const[menu, setMenu] = useState("Home");

    return (
      
  
      <div className='navbar'>
        <div className="left">
          <ul className='navbar-menu'>
            <li onClick={() => setMenu("Explore")} className={menu==="Explore"?"active":""}>Explore</li>
            <li onClick={() => setMenu("About Us")} className={menu==="About Us"?"active":""}>About Us</li>
         </ul>
       
      </div>
      <div className="right">
      <div className="button"><button>Connect Wallet</button></div>

      </div>
    </div>
    )
  }
  