import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './component/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Thankyou from './Thankyou/Thankyou';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
      {/* <Index /> */}
    </>
  )
}

export default App
