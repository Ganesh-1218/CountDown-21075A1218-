import React, { useState } from 'react'
import DisplayTime from './DisplayTime'
import './Display.css'
const HomeFile = () => {
    const [currentCity,setCurrentCity]=useState("INDIA")
  return (
    <div>
        <div id='list'>
            <button onClick={()=>setCurrentCity("INDIA")}>India</button>
            <button onClick={()=>setCurrentCity("CHINA")}>China</button>
            <button onClick={()=>setCurrentCity("USA")}>USA</button>
            <button onClick={()=>setCurrentCity("AUSTRALIA")}>Australia</button>
        </div>
        <DisplayTime city={currentCity}/>
    </div>
  )
}

export default HomeFile