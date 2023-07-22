import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './component/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
