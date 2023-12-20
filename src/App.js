import React from 'react'
import HomeFile from './components/HomeFile'
import './components/Display.css'
const App = () => {
  return (
    <div>
        <div className='background-img'>
          <img src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg' width="100%"/>
        </div>
       <div className='content'>
       <HomeFile/> 
       </div>
    </div>
  )
}

export default App