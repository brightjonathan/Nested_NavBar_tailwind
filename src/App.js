import { Routes, Route } from 'react-router-dom';
import React from 'react'
import NarBar from './Component/NarBar';
import Home from './Page/Home';


const App = () => {
  return (
    <div>
     <NarBar />
     
     <Routes>
      <Route path='/' element={ <Home />} />
     </Routes>
    </div>
  )
}

export default App


