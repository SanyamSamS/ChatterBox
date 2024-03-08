import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          Test Column 1
        </div>
        <div className="col">
          Test Column 2
        </div>
      </div>
    </div>
    </>
  )
}

export default App
