import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Challenges from './views/Challenges';
import Results from './views/Results';
import SpeedCheck from './views/SpeedCheck';

const App = () => {
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/results' element={<Results />} />
          <Route path='/challenges' element={<Challenges />} />
          <Route path='/' element={<SpeedCheck />} />
        </Routes>
      </BrowserRouter>
      <main></main>
    </div>
  )
}

export default App;
